import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="container-custom">
        <div className="text-center text-white">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Join 200+ satisfied clients worldwide who have chosen Digital Dekho for their digital transformation journey.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Consultation
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
                href="https://wa.me/919996821315?text=Hi, I'm interested in your digital services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-primary-100 text-center">
                Quick turnaround times without compromising on quality
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-primary-100 text-center">
                100% satisfaction guarantee with unlimited revisions
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-primary-100 text-center">
                Serving clients in 50+ countries with 24/7 support
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-400">
            <p className="text-primary-100 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Add client logos here */}
              <div className="text-white font-semibold">TechStart</div>
              <div className="text-white font-semibold">GlobalCorp</div>
              <div className="text-white font-semibold">InnovateLab</div>
              <div className="text-white font-semibold">DigitalPro</div>
              <div className="text-white font-semibold">FutureWorks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;