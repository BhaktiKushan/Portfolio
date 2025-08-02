import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Bhakti Kushan
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                MERN Stack Developer
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web applications and exploring the intersection of 
              artificial intelligence and machine learning. Ready to contribute to meaningful projects 
              and grow in the tech industry.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/BhaktiKushan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
            <a
              href="mailto:bhaktikushan@gmail.com"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Email
            </a>
            <a
              href="tel:9014761920"
              className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Call
            </a>
            <a
              href="https://docs.google.com/document/d/1nr0VNVsek51lzV55Ee9FzfioVOt17i4k/edit?usp=sharing&ouid=112356708439633219783&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <FileText className="mr-2" size={20} />
              Resume
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;