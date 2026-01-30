import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, CheckCircle, MapPin } from 'lucide-react';

const CityServiceCTA = ({ service, city }) => {
  const whatsappNumber = city.whatsappNumber || city.country.whatsappNumber || '+919996821315';
  const whatsappMessage = `Hi, I'm looking for ${service.title} services in ${city.name}. Can you provide a quote?`;

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="container-custom">
        <div className="text-center text-white">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{city.name}, {city.country.name}</span>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Professional {service.title} in {city.name}
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Transform your business with our expert {service.title.toLowerCase()} services. 
              Local support in {city.name} with global quality standards.
            </p>
          </div>

          {/* Local Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <CheckCircle className="w-8 h-8 text-green-300" />
              <span className="text-primary-100 font-medium">Local {city.name} Team</span>
              <span className="text-primary-200 text-sm text-center">
                Dedicated support team based in {city.name}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <CheckCircle className="w-8 h-8 text-green-300" />
              <span className="text-primary-100 font-medium">Fast Response</span>
              <span className="text-primary-200 text-sm text-center">
                Quick response times for {city.name} clients
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <CheckCircle className="w-8 h-8 text-green-300" />
              <span className="text-primary-100 font-medium">Competitive Pricing</span>
              <span className="text-primary-200 text-sm text-center">
                Best rates for {service.title.toLowerCase()} in {city.name}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Quote for {city.name}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <div className="flex gap-4">
              <a
                href={`tel:${whatsappNumber}`}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {city.name}
              </a>
              
              <a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Process Steps for City */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">How We Work in {city.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Contact Our {city.name} Team</h4>
                <p className="text-primary-100 text-sm">
                  Reach out to our local {city.name} representatives
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Local Consultation</h4>
                <p className="text-primary-100 text-sm">
                  Free consultation tailored to {city.name} market needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Custom Proposal</h4>
                <p className="text-primary-100 text-sm">
                  Detailed proposal with {city.name}-specific solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Local Delivery</h4>
                <p className="text-primary-100 text-sm">
                  Project delivery with ongoing {city.name} support
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-400">
            <p className="text-primary-100 mb-4">Trusted by businesses in {city.name}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Local Businesses</div>
              <div className="text-white font-semibold">Startups</div>
              <div className="text-white font-semibold">Enterprises</div>
              <div className="text-white font-semibold">Government</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityServiceCTA;