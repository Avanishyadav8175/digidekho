import Link from 'next/link';
import Logo from '../shared/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'Photo Editing', href: '/services/photo-editing' },
    { name: 'Meta Ads', href: '/services/meta-ads' },
    { name: 'Google Ads', href: '/services/google-ads' },
    { name: 'SEO', href: '/services/seo' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const cities = [
    { name: 'Mumbai', href: '/services/web-development-in-mumbai' },
    { name: 'Delhi', href: '/services/web-development-in-delhi' },
    { name: 'Bangalore', href: '/services/web-development-in-bangalore' },
    { name: 'Chennai', href: '/services/web-development-in-chennai' },
    { name: 'Kolkata', href: '/services/web-development-in-kolkata' },
    { name: 'Hyderabad', href: '/services/web-development-in-hyderabad' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo href="/" size="md" variant="footer" />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Leading global digital agency offering comprehensive digital services including web development, 
              app development, AI automation, and digital marketing solutions worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">📧</span>
                <a 
                  href="mailto:info@digitaldekho.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@digitaldekho.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">📞</span>
                <a 
                  href="tel:+919996821315"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9996821315
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">🌍</span>
                <span className="text-gray-400">
                  Global Digital Agency<br />
                  Serving Worldwide
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="text-blue-400">▶</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="text-blue-400">▶</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Cities</h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link 
                    href={city.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="text-blue-400">📍</span>
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Digital Trends</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights on digital marketing, web development, and business automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Digital Dekho. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <span className="text-green-400">🔒</span>
                  <span>SSL Secured</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="text-blue-400">🌟</span>
                  <span>5-Star Rated</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="text-purple-400">⚡</span>
                  <span>Fast Delivery</span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;