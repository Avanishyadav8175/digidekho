'use client';

import { useState } from 'react';

export default function TestimonialsSection({ title = "What Our Clients Say" }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStart Solutions',
      company: 'Mumbai, India',
      image: '👨‍💼',
      rating: 5,
      text: 'Digital Dekho transformed our online presence completely. Their web development team created a stunning website that increased our conversions by 300%. Highly recommended!',
      service: 'Web Development'
    },
    {
      name: 'Priya Sharma',
      position: 'Marketing Director',
      company: 'Delhi, India',
      image: '👩‍💼',
      rating: 5,
      text: 'The AI automation solutions provided by Digital Dekho saved us 40 hours per week. Their team is professional, responsive, and delivers exceptional results.',
      service: 'AI Automation'
    },
    {
      name: 'Michael Johnson',
      position: 'Founder, EcoTech',
      company: 'Toronto, Canada',
      image: '👨‍🚀',
      rating: 5,
      text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was delivered on time and within budget.',
      service: 'App Development'
    },
    {
      name: 'Sarah Williams',
      position: 'E-commerce Manager',
      company: 'London, UK',
      image: '👩‍💻',
      rating: 5,
      text: 'Their Google Ads management increased our ROI by 250%. The team is knowledgeable, data-driven, and always available to optimize campaigns.',
      service: 'Google Ads'
    },
    {
      name: 'Ahmed Hassan',
      position: 'Creative Director',
      company: 'Dubai, UAE',
      image: '👨‍🎨',
      rating: 5,
      text: 'Exceptional video editing services! They brought our vision to life with stunning visuals and professional quality. Our brand videos now stand out in the market.',
      service: 'Video Editing'
    },
    {
      name: 'Lisa Chen',
      position: 'Small Business Owner',
      company: 'Singapore',
      image: '👩‍🏫',
      rating: 5,
      text: 'Digital Dekho\'s SEO services helped us rank #1 for our target keywords. Our organic traffic increased by 400% in just 6 months. Amazing results!',
      service: 'SEO Services'
    }
  ];

  const stats = [
    { number: '190+', label: 'Happy Clients' },
    { number: '200+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonials[activeTestimonial].image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].position}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <span className="mr-2">🎯</span>
                {testimonials[activeTestimonial].service}
              </div>
              <div className="text-6xl mb-4">💬</div>
              <p className="text-gray-600">
                Real feedback from our valued clients
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-2">{testimonial.image}</div>
              <div className="text-sm font-medium">{testimonial.name}</div>
              <div className="text-xs opacity-75">{testimonial.service}</div>
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['🏢 Enterprise', '🚀 Startups', '🏪 E-commerce', '🎓 Education', '🏥 Healthcare', '💼 Consulting'].map((badge, index) => (
              <div key={index} className="text-lg font-medium text-gray-500">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


