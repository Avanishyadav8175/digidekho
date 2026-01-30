import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import City from '@/models/City';
import Service from '@/models/Service';
import ServiceCityPage from '@/models/ServiceCityPage';
import Country from '@/models/Country';

// SEO Content Generator Function
function generateSEOContent(city, service) {
  const cityName = city.name;
  const serviceName = service.title;
  const serviceSlug = service.slug;
  const citySlug = city.slug;
  
  // Generate unique content based on service type
  const contentTemplates = {
    'web-development': {
      intro: `${cityName}'s competitive business landscape demands websites that perform exceptionally across all devices and browsers. With a thriving tech ecosystem and diverse business community, your web presence needs to capture attention instantly and convert visitors into customers.`,
      useCase: `A local tech startup in ${cityName} was losing potential clients to competitors with better online presence. After implementing a custom web solution with modern frameworks and mobile optimization, they saw a 340% increase in user engagement within three months. ${cityName} businesses need websites that handle high traffic volumes and provide seamless user experiences.`,
      whyChoose: `Our development approach combines cutting-edge technologies like React and Node.js with deep understanding of ${cityName}'s market dynamics. We specialize in building scalable web applications that serve everything from local businesses to enterprise solutions.`,
      process: ['Discovery & Strategy: Analyze your market position', 'Custom Design: Create wireframes tailored to local audience', 'Development: Build using modern frameworks', 'Testing: Comprehensive QA across devices', 'Launch & Support: Deploy with ongoing maintenance'],
      faqs: [
        { q: `How long does web development take for ${cityName} businesses?`, a: `Most ${cityName} web development projects are completed within 6-12 weeks, depending on complexity and specific requirements.` },
        { q: `Do you build websites that comply with local web development standards in ${cityName}?`, a: `Yes, all our ${cityName} web development projects meet industry standards and best practices for the region.` },
        { q: `Can you integrate local features into web development projects in ${cityName}?`, a: `Absolutely, we regularly integrate location-specific features and local business requirements into our web development solutions.` }
      ]
    },
    'app-development': {
      intro: `${cityName}'s mobile-first population expects apps that work flawlessly and provide exceptional user experiences. Successful businesses need mobile applications that understand local user behaviors and market requirements.`,
      useCase: `A ${cityName}-based fitness company struggled with member engagement across multiple locations. We developed a custom mobile app with location-based features and push notifications. The result? 85% increase in member retention and 200% boost in class bookings.`,
      whyChoose: `We build native iOS and Android applications using Swift, Kotlin, and React Native, optimized for local market conditions. Our development team understands regional user preferences and creates apps that perform excellently across different connectivity conditions.`,
      process: ['Market Research: Analyze local user behavior', 'UX Design: Create interfaces for target audience', 'Native Development: Build using platform-specific languages', 'Integration: Implement local features and services', 'Beta Testing: Test with real local users', 'App Store Optimization: Launch with proper optimization'],
      faqs: [
        { q: `How much does app development cost for ${cityName} businesses?`, a: `${cityName} app development projects typically range from $25,000 to $150,000, depending on features and complexity.` },
        { q: `Do you develop apps that work with local systems in ${cityName}?`, a: `Yes, we regularly integrate local APIs, payment systems, and regional services into our app development projects.` },
        { q: `Can your app development team handle local requirements in ${cityName}?`, a: `Absolutely. We ensure all apps meet regional standards and integrate seamlessly with local business ecosystems.` }
      ]
    },
    'ai-automation': {
      intro: `${cityName}'s growing tech sector creates unique opportunities for businesses to leverage artificial intelligence. From automating customer service to optimizing operations, AI automation helps local businesses stay competitive in an increasingly digital marketplace.`,
      useCase: `A ${cityName}-based logistics company managing operations across the region was struggling with route optimization and customer communication. We implemented an AI automation system that optimized delivery routes and automated customer notifications. The result was 45% reduction in operational costs and 60% improvement in customer satisfaction.`,
      whyChoose: `Our AI automation solutions leverage machine learning frameworks like TensorFlow and PyTorch, combined with understanding of local business environments. We specialize in natural language processing, computer vision, and predictive analytics tailored to regional market patterns.`,
      process: ['Process Analysis: Identify automation opportunities', 'Data Assessment: Evaluate existing data systems', 'AI Model Development: Create custom algorithms', 'Integration Planning: Connect with existing infrastructure', 'Training & Deployment: Implement with staff training', 'Optimization: Continuously improve performance'],
      faqs: [
        { q: `What types of AI automation work best for ${cityName} businesses?`, a: `${cityName} businesses see excellent results with customer service automation, inventory optimization, and predictive analytics tailored to local market conditions.` },
        { q: `How does AI automation integrate with existing ${cityName} business systems?`, a: `Our AI automation solutions integrate seamlessly with popular business software and local systems commonly used in ${cityName}.` },
        { q: `What's the ROI timeline for AI automation in ${cityName} businesses?`, a: `Most ${cityName} businesses see initial benefits within 3-6 months, with full ROI typically achieved within 12-18 months.` }
      ]
    },
    'video-editing': {
      intro: `${cityName}'s vibrant business community demands video content that captures attention in an oversaturated market. With growing emphasis on visual storytelling, businesses need video editing that meets professional standards while engaging diverse audiences across multiple platforms.`,
      useCase: `A ${cityName} real estate agency needed compelling property showcase videos that would appeal to potential buyers. We created cinematic property tours with professional editing, motion graphics, and optimized formats. The videos generated 400% more qualified leads and helped close significant sales within six months.`,
      whyChoose: `We use industry-standard software including Adobe Premiere Pro, DaVinci Resolve, and After Effects, combined with understanding of local market preferences. Our editing team creates content that works across broadcast standards, social media platforms, and international distribution channels.`,
      process: ['Content Strategy: Develop video concepts for target audience', 'Footage Review: Organize and assess raw material', 'Creative Editing: Craft compelling narratives', 'Motion Graphics: Add professional animations', 'Audio Enhancement: Perfect sound design', 'Color Grading: Apply cinematic color correction', 'Format Optimization: Export for multiple platforms'],
      faqs: [
        { q: `What video editing styles work best for ${cityName} businesses?`, a: `${cityName} businesses succeed with professional editing that incorporates local aesthetics and appeals to diverse audiences.` },
        { q: `Can you handle video editing projects with ${cityName} location footage?`, a: `Yes, we specialize in editing local footage and creating content that showcases ${cityName} effectively.` },
        { q: `How quickly can you complete video editing projects for ${cityName} businesses?`, a: `Most ${cityName} video editing projects are completed within 1-3 weeks, depending on footage length and complexity.` }
      ]
    },
    'photo-editing': {
      intro: `${cityName}'s visual-first business environment requires photography that stands out in crowded digital spaces. With high standards expected across all industries, businesses need photo editing that transforms good images into compelling visual stories that drive engagement and sales.`,
      useCase: `A ${cityName}-based retail company needed product photography that would compete with major brands on e-commerce platforms. Through professional photo editing including color correction and lifestyle compositing, their product images achieved 250% higher click-through rates and helped secure major retail partnerships.`,
      whyChoose: `We utilize advanced photo editing software including Adobe Photoshop, Lightroom, and Capture One, with specialized techniques for diverse business needs. Our editing team understands how to enhance images for everything from real estate listings to product photography that performs well on digital platforms.`,
      process: ['Image Assessment: Evaluate photos for editing potential', 'Color Correction: Adjust exposure and color balance', 'Retouching: Remove distractions and enhance elements', 'Background Work: Replace or enhance backgrounds', 'Composition Enhancement: Crop for maximum impact', 'Brand Consistency: Apply consistent editing style', 'Format Optimization: Prepare for web, print, and social media'],
      faqs: [
        { q: `What types of photo editing do ${cityName} businesses need most?`, a: `${cityName} businesses frequently require product photography enhancement, real estate image optimization, and social media content editing.` },
        { q: `Can you edit photos taken in ${cityName}'s various lighting conditions?`, a: `Yes, we excel at correcting photos taken in challenging lighting and can enhance images shot in less-than-ideal conditions.` },
        { q: `How fast is your photo editing turnaround for ${cityName} businesses?`, a: `Most ${cityName} photo editing projects are completed within 24-72 hours, with same-day editing available for urgent needs.` }
      ]
    },
    'meta-ads': {
      intro: `${cityName}'s diverse population creates unique opportunities for targeted Facebook and Instagram advertising. Successful Meta ads campaigns require deep understanding of local demographic patterns, cultural preferences, and regional business cycles.`,
      useCase: `A ${cityName}-based service company was struggling to reach their target audience effectively. Through strategic Meta ads targeting based on local demographics and interests, combined with seasonal campaign timing, they generated 180 qualified leads in three months and significantly increased their customer base.`,
      whyChoose: `We leverage Facebook's advanced targeting capabilities combined with knowledge of local market characteristics and cultural preferences. Our Meta ads approach includes creative development, seasonal optimization, and audience segmentation that reflects the local business landscape.`,
      process: ['Audience Research: Analyze local demographics and behaviors', 'Creative Development: Design ads for target audiences', 'Campaign Setup: Configure targeting parameters', 'Budget Optimization: Allocate spend across market segments', 'Performance Monitoring: Track metrics and adjust', 'Conversion Optimization: Refine based on performance data'],
      faqs: [
        { q: `How much should ${cityName} businesses spend on Meta ads campaigns?`, a: `${cityName} Meta ads budgets typically start at $1,500-$3,000 monthly for local businesses, with larger campaigns ranging from $5,000-$15,000 monthly.` },
        { q: `Can Meta ads effectively target specific areas and demographics in ${cityName}?`, a: `Yes, our Meta ads targeting can reach specific areas, demographic groups, and interests with precision throughout ${cityName}.` },
        { q: `How do you measure Meta ads success for ${cityName} businesses?`, a: `We track local reach, engagement rates, cost per lead, and return on ad spend, with insights on which audiences respond best.` }
      ]
    },
    'google-ads': {
      intro: `${cityName}'s competitive search landscape requires Google Ads strategies that capture high-intent customers in a crowded market. Successful campaigns need sophisticated targeting, compelling ad copy, and understanding of local search behaviors and seasonal patterns.`,
      useCase: `A ${cityName} professional service firm was losing potential clients to competitors appearing higher in search results. Through strategic Google Ads campaigns targeting location-specific keywords and competitor terms, they increased new client inquiries by 320% and achieved excellent return on ad spend within four months.`,
      whyChoose: `We combine Google Ads certified expertise with knowledge of local search patterns and competition levels. Our approach includes advanced keyword research, ad copy that resonates with local audiences, and landing page optimization that converts traffic into customers.`,
      process: ['Keyword Research: Identify high-value local search terms', 'Campaign Architecture: Structure for optimal market coverage', 'Ad Copy Creation: Write compelling ads for local audiences', 'Bid Management: Optimize bids for competitive landscape', 'Landing Page Optimization: Ensure high conversion rates', 'Performance Analysis: Monitor and refine based on data'],
      faqs: [
        { q: `What's the average cost per click for Google Ads in ${cityName}?`, a: `${cityName} Google Ads costs vary by industry, typically ranging from $2-$8 for local services and $5-$15 for professional services.` },
        { q: `How do you optimize Google Ads for ${cityName}'s competitive market?`, a: `We use advanced bidding strategies, negative keywords, ad scheduling, and continuous testing to maximize performance in ${cityName}'s competitive environment.` },
        { q: `How quickly do Google Ads show results for ${cityName} businesses?`, a: `${cityName} Google Ads campaigns typically show initial results within 1-2 weeks, with optimal performance after 4-6 weeks of optimization.` }
      ]
    },
    'seo': {
      intro: `${cityName}'s digital marketplace demands SEO strategies that help businesses rank prominently in local search results while competing against numerous companies vying for the same customers. Effective SEO combines technical excellence with understanding of local search behaviors and competition dynamics.`,
      useCase: `A ${cityName}-based professional service firm was invisible in search results, losing clients to competitors with better online presence. Through comprehensive SEO including local optimization and content strategy, they achieved first-page rankings and increased organic leads by 450% over 12 months.`,
      whyChoose: `We implement white-hat SEO techniques that align with Google's algorithms while addressing local search landscapes. Our methodology includes local SEO optimization, content creation targeting regional search queries, and technical SEO ensuring optimal performance.`,
      process: ['SEO Audit: Analyze current performance and opportunities', 'Keyword Strategy: Research local search terms', 'On-Page Optimization: Optimize content and technical elements', 'Local SEO: Enhance local search presence', 'Content Development: Create valuable local content', 'Link Building: Earn quality backlinks', 'Performance Monitoring: Track and adjust strategy'],
      faqs: [
        { q: `How long does SEO take to show results for ${cityName} businesses?`, a: `${cityName} SEO typically shows initial improvements within 3-6 months, with significant gains occurring over 6-12 months.` },
        { q: `Can SEO help ${cityName} businesses rank for location-specific searches?`, a: `Absolutely. Our SEO services include local optimization that helps businesses rank for area-specific terms and capture targeted local traffic.` },
        { q: `How do you measure SEO success for ${cityName} businesses?`, a: `We track local search rankings, organic traffic, local search performance, and conversion rates from organic search targeting local audiences.` }
      ]
    }
  };

  const template = contentTemplates[serviceSlug] || contentTemplates['web-development'];
  
  const content = `
    <h1>${serviceName} Services in ${cityName}</h1>
    <p>${template.intro}</p>
    
    <h2>How ${serviceName} Solves ${cityName} Business Challenges</h2>
    <p>${template.useCase}</p>
    
    <h2>Why Choose Our ${serviceName} Team in ${cityName}</h2>
    <p>${template.whyChoose}</p>
    
    <h2>Our ${serviceName} Process</h2>
    <ol>
      ${template.process.map(step => `<li><strong>${step}</strong></li>`).join('')}
    </ol>
    
    <h2>${cityName} ${serviceName} Experience</h2>
    <p>We've successfully delivered ${serviceName.toLowerCase()} solutions for businesses across ${cityName}, helping local companies achieve their digital goals and grow their market presence through professional ${serviceName.toLowerCase()} services.</p>
    
    <h2>Frequently Asked Questions</h2>
    ${template.faqs.map(faq => `
      <h3>${faq.q}</h3>
      <p>${faq.a}</p>
    `).join('')}
    
    <h2>Ready to Transform Your ${cityName} Business?</h2>
    <p>Don't let your competitors dominate ${cityName}'s market. Our ${serviceName.toLowerCase()} team is ready to create solutions that drive real results for your business. Contact us today for a free consultation and discover how ${serviceName.toLowerCase()} can accelerate your growth in ${cityName}.</p>
  `;

  return {
    content: content.trim(),
    metaTitle: `${serviceName} Services in ${cityName} | Digital Dekho`,
    metaDescription: `Professional ${serviceName.toLowerCase()} services in ${cityName}. Expert solutions that drive results for local businesses. Get a free consultation today.`,
    keywords: [
      `${serviceName.toLowerCase()} ${cityName.toLowerCase()}`,
      `${serviceName.toLowerCase()} services ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} ${serviceName.toLowerCase()} company`,
      `best ${serviceName.toLowerCase()} ${cityName.toLowerCase()}`,
      `professional ${serviceName.toLowerCase()} ${cityName.toLowerCase()}`
    ]
  };
}

