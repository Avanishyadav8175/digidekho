import { Star, Quote } from 'lucide-react';

const ServiceTestimonials = ({ service, testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Our {service.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our {service.title.toLowerCase()} services.
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
                  {testimonial.city && (
                    <div className="text-sm text-primary-600">
                      {testimonial.city.name}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Value */}
              {testimonial.projectValue && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    Project Value: <span className="font-semibold text-primary-600">{testimonial.projectValue}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;