import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate B-Tech final year student specializing in Computer Science Engineering 
              with a focus on Artificial Intelligence and Machine Learning. Currently pursuing my degree 
              at Vignana Bharathi Institute of Technology, I have developed a strong foundation in 
              full-stack development using the MERN stack.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to create meaningful 
              solutions. I enjoy working on both frontend and backend development, with particular 
              expertise in React, Node.js, and MongoDB. I'm always eager to learn new technologies 
              and tackle challenging problems.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center text-gray-600">
                <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                <span>Final Year Student</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                <span>India</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology
                </h4>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Computer Science Engineering (AI & ML)
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Vignana Bharathi Institute of Technology
                </p>
                <p className="text-gray-500 dark:text-gray-400">Final Year | 2022-2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;