export async function POST(request) {
  try {
    await connectDB();
    
    const { cityId } = await request.json();
    
    if (!cityId) {
      return NextResponse.json(
        { error: 'City ID is required' },
        { status: 400 }
      );
    }

    // Find the city with country information
    const city = await City.findById(cityId).populate('country');
    if (!city) {
      return NextResponse.json(
        { error: 'City not found' },
        { status: 404 }
      );
    }

    // Get all active services
    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    
    if (services.length === 0) {
      return NextResponse.json(
        { error: 'No active services found' },
        { status: 404 }
      );
    }

    // Update city status
    await City.findByIdAndUpdate(cityId, {
      seoStatus: 'generating',
    });

    const generatedPages = [];
    const errors = [];

    // Generate content for each service
    for (const service of services) {
      try {
        // Check if page already exists
        const existingPage = await ServiceCityPage.findOne({
          city: cityId,
          service: service._id
        });

        if (existingPage) {
          generatedPages.push({
            service: service.title,
            slug: existingPage.slug,
            status: 'exists',
            pageId: existingPage._id
          });
          continue;
        }

        // Generate SEO content
        const seoContent = generateSEOContent(city, service);
        
        // Create new service city page
        const serviceCityPage = new ServiceCityPage({
          city: cityId,
          service: service._id,
          metaTitle: seoContent.metaTitle,
          metaDescription: seoContent.metaDescription,
          keywords: seoContent.keywords,
          content: seoContent.content,
          status: 'draft',
          isIndexed: false,
          canonicalUrl: `/services/${service.slug}-in-${city.slug}`,
          qualityScore: 85
        });

        await serviceCityPage.save();

        generatedPages.push({
          service: service.title,
          slug: serviceCityPage.slug,
          status: 'generated',
          pageId: serviceCityPage._id
        });

      } catch (error) {
        console.error(`Error generating page for ${service.title}:`, error);
        errors.push({
          service: service.title,
          error: error.message
        });
      }
    }

    // Update city status
    await City.findByIdAndUpdate(cityId, {
      seoGenerated: true,
      seoGeneratedAt: new Date(),
      seoStatus: errors.length > 0 ? 'completed_with_errors' : 'completed',
    });

    return NextResponse.json({
      success: true,
      city: city.name,
      country: city.country?.name || 'Unknown',
      totalServices: services.length,
      generatedPages: generatedPages.length,
      errors: errors.length,
      pages: generatedPages,
      errorDetails: errors
    });

  } catch (error) {
    console.error('SEO generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate SEO content', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const cityId = searchParams.get('cityId');
    
    if (!cityId) {
      return NextResponse.json(
        { error: 'City ID is required' },
        { status: 400 }
      );
    }

    // Get generation status
    const city = await City.findById(cityId).populate('country');
    if (!city) {
      return NextResponse.json(
        { error: 'City not found' },
        { status: 404 }
      );
    }

    // Get all generated pages for this city
    const pages = await ServiceCityPage.find({ city: cityId })
      .populate('service', 'title slug')
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      city: {
        name: city.name,
        country: city.country?.name || 'Unknown',
        seoGenerated: city.seoGenerated,
        seoStatus: city.seoStatus,
        seoGeneratedAt: city.seoGeneratedAt
      },
      pages: pages.map(page => ({
        id: page._id,
        service: page.service.title,
        slug: page.slug,
        status: page.status,
        isIndexed: page.isIndexed,
        views: page.views,
        qualityScore: page.qualityScore,
        createdAt: page.createdAt
      }))
    });

  } catch (error) {
    console.error('SEO status fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SEO status' },
      { status: 500 }
    );
  }
}