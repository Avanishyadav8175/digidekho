import ServicesShowcase from '../../components/shared/ServicesShowcase';
import ContactSection from '../../components/shared/ContactSection';
import TestimonialsSection from '../../components/shared/TestimonialsSection';
import FAQSection from '../../components/shared/FAQSection';

export const metadata = {
  title: 'Blog - Digital Dekho | Latest Digital Marketing & Technology Insights',
  description: 'Stay updated with the latest trends in web development, AI automation, digital marketing, and technology. Expert insights and tips from Digital Dekho team.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const featuredPost = {
    title: 'The Future of AI in Business Automation: Trends for 2024',
    excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what trends to watch in 2024.',
    image: '🤖',
    category: 'AI Automation',
    readTime: '8 min read',
    date: 'January 15, 2024',
    href: '/blog/ai-business-automation-trends-2024'
  };

  const blogPosts = [
    {
      title: 'Complete Guide to SEO for Small Businesses in 2024',
      excerpt: 'Learn the essential SEO strategies that can help small businesses compete with larger companies online.',
      image: '📈',
      category: 'SEO',
      readTime: '12 min read',
      date: 'January 12, 2024',
      href: '/blog/seo-guide-small-businesses-2024'
    },
    {
      title: 'Web Development Trends: What\'s Hot in 2024',
      excerpt: 'Explore the latest web development technologies and frameworks that are shaping the industry.',
      image: '🌐',
      category: 'Web Development',
      readTime: '10 min read',
      date: 'January 10, 2024',
      href: '/blog/web-development-trends-2024'
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare the pros and cons of native and cross-platform mobile app development approaches.',
      image: '📱',
      category: 'App Development',
      readTime: '15 min read',
      date: 'January 8, 2024',
      href: '/blog/native-vs-cross-platform-development'
    },
    {
      title: 'Google Ads vs Facebook Ads: Which is Better for Your Business?',
      excerpt: 'A comprehensive comparison of Google Ads and Facebook Ads to help you choose the right platform.',
      image: '🎯',
      category: 'Digital Marketing',
      readTime: '9 min read',
      date: 'January 5, 2024',
      href: '/blog/google-ads-vs-facebook-ads'
    },
    {
      title: 'Video Marketing Strategies That Actually Work',
      excerpt: 'Discover proven video marketing strategies that can boost engagement and drive conversions.',
      image: '🎬',
      category: 'Video Marketing',
      readTime: '11 min read',
      date: 'January 3, 2024',
      href: '/blog/video-marketing-strategies-2024'
    },
    {
      title: 'E-commerce Website Design Best Practices',
      excerpt: 'Essential design principles for creating high-converting e-commerce websites.',
      image: '🛒',
      category: 'Web Design',
      readTime: '13 min read',
      date: 'December 28, 2023',
      href: '/blog/ecommerce-design-best-practices'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 25, active: true },
    { name: 'Web Development', count: 8 },
    { name: 'AI Automation', count: 5 },
    { name: 'Digital Marketing', count: 7 },
    { name: 'SEO', count: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">📝</span>
              Digital Insights & Tips
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in digital marketing, 
              web development, AI automation, and more.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <a 
                      href={featuredPost.href}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Article
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-8xl">
                      {featuredPost.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                        {post.image}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <a 
                      href={post.href}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
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

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4">
                Get the latest digital marketing insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'SEO', 'AI', 'Marketing', 'Design', 'JavaScript', 'WordPress'].map((tag) => (
                  <a 
                    key={tag}
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <ServicesShowcase title="Explore Our Digital Services" />

      {/* Testimonials */}
      <TestimonialsSection title="What Our Readers & Clients Say" />

      {/* FAQ Section */}
      <FAQSection 
        title="Blog & Services FAQ"
        faqs={[
          {
            question: 'How often do you publish new blog content?',
            answer: 'We publish new blog posts 2-3 times per week, covering the latest trends in digital marketing, web development, AI automation, and technology insights.'
          },
          {
            question: 'Can I request specific topics for blog posts?',
            answer: 'Absolutely! We welcome topic suggestions from our readers. Contact us with your ideas and we\'ll consider them for future blog posts.'
          },
          {
            question: 'Do you offer the services mentioned in your blog posts?',
            answer: 'Yes! All the services and strategies we write about are services we provide. Our blog content is based on real experience and expertise from our team.'
          },
          {
            question: 'Can I subscribe to get notified about new posts?',
            answer: 'Yes, you can subscribe to our newsletter to get notified about new blog posts, industry insights, and exclusive tips delivered to your inbox.'
          },
          {
            question: 'Do you provide consultation based on blog topics?',
            answer: 'Definitely! If you\'re interested in implementing strategies from our blog posts, we offer consultation and full-service implementation for all topics we cover.'
          }
        ]}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Implement What You've Learned?"
        showForm={true}
      />
    </div>
  );
}