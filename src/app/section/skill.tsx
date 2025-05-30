'use client';

import React from 'react';

const SkillSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Languages",
                skills: ["Kotlin", "Java", "Dart", "JavaScript", "TypeScript", "Python"]
              },
              {
                category: "Mobile Frameworks",
                skills: ["Android Native", "Flutter", "React Native", "Xamarin"]
              },
              {
                category: "Backend & Database",
                skills: ["Firebase", "Node.js", "MongoDB", "PostgreSQL", "Room", "SQLite"]
              },
              {
                category: "Tools & Others",
                skills: ["Git", "Docker", "Jenkins", "Figma", "Postman", "Jira"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 bg-gray-900 px-3 py-2 rounded-lg text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default SkillSection;