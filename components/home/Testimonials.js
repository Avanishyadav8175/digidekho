'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      designation: 'CEO',
      image: 'https://picsum.photos/100/100?random=6',
      content: 'Digital Dekho transformed our online presence completely. Their web development team delivered a stunning website that increased our conversions by 150%. Highly recommended!',
      rating: 5,
      service: 'Web Development',
      city: 'New York',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      company: 'Mumbai Retail',
      designation: 'Marketing Director',
      image: 'https://picsum.photos/100/100?random=7',
      content: 'The mobile app they developed for us has been a game-changer. Our customers love the user experience, and we\'ve seen a 200% increase in mobile orders.',
      rating: 5,
      service: 'App Development',
      city: 'Mumbai',
    },
    {
      id: 3,
      name: 'Emily Chen',
      company: 'Global Solutions',
      designation: 'Operations Manager',
      image: 'https://picsum.photos/100/100?random=8',
      content: 'Their AI automation solution saved us 40 hours per week on manual tasks. The ROI was evident within the first month. Exceptional work!',
      rating: 5,
      service: 'AI Automation',
      city: 'Singapore',
    },
    {
      id: 4,
      name: 'David Wilson',
      company: 'Creative Agency',
      designation: 'Creative Director',
      image: 'https://picsum.photos/100/100?random=9',
      content: 'The video editing quality is outstanding. They understood our brand vision perfectly and delivered content that exceeded our expectations.',
      rating: 5,
      service: 'Video Editing',
      city: 'London',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      company: 'Fashion Boutique',
      designation: 'Owner',
      image: 'https://picsum.photos/100/100?random=10',
      content: 'Their Google Ads campaign doubled our online sales in just 3 months. The team is professional, responsive, and delivers results.',
      rating: 5,
      service: 'Google Ads',
      city: 'Delhi',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients from around the world have to say about our services.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote className="w-12 h-12" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-900 text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.designation} at {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-primary-600 mt-1">
                    {currentTestimonial.service} • {currentTestimonial.city}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;