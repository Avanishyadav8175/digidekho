import { Star, Quote, MapPin } from 'lucide-react';

const CityServiceTestimonials = ({ service, city, testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What {city.name} Clients Say About Our {service.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from satisfied clients in {city.name} who have experienced our {service.title.toLowerCase()} services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {testimonial.clientImage && (
                    <img
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.clientName}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.designation && testimonial.company
                        ? `${testimonial.designation} at ${testimonial.company}`
                        : testimonial.company || testimonial.designation
                      }
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-primary-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{city.name}, {city.country.name}</span>
                </div>

                {/* Project Value */}
                {testimonial.projectValue && (
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      Project Value: <span className="font-semibold text-primary-600">{testimonial.projectValue}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats for City */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Impact in {city.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects in {city.name}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Local Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients in {city.name}?
          </p>
          <a href="/contact" className="btn-primary">
            Start Your {service.title} Project in {city.name}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CityServiceTestimonials;