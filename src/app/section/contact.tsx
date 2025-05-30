'use client';

import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Let's connect!</h3>
          <p className="text-gray-300 mb-8">
            I'm always interested in discussing new opportunities, interesting projects, or just having a chat about technology.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">Email</h4>
              <a href="mailto:john.doe@email.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                john.doe@email.com
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Github className="text-blue-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">GitHub</h4>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                github.com/johndoe
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
              <h4 className="font-bold mb-2">LinkedIn</h4>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                linkedin.com/in/johndoe
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john.doe@email.com" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;