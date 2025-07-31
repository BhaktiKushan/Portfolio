import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        throw new Error('Please enter a valid email address');
      }

      // Create properly formatted email content
      const emailData = {
        to: 'bhaktikushan@gmail.com',
        subject: `Portfolio Contact from ${formData.name}`,
        body: `Hello Bhakti Kushan,

You have received a new message from your portfolio contact form.

SENDER DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

MESSAGE:
${formData.message}

---
This message was sent from your portfolio contact form.
You can reply directly to ${formData.email}.

Best regards,
Portfolio Contact System`
      };

      // Encode the email data for mailto
      const encodedSubject = encodeURIComponent(emailData.subject);
      const encodedBody = encodeURIComponent(emailData.body);
      const mailtoLink = `mailto:${emailData.to}?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Try to open the email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitMessage('Email client opened! Please send the email from your email application.');
      
      // Log the form submission for debugging
      console.log('Form Data Submitted:', {
        formData,
        timestamp: new Date().toISOString(),
        status: 'email_opened'
      });
      
      // Clear form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitMessage('');
      }, 5000);

    } catch (error) {
      setSubmitMessage(error.message);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'bhaktikushan@gmail.com',
      link: 'mailto:bhaktikushan@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9014761920',
      link: 'tel:+919014761920'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Hyderabad, Telangana, India',
      link: null
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'BhaktiKushan',
      link: 'https://github.com/BhaktiKushan'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Currently Looking For</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Full-time Software Developer positions
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Frontend/Backend Development roles
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Internship opportunities
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:bhaktikushan@gmail.com"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  Direct Email
                </a>
                <a
                  href="tel:+919014761920"
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                submitMessage.includes('opened') 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
              }`}>
                {submitMessage.includes('opened') ? (
                  <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                )}
                <span className="text-sm">{submitMessage}</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> This form will open your default email client with the message pre-filled. Make sure you have an email application configured, or use the "Direct Email" button above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;