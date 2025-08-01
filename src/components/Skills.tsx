import React, { useState, useRef, useEffect } from 'react';
import { Star, Zap, Code, Database, Palette } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          setTimeout(() => {
            const intervals = skillCategories.flatMap((category, categoryIndex) =>
              category.skills.map((_, skillIndex) => {
                const globalIndex = categoryIndex * 10 + skillIndex;
                return setTimeout(() => {
                  setAnimatedBars(prev => new Set([...prev, globalIndex]));
                }, globalIndex * 200);
              })
            );
            return () => intervals.forEach(clearTimeout);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Spring Framework', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Microservices', level: 75 },
        { name: 'JPA/Hibernate', level: 80 }
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      category: 'Database & Tools',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Maven', level: 80 },
        { name: 'Postman', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-primary-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & <span className="text-shimmer">Expertise</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass p-8 rounded-3xl blue-border hover-lift card-3d ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mr-4 blue-glow">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 10 + skillIndex;
                  const isAnimated = animatedBars.has(globalIndex);
                  
                  return (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <Star className="w-4 h-4 text-sky-400" />
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full skill-bar rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          >
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Technology badges */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Technology <span className="text-primary-gradient">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java', 'Spring Boot', 'React', 'JavaScript', 'MySQL', 
              'PostgreSQL', 'MongoDB', 'Git', 'Maven',
              'HTML/CSS', 'Tailwind CSS', 'REST APIs', 'Microservices', 'JPA/Hibernate', 'Postman'
            ].map((tech, index) => (
              <span
                key={index}
                className="glass px-6 py-3 rounded-full text-white font-semibold blue-border hover-lift magnetic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;