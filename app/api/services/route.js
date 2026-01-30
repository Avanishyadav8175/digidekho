import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Static services data for now
    const services = [
      {
        _id: '1',
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom websites and web applications built with modern technologies.',
        shortDescription: 'Professional web development services using cutting-edge technologies.',
        bannerImage: 'https://picsum.photos/1200/600?random=1',
        icon: 'globe',
        seoTitle: 'Web Development Services | Custom Websites & Web Apps',
        seoDescription: 'Professional web development services. Custom websites, web applications, e-commerce solutions.',
        keywords: ['web development', 'website design', 'web applications'],
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
      },
      {
        _id: '2',
        title: 'App Development',
        slug: 'app-development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        shortDescription: 'Professional mobile app development for iOS and Android platforms.',
        bannerImage: 'https://picsum.photos/1200/600?random=2',
        icon: 'smartphone',
        seoTitle: 'Mobile App Development | iOS & Android Apps',
        seoDescription: 'Professional mobile app development services. Native iOS, Android apps and cross-platform solutions.',
        keywords: ['app development', 'mobile apps', 'iOS development'],
        features: ['Native iOS', 'Native Android', 'Cross-Platform', 'UI/UX Design'],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
      }
    ];

    return NextResponse.json({
      success: true,
      services,
    });
  } catch (error) {
    console.error('Services fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Service created successfully',
      service: { ...data, _id: Date.now().toString() },
    }, { status: 201 });
  } catch (error) {
    console.error('Service creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}