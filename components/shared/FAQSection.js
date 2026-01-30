'use client';

import { useState } from 'react';

export default function FAQSection({ title = "Frequently Asked Questions", faqs = null }) {
  const [openFAQ, setOpenFAQ] = useState(0);

  const defaultFAQs = [
    {
      question: 'What services does Digital Dekho offer?',
      answer: 'We offer comprehensive digital services including Web Development, Mobile App Development, AI Automation, Video Editing, Photo Editing, Meta Ads, Google Ads, and SEO Services. Each service is tailored to meet your specific business needs.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity and scope. Web development projects typically take 4-8 weeks, mobile apps 8-16 weeks, and marketing campaigns can be set up within 1-2 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support and maintenance packages for all our services. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your digital assets continue to perform optimally.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline. We offer competitive rates and flexible payment options. Contact us for a detailed quote tailored to your specific requirements.'
    },
    {
      question: 'Can you work with businesses outside India?',
      answer: 'Absolutely! We work with clients globally including USA, Canada, UK, Australia, and many other countries. We have experience working across different time zones and can accommodate various business requirements.'
    },
    {
      question: 'Do you provide revisions and modifications?',
      answer: 'Yes, we include a specific number of revisions in our project scope. Additional revisions can be accommodated based on the project agreement. We work closely with clients to ensure the final deliverable meets their expectations.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including React, Next.js, Node.js, Python, Flutter, React Native, and various AI/ML frameworks. We choose the best technology stack based on your project requirements and business goals.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices including thorough testing, code reviews, quality assurance processes, and regular client feedback sessions. Our team is committed to delivering high-quality solutions that exceed expectations.'
    }
  ];

  const faqList = faqs || defaultFAQs;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className={`text-2xl text-blue-600 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'pb-4 max-h-96' : 'max-h-0'
              }`}>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="https://wa.me/919996821315"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}