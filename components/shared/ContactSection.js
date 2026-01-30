'use client';

import { useState } from 'react';

export default function ContactSection({ title = "Get In Touch", showForm = true }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@digitaldekho.com',
      description: 'Send us an email anytime',
      href: 'mailto:hello@digitaldekho.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 9996821315',
      description: 'Mon-Fri from 9am to 6pm',
      href: 'tel:+919996821315'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: 'Chat with us',
      description: 'Quick response guaranteed',
      href: 'https://wa.me/919996821315'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Delhi, India',
      description: 'Schedule a meeting',
      href: '/contact'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Save lead to localStorage for admin panel
        const existingLeads = JSON.parse(localStorage.getItem('admin-leads') || '[]');
        const updatedLeads = [result.lead, ...existingLeads];
        localStorage.setItem('admin-leads', JSON.stringify(updatedLeads));

        // Add notification
        const notification = {
          id: Date.now() + Math.random(), // Ensure unique ID
          type: 'lead',
          title: 'New Lead Received',
          message: `${result.lead.name} submitted a ${result.lead.service} inquiry`,
          timestamp: new Date().toISOString(),
          read: false,
          leadId: result.lead.id
        };

        const existingNotifications = JSON.parse(localStorage.getItem('admin-notifications') || '[]');
        const updatedNotifications = [notification, ...existingNotifications];
        localStorage.setItem('admin-notifications', JSON.stringify(updatedNotifications));

        // Trigger storage event for cross-tab updates
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new Event('localStorageUpdate'));
        
        // Log for debugging
        console.log('Lead saved to localStorage:', result.lead);
        console.log('Current leads in localStorage:', updatedLeads.length);

        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Digital Dekho?</h3>
              <div className="space-y-3">
                {[
                  '✅ 5+ Years of Experience',
                  '✅ 500+ Successful Projects',
                  '✅ 24/7 Customer Support',
                  '✅ 100% Satisfaction Guarantee',
                  '✅ Competitive Pricing',
                  '✅ Fast Turnaround Time'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <span className="mr-3">{item.split(' ')[0]}</span>
                    <span>{item.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {showForm && (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    <span className="mr-2">
                      {submitStatus.type === 'success' ? '✅' : '❌'}
                    </span>
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9999999999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Photo Editing">Photo Editing</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="Over $50,000">Over $50,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}