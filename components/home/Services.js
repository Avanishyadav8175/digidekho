import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
      href: '/services/web-development'
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native Performance', 'Cross-Platform', 'App Store Ready'],
      href: '/services/app-development'
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes',
      features: ['Process Automation', 'AI Integration', 'Cost Reduction'],
      href: '/services/ai-automation'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing and post-production services',
      features: ['4K Quality', 'Motion Graphics', 'Color Grading'],
      href: '/services/video-editing'
    },
    {
      icon: '📸',
      title: 'Photo Editing',
      description: 'Professional photo retouching and enhancement services',
      features: ['High Resolution', 'Color Correction', 'Background Removal'],
      href: '/services/photo-editing'
    },
    {
      icon: '📘',
      title: 'Meta Ads',
      description: 'Facebook and Instagram advertising campaigns that convert',
      features: ['Targeted Campaigns', 'A/B Testing', 'ROI Tracking'],
      href: '/services/meta-ads'
    },
    {
      icon: '🔍',
      title: 'Google Ads',
      description: 'Google Ads management for maximum visibility and conversions',
      features: ['Keyword Research', 'Campaign Optimization', 'Performance Reports'],
      href: '/services/google-ads'
    },
    {
      icon: '📈',
      title: 'SEO Services',
      description: 'Search engine optimization to improve your online visibility',
      features: ['On-Page SEO', 'Link Building', 'Technical SEO'],
      href: '/services/seo'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">⚡</span>
            Our Digital Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web development to AI automation, we provide end-to-end digital services 
            to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Link 
                href={service.href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We create tailored digital solutions that perfectly fit your business needs. 
              Let's discuss your project and bring your vision to life.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">💬</span>
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;