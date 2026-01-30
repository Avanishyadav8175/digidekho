import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ServiceCityPage from '@/models/ServiceCityPage';

// GET - Get single SEO page
export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const { id } = params;
    
    const page = await ServiceCityPage.findById(id)
      .populate('city', 'name slug country')
      .populate('service', 'title slug icon')
      .populate('city.country', 'name');
    
    if (!page) {
      return NextResponse.json(
        { error: 'SEO page not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      page: {
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
        keywords: page.keywords,
        content: page.content,
        status: page.status,
        isIndexed: page.isIndexed,
        canonicalUrl: page.canonicalUrl,
        views: page.views,
        qualityScore: page.qualityScore,
        generatedAt: page.generatedAt,
        generatedBy: page.generatedBy,
        createdAt: page.createdAt,
        updatedAt: page.updatedAt
      }
    });
    
  } catch (error) {
    console.error('SEO page fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SEO page' },
      { status: 500 }
    );
  }
}

// PUT - Update SEO page
export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    const { id } = params;
    const updates = await request.json();
    
    // Remove fields that shouldn't be updated directly
    delete updates._id;
    delete updates.city;
    delete updates.service;
    delete updates.slug;
    delete updates.generatedAt;
    delete updates.generatedBy;
    
    const page = await ServiceCityPage.findByIdAndUpdate(
      id,
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).populate('city', 'name slug')
     .populate('service', 'title slug');
    
    if (!page) {
      return NextResponse.json(
        { error: 'SEO page not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'SEO page updated successfully',
      page: {
        id: page._id,
        slug: page.slug,
        status: page.status,
        isIndexed: page.isIndexed,
        updatedAt: page.updatedAt
      }
    });
    
  } catch (error) {
    console.error('SEO page update error:', error);
    return NextResponse.json(
      { error: 'Failed to update SEO page' },
      { status: 500 }
    );
  }
}

// DELETE - Delete SEO page
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    const { id } = params;
    
    const page = await ServiceCityPage.findByIdAndDelete(id);
    
    if (!page) {
      return NextResponse.json(
        { error: 'SEO page not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'SEO page deleted successfully'
    });
    
  } catch (error) {
    console.error('SEO page deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to delete SEO page' },
      { status: 500 }
    );
  }
}