import React from 'react';
import { Github, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/BhaktiKushan',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:bhaktikushan@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:9014761920',
      label: 'Phone'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bhakti Kushan
            </div>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              B-Tech Final Year Student passionate about web development and AI/ML. 
              Always eager to learn and contribute to innovative projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 text-gray-400 dark:text-gray-300 text-sm">
              <p>Email: bhaktikushan@gmail.com</p>
              <p>Phone: +91 9014761920</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-300 flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Bhakti Kushan
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            © 2024 Bhakti Kushan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;