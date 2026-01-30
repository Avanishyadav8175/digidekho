export const metadata = {
  title: 'Google Ads Management Services - Digital Dekho | PPC Advertising',
  description: 'Maximize your ROI with Digital Dekho\'s expert Google Ads management services. We create and optimize high-converting PPC campaigns to drive qualified traffic and increase sales.',
  alternates: {
    canonical: '/services/google-ads',
  },
};

export default function GoogleAdsPage() {
  const features = [
    {
      icon: '🎯',
      title: 'Campaign Strategy & Setup',
      description: 'Strategic campaign planning and setup tailored to your business goals and target audience.'
    },
    {
      icon: '🔍',
      title: 'Keyword Research & Bidding',
      description: 'In-depth keyword research and smart bidding strategies to maximize your ad spend efficiency.'
    },
    {
      icon: '📝',
      title: 'Ad Copy Creation',
      description: 'Compelling ad copy that drives clicks and conversions with A/B testing for optimization.'
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Comprehensive tracking and analytics to measure campaign performance and ROI.'
    },
    {
      icon: '⚙️',
      title: 'Campaign Optimization',
      description: 'Continuous optimization of campaigns, keywords, and bids for maximum performance.'
    },
    {
      icon: '📈',
      title: 'Conversion Optimization',
      description: 'Landing page optimization and conversion tracking to improve your conversion rates.'
    }
  ];

  const campaignTypes = [
    {
      icon: '🔍',
      title: 'Search Campaigns',
      description: 'Target users actively searching for your products or services on Google.',
      benefits: ['High Intent Traffic', 'Immediate Results', 'Measurable ROI']
    },
    {
      icon: '📱',
      title: 'Display Campaigns',
      description: 'Reach potential customers across millions of websites and apps.',
      benefits: ['Brand Awareness', 'Visual Impact', 'Remarketing']
    },
    {
      icon: '🛒',
      title: 'Shopping Campaigns',
      description: 'Showcase your products directly in Google search results.',
      benefits: ['Product Visibility', 'Higher CTR', 'E-commerce Focus']
    },
    {
      icon: '🎬',
      title: 'Video Campaigns',
      description: 'Engage audiences with video ads on YouTube and partner sites.',
      benefits: ['High Engagement', 'Brand Storytelling', 'Viral Potential']
    }
  ];

  const packages = [
    {
      name: 'Starter Ads',
      price: '$499',
      period: '/month',
      adSpend: 'Up to $2,000/month ad spend',
      description: 'Perfect for small businesses starting with Google Ads',
      features: [
        'Search Campaign Setup',
        'Keyword Research (50 keywords)',
        'Ad Copy Creation (5 ads)',
        'Landing Page Review',
        'Monthly Reporting',
        'Basic Optimization'
      ],
      popular: false
    },
    {
      name: 'Professional Ads',
      price: '$899',
      period: '/month',
      adSpend: 'Up to $5,000/month ad spend',
      description: 'Comprehensive Google Ads management for growing businesses',
      features: [
        'Multi-Campaign Setup',
        'Advanced Keyword Research',
        'A/B Testing (10+ ads)',
        'Conversion Tracking',
        'Remarketing Campaigns',
        'Bi-weekly Optimization',
        'Detailed Analytics',
        'Dedicated Account Manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise Ads',
      price: '$1,499',
      period: '/month',
      adSpend: 'Unlimited ad spend',
      description: 'Advanced Google Ads management for large businesses',
      features: [
        'Full Campaign Portfolio',
        'Advanced Bidding Strategies',
        'Custom Ad Extensions',
        'Advanced Analytics Setup',
        'Shopping Campaigns',
        'Video Campaigns',
        'Weekly Optimization',
        'Priority Support',
        'Custom Reporting Dashboard'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Account Audit & Strategy',
      description: 'Comprehensive audit of existing campaigns and development of strategic roadmap.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Professional campaign setup with proper structure, targeting, and tracking implementation.'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Campaign launch with close monitoring and immediate optimization adjustments.'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Continuous optimization and scaling of successful campaigns for maximum ROI.'
    }
  ];

  const results = [
    { metric: '340%', label: 'Average ROI Increase' },
    { metric: '65%', label: 'Cost Per Click Reduction' },
    { metric: '180%', label: 'Conversion Rate Improvement' },
    { metric: '24hrs', label: 'Campaign Launch Time' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">🎯</span>
                Google Ads Management
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Expert{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Google Ads
                </span>{' '}
                Management
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Drive qualified traffic and increase sales with our professional Google Ads management services. 
                We create, optimize, and manage high-converting PPC campaigns that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  View Pricing Plans
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get Free Audit
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result) => (
                    <div key={result.label} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="text-lg font-bold text-green-600">Google Partner</div>
                  <div className="text-sm text-green-700">Certified Google Ads Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Google Ads Campaign Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage all types of Google Ads campaigns to maximize your reach and conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaignTypes.map((type) => (
              <div key={type.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center justify-center text-sm text-gray-500">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Google Ads Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Google Ads management services to drive qualified traffic and maximize ROI.
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Google Ads Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver successful Google Ads campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Google Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect Google Ads management package for your business needs.
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
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-6">{pkg.adSpend}</div>
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
            Ready to Maximize Your Google Ads ROI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free Google Ads audit and discover how we can improve your campaign performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Ads Audit
            </a>
            <a 
              href="tel:+919996821315"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call: +91 9996821315
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}