export const metadata = {
  title: 'SEO Services - Digital Dekho | Professional Search Engine Optimization',
  description: 'Boost your online visibility with Digital Dekho\'s expert SEO services. We provide comprehensive SEO strategies including on-page optimization, link building, and technical SEO to improve your search rankings.',
  alternates: {
    canonical: '/services/seo',
  },
};

export default function SEOServicesPage() {
  const features = [
    {
      icon: '🔍',
      title: 'Keyword Research & Analysis',
      description: 'In-depth keyword research to identify high-value opportunities and optimize your content strategy.'
    },
    {
      icon: '📄',
      title: 'On-Page SEO Optimization',
      description: 'Complete on-page optimization including meta tags, headers, content structure, and internal linking.'
    },
    {
      icon: '🔗',
      title: 'Link Building & Authority',
      description: 'Strategic link building campaigns to increase your domain authority and search engine trust.'
    },
    {
      icon: '⚙️',
      title: 'Technical SEO Audit',
      description: 'Comprehensive technical analysis to fix crawling issues, site speed, and mobile optimization.'
    },
    {
      icon: '📍',
      title: 'Local SEO Optimization',
      description: 'Local search optimization to help your business rank higher in location-based searches.'
    },
    {
      icon: '📊',
      title: 'SEO Analytics & Reporting',
      description: 'Detailed monthly reports with rankings, traffic analysis, and performance insights.'
    }
  ];

  const packages = [
    {
      name: 'Starter SEO',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Keyword Research (20 keywords)',
        'On-Page Optimization (5 pages)',
        'Technical SEO Audit',
        'Monthly Reporting',
        'Google My Business Setup',
        'Basic Link Building'
      ],
      popular: false
    },
    {
      name: 'Professional SEO',
      price: '$599',
      period: '/month',
      description: 'Comprehensive SEO for growing businesses',
      features: [
        'Keyword Research (50 keywords)',
        'On-Page Optimization (15 pages)',
        'Technical SEO Optimization',
        'Content Strategy & Creation',
        'Advanced Link Building',
        'Local SEO Optimization',
        'Bi-weekly Reporting',
        'Competitor Analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '$1299',
      period: '/month',
      description: 'Advanced SEO for large businesses and e-commerce',
      features: [
        'Unlimited Keyword Research',
        'Full Website Optimization',
        'Advanced Technical SEO',
        'Content Marketing Strategy',
        'Premium Link Building',
        'Multi-location SEO',
        'Weekly Reporting',
        'Dedicated SEO Manager',
        'Custom SEO Tools'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance, technical issues, and competitor landscape.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your business goals, target audience, and market analysis.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute on-page optimization, technical fixes, content creation, and link building campaigns.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, performance tracking, and strategy refinement for optimal results.'
    }
  ];

  const results = [
    { metric: '250%', label: 'Average Traffic Increase' },
    { metric: '180%', label: 'Keyword Ranking Improvement' },
    { metric: '95%', label: 'Client Retention Rate' },
    { metric: '6 months', label: 'Average Time to Page 1' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">📈</span>
                SEO Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SEO Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. 
                We help businesses rank higher on Google and attract more qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  View SEO Packages
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get Free SEO Audit
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">SEO Results Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result) => (
                    <div key={result.label} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our full-service SEO approach covers every aspect of search engine optimization 
              to maximize your online visibility and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver consistent SEO results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO Packages & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free SEO audit and discover how we can help your business rank higher on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free SEO Audit
            </a>
            <a 
              href="tel:+919996821315"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: +91 9996821315
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}