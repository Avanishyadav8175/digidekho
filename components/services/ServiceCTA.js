import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, CheckCircle } from 'lucide-react';

const ServiceCTA = ({ service }) => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="container-custom">
        <div className="text-center text-white">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their business with our {service.title.toLowerCase()} services.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <span className="text-primary-100">Free Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <span className="text-primary-100">Quick Turnaround</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <span className="text-primary-100">100% Satisfaction Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <div className="flex gap-4">
              <a
                href="tel:+919996821315"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              
              <a
                href={`https://wa.me/919996821315?text=Hi, I'm interested in your ${service.title} services`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-primary-100 text-sm">
                  Reach out via phone, WhatsApp, or contact form
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Free Consultation</h4>
                <p className="text-primary-100 text-sm">
                  We discuss your requirements and provide expert advice
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Custom Proposal</h4>
                <p className="text-primary-100 text-sm">
                  Receive a detailed proposal tailored to your needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Project Delivery</h4>
                <p className="text-primary-100 text-sm">
                  We deliver your project on time and within budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;