export const metadata = {
  title: 'Products - Digital Dekho | Digital Solutions & Software Products',
  description: 'Explore Digital Dekho\'s innovative digital products including RoomWala, business automation tools, and custom software solutions designed to streamline your operations.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  const featuredProduct = {
    name: 'RoomWala',
    tagline: 'Smart Room Booking & Management System',
    description: 'A comprehensive room booking and management solution for hotels, co-working spaces, and event venues. Streamline your booking process with our intelligent system.',
    image: '🏨',
    features: [
      'Real-time Availability',
      'Automated Booking',
      'Payment Integration',
      'Analytics Dashboard',
      'Mobile App',
      'Multi-location Support'
    ],
    pricing: 'Starting at $99/month',
    href: '/products/roomwala'
  };

  const products = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns using advanced AI.',
      image: '🤖',
      category: 'AI Tools',
      features: ['Blog Posts', 'Social Media', 'Ad Copy', 'SEO Content'],
      pricing: '$49/month',
      status: 'Available',
      href: '/products/ai-content-generator'
    },
    {
      name: 'E-commerce Analytics Pro',
      description: 'Advanced analytics and reporting tool for e-commerce businesses to track performance and optimize sales.',
      image: '📊',
      category: 'Analytics',
      features: ['Sales Tracking', 'Customer Insights', 'Inventory Management', 'ROI Analysis'],
      pricing: '$79/month',
      status: 'Available',
      href: '/products/ecommerce-analytics'
    },
    {
      name: 'Social Media Scheduler',
      description: 'Schedule and manage your social media posts across multiple platforms with AI-powered optimization.',
      image: '📱',
      category: 'Marketing',
      features: ['Multi-platform', 'AI Optimization', 'Analytics', 'Team Collaboration'],
      pricing: '$39/month',
      status: 'Available',
      href: '/products/social-media-scheduler'
    },
    {
      name: 'Website Builder Pro',
      description: 'Professional website builder with advanced features for agencies and businesses.',
      image: '🌐',
      category: 'Web Tools',
      features: ['Drag & Drop', 'SEO Tools', 'E-commerce', 'Custom Code'],
      pricing: '$29/month',
      status: 'Coming Soon',
      href: '/products/website-builder'
    },
    {
      name: 'Lead Management System',
      description: 'Comprehensive CRM solution to manage leads, track conversions, and automate follow-ups.',
      image: '💼',
      category: 'CRM',
      features: ['Lead Tracking', 'Automation', 'Email Integration', 'Reports'],
      pricing: '$59/month',
      status: 'Available',
      href: '/products/lead-management'
    },
    {
      name: 'Video Editor AI',
      description: 'AI-powered video editing tool that automatically creates professional videos from raw footage.',
      image: '🎬',
      category: 'Video Tools',
      features: ['Auto Editing', 'Templates', 'Music Library', 'Export Options'],
      pricing: '$69/month',
      status: 'Beta',
      href: '/products/video-editor-ai'
    }
  ];

  const categories = [
    { name: 'All Products', count: 7, active: true },
    { name: 'AI Tools', count: 2 },
    { name: 'Marketing', count: 2 },
    { name: 'Analytics', count: 1 },
    { name: 'Web Tools', count: 1 },
    { name: 'CRM', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">🚀</span>
              Digital Products & Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of innovative digital products designed to streamline your business 
              operations and boost productivity.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Product */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <span className="mr-2">⭐</span>
                Featured Product
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {featuredProduct.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {featuredProduct.tagline}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredProduct.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {featuredProduct.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-gray-900">{featuredProduct.pricing}</span>
                <a 
                  href={featuredProduct.href}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-8xl">
                {featuredProduct.image}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <a 
                    key={category.name}
                    href="#"
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      category.active 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Sales */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Custom Solution?</h3>
              <p className="text-blue-100 mb-4">
                Looking for a tailored product for your specific needs?
              </p>
              <a 
                href="/contact"
                className="block w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{product.image}</div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'Available' 
                            ? 'bg-green-100 text-green-700'
                            : product.status === 'Beta'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <span className="text-green-500 text-sm">✓</span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{product.pricing}</span>
                      <a 
                        href={product.href}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose from our range of products or let us create a custom solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Quote
            </a>
            <a 
              href="/products/roomwala"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Try RoomWala Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}