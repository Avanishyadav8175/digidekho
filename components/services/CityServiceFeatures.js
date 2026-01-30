import { MapPin, Clock, Users, Award, CheckCircle } from 'lucide-react';

const CityServiceFeatures = ({ service, city }) => {
  const localFeatures = [
    {
      icon: MapPin,
      title: `Local ${city.name} Expertise`,
      description: `We understand the local market in ${city.name} and provide solutions tailored to your regional needs.`,
    },
    {
      icon: Clock,
      title: 'Quick Response Time',
      description: `Fast response times for clients in ${city.name} with dedicated local support team.`,
    },
    {
      icon: Users,
      title: 'Local Support Team',
      description: `Our experienced team in ${city.name} is ready to assist you throughout your project.`,
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: `We have successfully delivered ${service.title.toLowerCase()} projects for businesses in ${city.name}.`,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our {service.title} Services in {city.name}?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine global expertise with local knowledge to deliver exceptional {service.title.toLowerCase()} 
            services specifically for businesses in {city.name}, {city.country.name}.
          </p>
        </div>

        {/* Local Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {localFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Service Features for City */}
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our {service.title} Services Include
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {service.features && service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* Local Advantage */}
          <div className="bg-white rounded-lg p-6 mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              The {city.name} Advantage
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">Local</div>
                <div className="text-gray-600">Understanding of {city.name} market</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">Fast</div>
                <div className="text-gray-600">Quick turnaround for {city.name} clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">Support</div>
                <div className="text-gray-600">Dedicated {city.name} support team</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technologies We Use for {service.title} in {city.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityServiceFeatures;