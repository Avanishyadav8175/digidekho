import { notFound } from 'next/navigation';
import GeneratedContent from '../../../components/services/GeneratedContent';

// Static service data for now
const servicesData = {
  'web-development': {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    shortDescription: 'Professional web development services using cutting-edge technologies.',
    bannerImage: 'https://picsum.photos/1200/600?random=1',
    seoTitle: 'Web Development Services | Custom Websites & Web Apps',
    seoDescription: 'Professional web development services. Custom websites, web applications, e-commerce solutions with modern technologies.',
    keywords: ['web development', 'website design', 'web applications'],
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    faqs: [
      {
        question: 'How long does it take to develop a website?',
        answer: 'The timeline depends on complexity. Simple websites take 2-4 weeks, complex applications take 8-12 weeks.'
      }
    ]
  },
  'app-development': {
    title: 'App Development',
    slug: 'app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
    shortDescription: 'Professional mobile app development for iOS and Android platforms.',
    bannerImage: 'https://picsum.photos/1200/600?random=2',
    seoTitle: 'Mobile App Development | iOS & Android Apps',
    seoDescription: 'Professional mobile app development services. Native iOS, Android apps and cross-platform solutions.',
    keywords: ['app development', 'mobile apps', 'iOS development'],
    features: ['Native iOS', 'Native Android', 'Cross-Platform', 'UI/UX Design'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    faqs: [
      {
        question: 'How long does mobile app development take?',
        answer: 'Mobile app development typically takes 3-6 months depending on complexity and features required.'
      }
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Intelligent automation solutions powered by artificial intelligence to streamline your business processes.',
    shortDescription: 'AI-powered automation solutions for business process optimization.',
    bannerImage: 'https://picsum.photos/1200/600?random=3',
    seoTitle: 'AI Automation Services | Business Process Automation',
    seoDescription: 'Professional AI automation services. Streamline business processes with intelligent automation solutions.',
    keywords: ['AI automation', 'artificial intelligence', 'business automation'],
    features: ['Process Automation', 'AI Integration', 'Cost Reduction', 'Efficiency Boost'],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'Machine Learning'],
    faqs: [
      {
        question: 'What processes can be automated with AI?',
        answer: 'AI can automate data entry, customer service, inventory management, and many repetitive business tasks.'
      }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    slug: 'video-editing',
    description: 'Professional video editing services for content creators, businesses, and marketing campaigns.',
    shortDescription: 'Professional video editing and post-production services.',
    bannerImage: 'https://picsum.photos/1200/600?random=4',
    seoTitle: 'Video Editing Services | Professional Video Production',
    seoDescription: 'Professional video editing services. High-quality video production for marketing, social media, and content creation.',
    keywords: ['video editing', 'video production', 'content creation'],
    features: ['4K Quality', 'Motion Graphics', 'Color Grading', 'Audio Enhancement'],
    technologies: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro'],
    faqs: [
      {
        question: 'What video formats do you work with?',
        answer: 'We work with all major video formats including MP4, MOV, AVI, and can deliver in any required format.'
      }
    ]
  },
  'photo-editing': {
    title: 'Photo Editing',
    slug: 'photo-editing',
    description: 'Professional photo editing and retouching services for businesses, e-commerce, and personal projects.',
    shortDescription: 'Professional photo editing and retouching services.',
    bannerImage: 'https://picsum.photos/1200/600?random=5',
    seoTitle: 'Photo Editing Services | Professional Image Retouching',
    seoDescription: 'Professional photo editing services. High-quality image retouching, background removal, and photo enhancement.',
    keywords: ['photo editing', 'image retouching', 'photo enhancement'],
    features: ['High Resolution', 'Color Correction', 'Background Removal', 'Retouching'],
    technologies: ['Adobe Photoshop', 'Lightroom', 'GIMP', 'Canva'],
    faqs: [
      {
        question: 'What types of photo editing do you offer?',
        answer: 'We offer retouching, color correction, background removal, product photography editing, and creative enhancements.'
      }
    ]
  },
  'meta-ads': {
    title: 'Meta Ads',
    slug: 'meta-ads',
    description: 'Facebook and Instagram advertising campaigns that drive results and maximize your return on investment.',
    shortDescription: 'Professional Facebook and Instagram advertising campaigns.',
    bannerImage: 'https://picsum.photos/1200/600?random=6',
    seoTitle: 'Meta Ads Services | Facebook & Instagram Advertising',
    seoDescription: 'Professional Meta Ads management. Facebook and Instagram advertising campaigns that drive results and ROI.',
    keywords: ['meta ads', 'facebook ads', 'instagram advertising'],
    features: ['Targeted Campaigns', 'A/B Testing', 'ROI Tracking', 'Audience Research'],
    technologies: ['Meta Business Manager', 'Facebook Ads Manager', 'Analytics', 'Pixel Tracking'],
    faqs: [
      {
        question: 'How much should I budget for Meta Ads?',
        answer: 'Budget depends on your goals and audience size. We recommend starting with $500-1000/month for small businesses.'
      }
    ]
  },
  'google-ads': {
    title: 'Google Ads',
    slug: 'google-ads',
    description: 'Strategic Google Ads campaigns that increase visibility, drive traffic, and generate qualified leads.',
    shortDescription: 'Professional Google Ads campaign management and optimization.',
    bannerImage: 'https://picsum.photos/1200/600?random=7',
    seoTitle: 'Google Ads Services | PPC Campaign Management',
    seoDescription: 'Professional Google Ads management. Strategic PPC campaigns that drive traffic and generate qualified leads.',
    keywords: ['google ads', 'PPC advertising', 'search marketing'],
    features: ['Keyword Research', 'Campaign Optimization', 'Performance Reports', 'Conversion Tracking'],
    technologies: ['Google Ads', 'Google Analytics', 'Keyword Planner', 'Tag Manager'],
    faqs: [
      {
        question: 'How quickly can I see results from Google Ads?',
        answer: 'You can see initial results within 24-48 hours, but optimal performance typically develops over 2-4 weeks.'
      }
    ]
  },
  'seo': {
    title: 'SEO Services',
    slug: 'seo',
    description: 'Comprehensive search engine optimization services to improve your website rankings and organic traffic.',
    shortDescription: 'Professional SEO services for better search engine rankings.',
    bannerImage: 'https://picsum.photos/1200/600?random=8',
    seoTitle: 'SEO Services | Search Engine Optimization',
    seoDescription: 'Professional SEO services. Improve search rankings, increase organic traffic, and grow your online presence.',
    keywords: ['SEO services', 'search engine optimization', 'organic traffic'],
    features: ['On-Page SEO', 'Link Building', 'Technical SEO', 'Content Optimization'],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer: 'SEO typically shows initial improvements in 3-6 months, with significant results in 6-12 months.'
      }
    ]
  }
};

