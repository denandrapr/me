'use client';
import { Mail, Github, Linkedin } from 'lucide-react';

const FooterSection = () => {
    return (
        <footer className = "py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 border-t border-gray-700" >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 mb-4 md:mb-0">
                        © 2025 John Doe. All rights reserved.
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default FooterSection;