export const metadata = {
  title: 'Web Development Services - Digital Dekho | Custom Website Development',
  description: 'Professional web development services by Digital Dekho. We create responsive, SEO-optimized websites using modern technologies like React, Next.js, and Node.js for businesses worldwide.',
  alternates: {
    canonical: '/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern UI library for interactive websites' },
    { name: 'Next.js', icon: '🔺', description: 'Full-stack React framework for production' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for scalable applications' },
    { name: 'WordPress', icon: '📝', description: 'Content management system' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce platform development' }
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Custom Website Development',
      description: 'Tailored websites built from scratch to meet your specific business requirements and goals.'
    },
    {
      icon: '📱',
      title: 'Responsive Web Design',
      description: 'Mobile-first designs that look perfect on all devices and screen sizes.'
    },
    {
      icon: '🛒',
      title: 'E-commerce Development',
      description: 'Full-featured online stores with payment integration and inventory management.'
    },
    {
      icon: '📝',
      title: 'CMS Development',
      description: 'Content management systems for easy website updates and content publishing.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed optimization for faster loading times and better user experience.'
    },
    {
      icon: '🔒',
      title: 'Security & Maintenance',
      description: 'Ongoing security updates, backups, and technical maintenance services.'
    }
  ];

  const packages = [
    {
      name: 'Basic Website',
      price: '$1,299',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 Pages',
        'Responsive Design',
        'Contact Form',
        'SEO Optimization',
        'SSL Certificate',
        '3 Months Support'
      ],
      deliveryTime: '2-3 weeks'
    },
    {
      name: 'Business Website',
      price: '$2,499',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Up to 15 Pages',
        'Custom Design',
        'CMS Integration',
        'Advanced SEO',
        'Analytics Setup',
        'Blog Integration',
        '6 Months Support',
        'Performance Optimization'
      ],
      deliveryTime: '4-6 weeks',
      popular: true
    },
    {
      name: 'E-commerce Website',
      price: '$4,999',
      description: 'Full-featured online store solution',
      features: [
        'Unlimited Products',
        'Payment Gateway',
        'Inventory Management',
        'Order Management',
        'Customer Accounts',
        'Advanced Analytics',
        'Mobile App Ready',
        '12 Months Support'
      ],
      deliveryTime: '6-8 weeks'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and target audience to create the perfect strategy.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and designs that align with your brand and user experience goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your website with clean code, testing across devices and browsers.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your website and providing ongoing support and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">🌐</span>
                Web Development Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create stunning, responsive websites that drive results. Our expert developers build 
                custom solutions using the latest technologies to help your business succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#packages"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  View Packages
                </a>
                <a 
                  href="/contact"
                  className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Web Development?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Modern Technologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Mobile-First Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">SEO Optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Fast Loading Speed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Secure & Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest and most reliable technologies to build robust, scalable websites.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg hover:bg-white transition-all duration-300">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions to meet all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver high-quality websites on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
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
              Web Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs and budget.
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
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-6">
                    Delivery: {pkg.deliveryTime}
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's create a stunning website that drives results for your business. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}