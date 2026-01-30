'use client';

export default function ServicesShowcase({ title = "Our Digital Services", showAll = false }) {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      href: '/services/web-development'
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional UX.',
      features: ['Native iOS', 'Native Android', 'Cross-Platform', 'UI/UX Design'],
      href: '/services/app-development'
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      description: 'Intelligent automation solutions powered by AI to streamline your business processes.',
      features: ['Process Automation', 'AI Integration', 'Cost Reduction', 'Efficiency Boost'],
      href: '/services/ai-automation'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing services for content creators, businesses, and marketing campaigns.',
      features: ['4K Quality', 'Motion Graphics', 'Color Grading', 'Audio Enhancement'],
      href: '/services/video-editing'
    },
    {
      icon: '📸',
      title: 'Photo Editing',
      description: 'Professional photo editing and retouching services for businesses and personal projects.',
      features: ['High Resolution', 'Color Correction', 'Background Removal', 'Retouching'],
      href: '/services/photo-editing'
    },
    {
      icon: '📘',
      title: 'Meta Ads',
      description: 'Facebook and Instagram advertising campaigns that drive results and maximize ROI.',
      features: ['Targeted Campaigns', 'A/B Testing', 'ROI Tracking', 'Audience Research'],
      href: '/services/meta-ads'
    },
    {
      icon: '🔍',
      title: 'Google Ads',
      description: 'Strategic Google Ads campaigns that increase visibility, drive traffic, and generate leads.',
      features: ['Keyword Research', 'Campaign Optimization', 'Performance Reports', 'Conversion Tracking'],
      href: '/services/google-ads'
    },
    {
      icon: '📈',
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization services to improve rankings and organic traffic.',
      features: ['On-Page SEO', 'Link Building', 'Technical SEO', 'Content Optimization'],
      href: '/services/seo'
    }
  ];

  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href={service.href}
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {!showAll && services.length > 6 && (
          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Services
              <span className="ml-2">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}