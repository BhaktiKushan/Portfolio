import React from 'react';
import { ExternalLink, Github, MessageCircle, ShoppingCart, Calculator, QrCode, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Chat App',
      description: 'Real-time chat application with modern UI and seamless messaging experience. Built with React and integrated with backend APIs for instant communication.',
      icon: MessageCircle,
      link: 'https://chat-app-frontend-two-swart.vercel.app',
      github: 'https://github.com/BhaktiKushan/Chat-App_Frontend',
      tags: ['React', 'Real-time', 'WebSocket', 'Frontend'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Swiggy',
      description: 'Food delivery application clone with restaurant listings, menu browsing, and ordering system. Features responsive design and user-friendly interface.',
      icon: Utensils,
      link: 'https://swiggy-frontend-kpcb.onrender.com',
      github: 'https://github.com/BhaktiKushan/Swiggy_Frontend',
      tags: ['React', 'Food Delivery', 'UI/UX', 'Clone'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'E-mart Shopping',
      description: 'Complete e-commerce platform with product catalog, shopping cart, and checkout functionality. Built with modern web technologies.',
      icon: ShoppingCart,
      link: 'https://e-mart-shopping-hazel.vercel.app',
      github: 'https://github.com/BhaktiKushan/E-mart-Shopping',
      tags: ['E-commerce', 'React', 'Shopping Cart', 'Frontend'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Calculator',
      description: 'Scientific calculator with advanced mathematical operations and clean, intuitive interface. Responsive design for all devices.',
      icon: Calculator,
      link: 'https://calculator-ten-amber.vercel.app',
      github: 'https://github.com/BhaktiKushan/Calculator',
      tags: ['JavaScript', 'Math', 'Responsive', 'Utility'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'QR Code Generator',
      description: 'Dynamic QR code generator tool that creates custom QR codes for text, URLs, and other data. Simple and efficient design.',
      icon: QrCode,
      link: 'https://qr-code-generator-kappa-ten.vercel.app',
      github: 'https://github.com/BhaktiKushan/QR-code-Generator',
      tags: ['JavaScript', 'QR Code', 'Generator', 'Tool'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/BhaktiKushan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;