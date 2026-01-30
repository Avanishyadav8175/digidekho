'use client';

export default function ProcessSection({ title = "Our Work Process", subtitle = "How We Deliver Excellence" }) {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
      icon: '🔍',
      features: ['Requirement Analysis', 'Goal Setting', 'Timeline Planning', 'Budget Discussion']
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our team creates a comprehensive strategy and project plan tailored to your specific needs and objectives.',
      icon: '📋',
      features: ['Strategic Planning', 'Technology Selection', 'Resource Allocation', 'Milestone Definition']
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'We bring your vision to life with cutting-edge design and development using the latest technologies.',
      icon: '🎨',
      features: ['UI/UX Design', 'Development', 'Quality Assurance', 'Regular Updates']
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures everything works perfectly before launch, with optimization for best performance.',
      icon: '🧪',
      features: ['Functionality Testing', 'Performance Testing', 'Security Testing', 'Cross-platform Testing']
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      description: 'We handle the complete launch process, ensuring smooth deployment and immediate availability.',
      icon: '🚀',
      features: ['Deployment Setup', 'Go-Live Support', 'Performance Monitoring', 'Issue Resolution']
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure your digital assets continue to perform optimally.',
      icon: '🛠️',
      features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Performance Optimization']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+919996821315"
                className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}