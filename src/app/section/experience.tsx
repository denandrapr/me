import React from 'react';

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>

                <div className="space-y-8">
                    {[
                        {
                            title: "Senior Mobile Developer",
                            company: "TechCorp Inc.",
                            duration: "2022 - Present",
                            location: "San Francisco, CA",
                            description: "Led mobile development team of 5 developers. Built scalable Android applications using Kotlin and MVVM architecture. Implemented CI/CD pipelines reducing deployment time by 40%."
                        },
                        {
                            title: "Mobile Developer",
                            company: "StartupXYZ",
                            duration: "2020 - 2022",
                            location: "New York, NY",
                            description: "Developed cross-platform mobile apps using Flutter. Collaborated with design team to implement pixel-perfect UIs. Integrated RESTful APIs and implemented offline-first architecture."
                        },
                        {
                            title: "Junior Android Developer",
                            company: "DevStudio",
                            duration: "2019 - 2020",
                            location: "Austin, TX",
                            description: "Built native Android applications using Java and Kotlin. Worked on e-commerce applications handling 100k+ daily active users. Optimized app performance resulting in 25% faster load times."
                        }
                    ].map((job, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                                    <p className="text-lg text-gray-300">{job.company}</p>
                                </div>
                                <div className="text-gray-400 text-sm md:text-right">
                                    <p>{job.duration}</p>
                                    <p>{job.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-300">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;