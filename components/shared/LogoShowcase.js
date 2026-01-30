'use client';

import Logo from './Logo';

export default function LogoShowcase({ 
  title = "Trusted Digital Partner",
  subtitle = "Digital Dekho - Your Global Digital Agency",
  showStats = true,
  variant = "default"
}) {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo Display */}
          <div className="flex justify-center mb-8">
            <Logo 
              size="xl" 
              variant="hero" 
              showText={false} 
              animated={true}
              className="transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Brand Elements */}
          <div className="mt-12 flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}