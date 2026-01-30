import Link from 'next/link';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';

const CityServiceHero = ({ service, city }) => {
  const whatsappNumber = city.whatsappNumber || city.country.whatsappNumber || '+919996821315';
  const whatsappMessage = `Hi, I'm looking for ${service.title} services in ${city.name}. Can you help me?`;

  return (
    <section className="bg-gradient-to-br from-primary-50 to-purple-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-primary-600">Services</Link>
              <span className="mx-2">/</span>
              <Link href={`/services/${service.slug}`} className="hover:text-primary-600">{service.title}</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-600">{city.name}</span>
            </nav>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{city.name}, {city.country.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {service.title} in {city.name}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional {service.title.toLowerCase()} services in {city.name}, {city.country.name}. 
                Get expert {service.title.toLowerCase()} solutions with local support and global quality standards.
              </p>
            </div>

            {/* Local Benefits */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Why Choose Us in {city.name}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Local {city.name} Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Fast Response Time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Competitive Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Proven Track Record</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <div className="flex gap-3">
                <a
                  href={`tel:${whatsappNumber}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  <Phone className="w-5 h-5" />
                </a>
                
                <a
                  href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available in {city.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Local Support Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Quick Response</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={service.bannerImage}
                alt={`${service.title} in ${city.name}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityServiceHero;