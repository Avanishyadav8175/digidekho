import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceHero = ({ service }) => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-purple-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Key Features */}
            {service.features && service.features.length > 0 && (
              <div className="space-y-3">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            {service.technologies && service.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/projects" className="btn-secondary inline-flex items-center justify-center">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={service.bannerImage}
                alt={service.title}
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

export default ServiceHero;