export async function generateMetadata({ params }) {
  const slugs = params.slug;
  
  // Handle city service pages (service-in-city format)
  if (slugs.length === 1 && slugs[0].includes('-in-')) {
    const parts = slugs[0].split('-in-');
    if (parts.length === 2) {
      const [serviceSlug, citySlug] = parts;
      const service = servicesData[serviceSlug];
      
      if (!service) {
        return { title: 'Service Not Found' };
      }

      const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' ');
      const title = `${service.title} in ${cityName} | Digital Dekho`;
      const description = `Professional ${service.title.toLowerCase()} services in ${cityName}. Get expert solutions with local support.`;

      return {
        title,
        description,
        alternates: { canonical: `/services/${slugs[0]}` },
      };
    }
  }
  
  // Regular service page
  if (slugs.length === 1) {
    const service = servicesData[slugs[0]];
    if (!service) {
      return { title: 'Service Not Found' };
    }

    return {
      title: service.seoTitle,
      description: service.seoDescription,
      alternates: { canonical: `/services/${service.slug}` },
    };
  }

  return { title: 'Service Not Found' };
}

export default function ServicePage({ params }) {
  const slugs = params.slug;
  
  // Handle city service pages
  if (slugs.length === 1 && slugs[0].includes('-in-')) {
    const parts = slugs[0].split('-in-');
    if (parts.length === 2) {
      const [serviceSlug, citySlug] = parts;
      const service = servicesData[serviceSlug];
      
      if (!service) {
        notFound();
      }

      const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' ');

      // Fallback content for when no generated content is found
      const fallbackContent = (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                  <span>📍</span>
                  <span className="font-medium">{cityName}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {service.title} in {cityName}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Professional {service.title.toLowerCase()} services in {cityName}. 
                  Get expert solutions with local support and global quality standards.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Our {service.title} in {cityName}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Local Support', 'Fast Response', 'Competitive Pricing', 'Proven Results'].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">Professional {feature.toLowerCase()} for {cityName} clients</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Get Professional {service.title} in {cityName}
              </h2>
              <p className="text-xl mb-8">
                Transform your business with our expert services. Local support with global quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Free Quote for {cityName}
                </a>
                <a href="https://wa.me/919996821315" className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </div>
      );

      return <GeneratedContent slug={slugs[0]} fallbackContent={fallbackContent} />;
    }
  }
  
  // Regular service page
  if (slugs.length === 1) {
    const service = servicesData[slugs[0]];
    if (!service) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started Today
                  </a>
                  <a href="/projects" className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    View Our Work
                  </a>
                </div>
              </div>
              <div>
                <img
                  src={service.bannerImage}
                  alt={service.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              What's Included in Our {service.title} Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full border shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied clients who have transformed their business with our services.
            </p>
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Free Quote
            </a>
          </div>
        </section>
      </div>
    );
  }

  notFound();
}