import React from 'react';
import { Code, Database, Globe, Smartphone, Brain, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'Mongoose', 'Database Design', 'Query Optimization'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['Machine Learning', 'Artificial Intelligence', 'Data Analysis', 'Python'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Technologies',
      icon: Code,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Soft Skills',
      icon: Smartphone,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Learning Agility'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical skills in modern web development and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;