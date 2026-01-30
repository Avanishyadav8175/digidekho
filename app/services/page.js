import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Digital Dekho | Complete Digital Solutions',
  description: 'Explore our comprehensive digital services including web development, app development, AI automation, video editing, photo editing, Meta ads, Google ads, and SEO.',
  alternates: {
    canonical: '/services',
  },
};

// Static services data for now
const services = [
  {
    _id: '1',
    title: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Professional web development services using cutting-edge technologies.',
    icon: 'globe',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
  },
  {
    _id: '2',
    title: 'App Development',
    slug: 'app-development',
    shortDescription: 'Professional mobile app development for iOS and Android platforms.',
    icon: 'smartphone',
    features: ['Native iOS', 'Native Android', 'Cross-Platform', 'UI/UX Design'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    _id: '3',
    title: 'AI Automation',
    slug: 'ai-automation',
    shortDescription: 'AI-powered automation solutions to optimize your business processes.',
    icon: 'bot',
    features: ['Process Automation', 'Chatbots', 'Data Analysis', 'Custom AI'],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI']
  },
  {
    _id: '4',
    title: 'Video Editing',
    slug: 'video-editing',
    shortDescription: 'Professional video editing for marketing and corporate content.',
    icon: 'video',
    features: ['Professional Editing', 'Motion Graphics', 'Color Grading', 'Audio Enhancement'],
    technologies: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve']
  },
  {
    _id: '5',
    title: 'Photo Editing',
    slug: 'photo-editing',
    shortDescription: 'Professional photo editing and retouching services.',
    icon: 'camera',
    features: ['Image Retouching', 'Background Removal', 'Color Correction', 'Batch Processing'],
    technologies: ['Adobe Photoshop', 'Lightroom', 'GIMP']
  },
  {
    _id: '6',
    title: 'Meta Ads',
    slug: 'meta-ads',
    shortDescription: 'Strategic Facebook and Instagram advertising campaigns.',
    icon: 'facebook',
    features: ['Campaign Strategy', 'Audience Targeting', 'Ad Creative', 'Performance Tracking'],
    technologies: ['Meta Business Manager', 'Facebook Ads', 'Analytics']
  },
  {
    _id: '7',
    title: 'Google Ads',
    slug: 'google-ads',
    shortDescription: 'Professional Google Ads campaign management and optimization.',
    icon: 'search',
    features: ['Keyword Research', 'Campaign Setup', 'Ad Copy', 'ROI Optimization'],
    technologies: ['Google Ads', 'Google Analytics', 'Tag Manager']
  },
  {
    _id: '8',
    title: 'SEO',
    slug: 'seo',
    shortDescription: 'Comprehensive SEO services to improve search rankings.',
    icon: 'trending-up',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    technologies: ['Google Search Console', 'SEMrush', 'Ahrefs']
  }
];

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-purple-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Digital Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed 
              in the digital landscape. From web development to AI automation, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="w-6 h-6 bg-blue-600 group-hover:bg-white rounded transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-1 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                )}

                {/* Technologies */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 px-2 py-1">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't see exactly what you're looking for? We specialize in creating custom digital solutions 
                tailored to your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Get Custom Quote
                </Link>
                <a
                  href="https://wa.me/919996821315?text=Hi, I need a custom digital solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Digital Dekho?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience in their respective fields.',
                icon: '👥'
              },
              {
                title: 'Global Reach',
                description: 'Serving clients in 50+ countries with 24/7 support and communication.',
                icon: '🌍'
              },
              {
                title: 'Quality Assured',
                description: '100% satisfaction guarantee with unlimited revisions until you\'re happy.',
                icon: '✅'
              },
              {
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality or attention to detail.',
                icon: '⚡'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}