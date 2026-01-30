import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    // Static service data
    const servicesData = {
      'web-development': {
        _id: '1',
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom websites and web applications built with modern technologies.',
        shortDescription: 'Professional web development services using cutting-edge technologies.',
        bannerImage: 'https://picsum.photos/1200/600?random=1',
        seoTitle: 'Web Development Services | Custom Websites & Web Apps',
        seoDescription: 'Professional web development services. Custom websites, web applications, e-commerce solutions.',
        keywords: ['web development', 'website design', 'web applications'],
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
      },
      'app-development': {
        _id: '2',
        title: 'App Development',
        slug: 'app-development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        shortDescription: 'Professional mobile app development for iOS and Android platforms.',
        bannerImage: 'https://picsum.photos/1200/600?random=2',
        seoTitle: 'Mobile App Development | iOS & Android Apps',
        seoDescription: 'Professional mobile app development services. Native iOS, Android apps and cross-platform solutions.',
        keywords: ['app development', 'mobile apps', 'iOS development'],
        features: ['Native iOS', 'Native Android', 'Cross-Platform', 'UI/UX Design'],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
      }
    };

    const service = servicesData[params.slug];

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      service,
    });
  } catch (error) {
    console.error('Service fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}