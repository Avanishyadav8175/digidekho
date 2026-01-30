export const metadata = {
  title: 'Projects - Digital Dekho | Our Portfolio & Case Studies',
  description: 'Explore Digital Dekho\'s successful projects and case studies. See how we\'ve helped 500+ businesses transform their digital presence with web development, AI automation, and digital marketing.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  const featuredProject = {
    title: 'E-commerce Platform for Global Fashion Brand',
    client: 'StyleHub International',
    category: 'E-commerce Development',
    description: 'Complete e-commerce solution with AI-powered recommendations, multi-currency support, and advanced analytics.',
    image: '🛒',
    results: [
      { metric: '300%', label: 'Increase in Sales' },
      { metric: '45%', label: 'Better Conversion Rate' },
      { metric: '60%', label: 'Faster Page Load' },
      { metric: '25M+', label: 'Monthly Visitors' }
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    href: '/projects/stylehub-ecommerce'
  };

  const projects = [
    {
      title: 'AI-Powered Healthcare Management System',
      client: 'MediCare Plus',
      category: 'Healthcare Tech',
      description: 'Comprehensive healthcare management platform with AI diagnostics and patient management.',
      image: '🏥',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      results: '40% faster diagnosis',
      href: '/projects/medicare-ai-system'
    },
    {
      title: 'Real Estate Mobile App',
      client: 'PropertyFinder',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app for property search with AR visualization and virtual tours.',
      image: '🏠',
      technologies: ['React Native', 'Firebase', 'ARKit', 'Google Maps'],
      results: '1M+ downloads',
      href: '/projects/propertyfinder-app'
    },
    {
      title: 'Restaurant Chain Management System',
      client: 'FoodChain Pro',
      category: 'Business Automation',
      description: 'Complete restaurant management solution with inventory, POS, and delivery integration.',
      image: '🍕',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
      results: '50% cost reduction',
      href: '/projects/foodchain-management'
    },
    {
      title: 'Educational Platform with AI Tutoring',
      client: 'LearnSmart Academy',
      category: 'EdTech',
      description: 'Online learning platform with AI-powered personalized tutoring and progress tracking.',
      image: '📚',
      technologies: ['Angular', 'Django', 'OpenAI', 'Redis'],
      results: '200K+ students',
      href: '/projects/learnsmart-platform'
    },
    {
      title: 'Fintech Payment Gateway',
      client: 'PaySecure',
      category: 'Financial Technology',
      description: 'Secure payment processing system with fraud detection and multi-currency support.',
      image: '💳',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Blockchain'],
      results: '$10M+ processed',
      href: '/projects/paysecure-gateway'
    },
    {
      title: 'Social Media Analytics Dashboard',
      client: 'SocialMetrics',
      category: 'Analytics Platform',
      description: 'Comprehensive social media analytics platform with AI-powered insights and reporting.',
      image: '📊',
      technologies: ['React', 'D3.js', 'Python', 'Elasticsearch'],
      results: '500+ brands using',
      href: '/projects/socialmetrics-dashboard'
    }
  ];

  const categories = [
    { name: 'All Projects', count: 25, active: true },
    { name: 'Web Development', count: 8 },
    { name: 'Mobile Apps', count: 6 },
    { name: 'AI Solutions', count: 5 },
    { name: 'E-commerce', count: 4 },
    { name: 'Healthcare', count: 2 }
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛒', count: 8 },
    { name: 'Healthcare', icon: '🏥', count: 5 },
    { name: 'Education', icon: '📚', count: 6 },
    { name: 'Finance', icon: '💰', count: 4 },
    { name: 'Real Estate', icon: '🏠', count: 3 },
    { name: 'Food & Beverage', icon: '🍕', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">🎯</span>
              Our Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped 500+ businesses transform their digital presence 
              and achieve remarkable results through innovative solutions.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Project */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Featured Case Study
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {featuredProject.category}
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Client: {featuredProject.client}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={featuredProject.href}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Case Study
                  <span className="ml-2">→</span>
                </a>
              </div>
              
              <div>
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-8xl">
                    {featuredProject.image}
                  </div>
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  {featuredProject.results.map((result) => (
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

            {/* Industries */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industries</h3>
              <div className="space-y-3">
                {industries.map((industry) => (
                  <div key={industry.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{industry.icon}</span>
                      <span className="font-medium text-gray-700">{industry.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{industry.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
              <p className="text-blue-100 mb-4">
                Ready to create your success story?
              </p>
              <a 
                href="/contact"
                className="block w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3 text-sm">
                      {project.client}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-green-600 font-semibold">Result: </span>
                        <span className="text-gray-600">{project.results}</span>
                      </div>
                      <a 
                        href={project.href}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Load More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}