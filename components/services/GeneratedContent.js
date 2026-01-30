'use client';

import { useState, useEffect } from 'react';
import ServicesShowcase from '../shared/ServicesShowcase';
import ContactSection from '../shared/ContactSection';
import TestimonialsSection from '../shared/TestimonialsSection';
import FAQSection from '../shared/FAQSection';
import ProcessSection from '../shared/ProcessSection';

export default function GeneratedContent({ slug, fallbackContent }) {
  const [generatedContent, setGeneratedContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGeneratedContent = () => {
      try {
        const seoPages = JSON.parse(localStorage.getItem('admin-seo-pages') || '[]');
        const page = seoPages.find(p => p.slug === slug && p.status === 'published');
        setGeneratedContent(page);
      } catch (error) {
        console.error('Error loading SEO content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGeneratedContent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (generatedContent) {
    // Parse the generated content to extract parts
    const content = generatedContent.content;
    const cityName = generatedContent.cityName;
    const serviceName = generatedContent.serviceName;
    
    // Extract H1 title
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
    const title = h1Match ? h1Match[1] : `${serviceName} in ${cityName}`;
    
    // Extract first paragraph as description
    const firstPMatch = content.match(/<p[^>]*>(.*?)<\/p>/);
    const description = firstPMatch ? firstPMatch[1] : `Professional ${serviceName.toLowerCase()} services in ${cityName}.`;
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Generated Content */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                <span>📍</span>
                <span className="font-medium">{cityName}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Generated Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content.replace(/<h1[^>]*>.*?<\/h1>/, '') }}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our {serviceName} in {cityName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Local Support', 'Fast Response', 'Competitive Pricing', 'Proven Results'].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600">Professional {feature.toLowerCase()} for {cityName} clients</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Professional {serviceName} in {cityName}
            </h2>
            <p className="text-xl mb-8">
              Transform your business with our expert services. Local support with global quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Free Quote for {cityName}
              </a>
              <a 
                href="https://wa.me/919996821315" 
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <ServicesShowcase title={`Other Services Available in ${cityName}`} />

        {/* Process Section */}
        <ProcessSection 
          title={`Our ${serviceName} Process in ${cityName}`}
          subtitle={`How we deliver exceptional ${serviceName.toLowerCase()} results for ${cityName} businesses`}
        />

        {/* Testimonials */}
        <TestimonialsSection title={`What ${cityName} Clients Say About Our ${serviceName}`} />

        {/* FAQ Section with city-specific questions */}
        <FAQSection 
          title={`${serviceName} FAQ for ${cityName} Businesses`}
          faqs={[
            {
              question: `How long does ${serviceName.toLowerCase()} take for ${cityName} businesses?`,
              answer: `Most ${cityName} ${serviceName.toLowerCase()} projects are completed within 6-12 weeks, depending on complexity and specific requirements. We provide detailed timelines during consultation.`
            },
            {
              question: `Do you provide ${serviceName.toLowerCase()} support in ${cityName}?`,
              answer: `Yes, we provide comprehensive support for all our ${serviceName.toLowerCase()} clients in ${cityName}, including ongoing maintenance, updates, and technical assistance.`
            },
            {
              question: `What makes your ${serviceName.toLowerCase()} different for ${cityName} businesses?`,
              answer: `Our ${serviceName.toLowerCase()} approach is specifically tailored for ${cityName} market conditions, local user preferences, and regional business requirements.`
            },
            {
              question: `Can you integrate ${serviceName.toLowerCase()} with existing ${cityName} business systems?`,
              answer: `Absolutely! We ensure all our ${serviceName.toLowerCase()} solutions integrate seamlessly with local business systems and requirements commonly used in ${cityName}.`
            },
            {
              question: `What's the cost of ${serviceName.toLowerCase()} services in ${cityName}?`,
              answer: `${serviceName} pricing varies based on project scope and requirements. We offer competitive rates for ${cityName} businesses with flexible payment options. Contact us for a detailed quote.`
            }
          ]}
        />

        {/* Contact Section */}
        <ContactSection 
          title={`Ready to Start Your ${serviceName} Project in ${cityName}?`}
          showForm={true}
        />
      </div>
    );
  }

  // Return fallback content if no generated content found
  return fallbackContent;
}