import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ServiceProjects = ({ service, projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our {service.title} Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent {service.title.toLowerCase()} projects and see the quality of work we deliver.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Live URL */}
                {project.liveUrl && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Client Info */}
                {project.client && project.client.name && (
                  <div className="text-sm text-gray-600 mb-4">
                    Client: <span className="font-medium">{project.client.name}</span>
                    {project.client.company && (
                      <span> ({project.client.company})</span>
                    )}
                  </div>
                )}

                {/* CTA */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link 
            href={`/projects?service=${service.slug}`}
            className="btn-primary"
          >
            View All {service.title} Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceProjects;