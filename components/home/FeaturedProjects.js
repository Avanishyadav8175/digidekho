import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: '/Floriwish.png',
      category: 'Web Development',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://floriwish.com/',
      slug: 'ecommerce-platform',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking application with advanced security features.',
      image: '/App1.png',
      category: 'App Development',
      technologies: ['React Native', 'Firebase', 'Biometric Auth'],
      liveUrl: 'https://example-banking.com',
      slug: 'mobile-banking-app',
    },
    {
      id: 3,
      title: 'AI Chatbot Solution',
      description: 'Intelligent customer service chatbot with natural language processing capabilities.',
      image: '/AiChatbot.png',
      category: 'AI Automation',
      technologies: ['Python', 'TensorFlow', 'NLP', 'API Integration'],
      liveUrl: 'https://example-chatbot.com',
      slug: 'ai-chatbot-solution',
    },
    {
      id: 4,
      title: 'Brand Video Campaign',
      description: 'Creative video marketing campaign that increased brand awareness by 300%.',
      image: '/BrandCampaign.png',
      category: 'Video Editing',
      technologies: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
      liveUrl: 'https://example-video.com',
      slug: 'brand-video-campaign',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      Live Preview
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
                
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

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
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;