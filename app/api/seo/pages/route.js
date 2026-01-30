import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ServiceCityPage from '@/models/ServiceCityPage';
import City from '@/models/City';
import Service from '@/models/Service';

// GET - List all SEO pages with filters
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const status = searchParams.get('status');
    const cityId = searchParams.get('cityId');
    const serviceId = searchParams.get('serviceId');
    const isIndexed = searchParams.get('isIndexed');
    
    // Build filter query
    const filter = {};
    if (status) filter.status = status;
    if (cityId) filter.city = cityId;
    if (serviceId) filter.service = serviceId;
    if (isIndexed !== null && isIndexed !== undefined) {
      filter.isIndexed = isIndexed === 'true';
    }
    
    const skip = (page - 1) * limit;
    
    // Get pages with populated data
    const pages = await ServiceCityPage.find(filter)
      .populate('city', 'name slug country')
      .populate('service', 'title slug icon')
      .populate('city.country', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await ServiceCityPage.countDocuments(filter);
    
    return NextResponse.json({
      success: true,
      pages: pages.map(page => ({
        id: page._id,
        slug: page.slug,
        city: {
          id: page.city._id,
          name: page.city.name,
          slug: page.city.slug
        },
        service: {
          id: page.service._id,
          title: page.service.title,
          slug: page.service.slug,
          icon: page.service.icon
        },
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        status: page.status,
        isIndexed: page.isIndexed,
        views: page.views,
        qualityScore: page.qualityScore,
        generatedAt: page.generatedAt,
        createdAt: page.createdAt,
        updatedAt: page.updatedAt
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('SEO pages fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SEO pages' },
      { status: 500 }
    );
  }
}

// POST - Create new SEO page manually
export async function POST(request) {
  try {
    await connectDB();
    
    const data = await request.json();
    const { cityId, serviceId, content, metaTitle, metaDescription, keywords } = data;
    
    if (!cityId || !serviceId || !content) {
      return NextResponse.json(
        { error: 'City ID, Service ID, and content are required' },
        { status: 400 }
      );
    }
    
    // Check if page already exists
    const existingPage = await ServiceCityPage.findOne({
      city: cityId,
      service: serviceId
    });
    
    if (existingPage) {
      return NextResponse.json(
        { error: 'SEO page already exists for this city-service combination' },
        { status: 409 }
      );
    }
    
    // Get city and service for slug generation
    const city = await City.findById(cityId);
    const service = await Service.findById(serviceId);
    
    if (!city || !service) {
      return NextResponse.json(
        { error: 'City or Service not found' },
        { status: 404 }
      );
    }
    
    // Create new page
    const newPage = new ServiceCityPage({
      city: cityId,
      service: serviceId,
      content,
      metaTitle: metaTitle || `${service.title} Services in ${city.name} | Digital Dekho`,
      metaDescription: metaDescription || `Professional ${service.title.toLowerCase()} services in ${city.name}. Expert solutions for local businesses.`,
      keywords: keywords || [`${service.title.toLowerCase()} ${city.name.toLowerCase()}`],
      status: 'draft',
      isIndexed: false,
      generatedBy: 'Manual_Admin'
    });
    
    await newPage.save();
    
    return NextResponse.json({
      success: true,
      message: 'SEO page created successfully',
      page: {
        id: newPage._id,
        slug: newPage.slug,
        status: newPage.status
      }
    });
    
  } catch (error) {
    console.error('SEO page creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create SEO page' },
      { status: 500 }
    );
  }
}