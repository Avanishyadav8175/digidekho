import ServicesShowcase from '../../components/shared/ServicesShowcase';
import ContactSection from '../../components/shared/ContactSection';
import TestimonialsSection from '../../components/shared/TestimonialsSection';
import FAQSection from '../../components/shared/FAQSection';
import ProcessSection from '../../components/shared/ProcessSection';

export const metadata = {
  title: 'About Us - Digital Dekho | Leading Global Digital Agency',
  description: 'Learn about Digital Dekho, a leading global digital agency with 500+ successful projects, serving 50+ countries with expert web development, app development, AI automation, and digital marketing services.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '50+', label: 'Countries Served', icon: '🌍' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🛟' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: 'Visionary leader with 15+ years in digital transformation'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: '👩‍💻',
      description: 'Technology expert specializing in AI and automation solutions'
    },
    {
      name: 'Amit Patel',
      role: 'Creative Director',
      image: '👨‍🎨',
      description: 'Award-winning designer with expertise in digital experiences'
    },
    {
      name: 'Sarah Johnson',
      role: 'Global Operations Head',
      image: '👩‍💼',
      description: 'International business expert managing global client relationships'
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted digital partners.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for our clients.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'We serve clients worldwide, understanding diverse markets and cultural nuances.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">🏢</span>
              About Digital Dekho
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a leading global digital agency dedicated to helping businesses thrive in the digital age. 
              With expertise spanning web development, AI automation, and digital marketing, we deliver 
              world-class solutions to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Digital Dekho began as a small team of passionate developers and designers 
                  with a vision to democratize digital transformation for businesses of all sizes.
                </p>
                <p>
                  What started as a local web development company has evolved into a global digital agency 
                  serving clients across 50+ countries. Our journey has been marked by continuous innovation, 
                  client success stories, and a commitment to excellence.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses ranging from startups to Fortune 500 
                  companies, helping them navigate the digital landscape and achieve their growth objectives.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2018</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Company Founded</div>
                    <div className="text-sm text-gray-600">Started with 3 team members</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">2020</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Global Expansion</div>
                    <div className="text-sm text-gray-600">Reached 25+ countries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2022</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Integration</div>
                    <div className="text-sm text-gray-600">Launched AI automation services</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">2024</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+ Projects</div>
                    <div className="text-sm text-gray-600">Milestone achievement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              design, and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, 
              partners, and team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our digital solutions.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">🚀</span>
            Start Your Project
          </a>
        </div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase title="What We Do Best" showAll={true} />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection 
        title="About Digital Dekho FAQ"
        faqs={[
          {
            question: 'How long has Digital Dekho been in business?',
            answer: 'Digital Dekho has been providing digital services for over 5 years, helping businesses transform their digital presence and achieve their goals.'
          },
          {
            question: 'What makes Digital Dekho different from other agencies?',
            answer: 'We combine technical expertise with deep understanding of business needs. Our team focuses on delivering results-driven solutions with personalized service and ongoing support.'
          },
          {
            question: 'Do you work with businesses of all sizes?',
            answer: 'Yes! We work with startups, small businesses, and large enterprises. Our solutions are scalable and tailored to meet the specific needs and budgets of each client.'
          },
          {
            question: 'Where is Digital Dekho located?',
            answer: 'We are based in Delhi, India, but we serve clients globally. We have experience working with businesses across different time zones and markets.'
          },
          {
            question: 'What industries do you specialize in?',
            answer: 'We work across various industries including e-commerce, healthcare, education, finance, real estate, and technology. Our diverse experience helps us adapt to different business needs.'
          }
        ]}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Work With Us?"
        showForm={true}
      />
    </div>
  );
}