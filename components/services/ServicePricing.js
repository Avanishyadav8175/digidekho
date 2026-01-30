import Link from 'next/link';
import { Check, Star } from 'lucide-react';

const ServicePricing = ({ service }) => {
  if (!service.pricing || service.pricing.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {service.title} Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our standard features and support.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.pricing.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 relative ${
                plan.isPopular 
                  ? 'border-2 border-primary-500 shadow-xl scale-105' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600">
                  One-time payment
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors duration-200 block ${
                  plan.isPopular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
            Contact us for custom pricing →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;