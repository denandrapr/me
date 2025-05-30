import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-300 mb-6">
                            I'm a passionate mobile developer with over 5 years of experience in creating
                            high-quality mobile applications. I specialize in native Android development with
                            Kotlin and cross-platform solutions using Flutter and React Native.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-300"><strong>5+ Years</strong> of Mobile Development Experience</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300">Worked in <strong>FinTech, E-commerce, Healthcare</strong> industries</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-gray-300">Specialized in <strong>Native Android & Cross-platform</strong> development</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mt-6">
                            When I'm not coding, you can find me hiking, playing guitar, or experimenting with new technologies.
                            I'm always eager to learn and take on new challenges!
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Facts</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-300">Based in San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300">Available for remote opportunities</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-gray-300">Passionate about clean code & UX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;