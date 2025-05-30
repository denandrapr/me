import React from 'react';

import { ChevronDown, Download } from 'lucide-react';

type HeroProps = {
    scrollToSection: (id: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroProps) => {
    return (
        <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left side - Name and Title */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Denandra Prasetya
                            </span>
                        </h1>

                        <p className="text-xl md:text-xl text-gray-300 mb-6">
                            Mobile Developer
                        </p>

                        <p className="text-lg text-gray-400 mb-8">
                            Passionate mobile developer with 5+ years of experience creating innovative mobile applications
                            that delight users and drive business growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2">
                                <Download size={20} />
                                Download Resume
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full transition-all duration-200"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Right side - Photo */}
                    <div className="md:w-1/2">
                        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                                {/* Replace "profile.jpg" with your actual image filename */}
                                <img
                                    src="/adraa.png"
                                    alt="Profile Photo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <ChevronDown
                        size={32}
                        className="mx-auto animate-bounce text-gray-400 cursor-pointer"
                        onClick={() => scrollToSection('about')}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;