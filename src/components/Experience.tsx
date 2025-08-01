import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Building, Award, TrendingUp, Users, Zap, Star } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Developing full-stack applications using Spring Boot and React. Working on microservices architecture and implementing best practices for scalable web applications.',
      achievements: [
        'Built responsive web applications serving 1000+ users',
        'Implemented RESTful APIs with 99.5% uptime',
        'Optimized database queries improving performance by 40%',
        'Collaborated with cross-functional teams using Agile methodology',
        'Mentored junior developers on best coding practices'
      ],
      technologies: ['Spring Boot', 'React', 'MySQL', 'AWS', 'Docker', 'Git'],
      metrics: { projects: '5+', uptime: '99.5%', improvement: '40%' }
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'Digital Innovations',
      location: 'Hybrid',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Contributed to various client projects focusing on web development using modern frameworks. Gained experience in both frontend and backend technologies.',
      achievements: [
        'Developed user-friendly interfaces with React and JavaScript',
        'Created robust backend services using Spring Boot',
        'Integrated third-party APIs and payment gateways',
        'Participated in code reviews and maintained coding standards',
        'Achieved 95% client satisfaction rate on delivered projects'
      ],
      technologies: ['Java', 'Spring Framework', 'React', 'PostgreSQL', 'Bootstrap', 'Maven'],
      metrics: { projects: '8+', satisfaction: '95%', apis: '10+' }
    },
    {
      title: 'Software Development Intern',
      company: 'StartupTech',
      location: 'On-site',
      period: '2022 - 2022',
      type: 'Internship',
      description: 'Gained hands-on experience in software development lifecycle. Worked on real-world projects and learned industry best practices.',
      achievements: [
        'Developed features for web applications using React',
        'Assisted in database design and optimization',
        'Participated in daily standups and sprint planning',
        'Contributed to open-source projects',
        'Completed training in modern development tools and practices'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML/CSS', 'Git'],
      metrics: { features: '15+', training: '100%', contribution: '3+' }
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Technology',
      location: 'India',
      period: '2019 - 2023',
      description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.',
      gpa: '8.5/10',
      achievements: ['Dean\'s List', 'Programming Contest Winner', 'Technical Society Member']
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Central Board of Secondary Education',
      location: 'India',
      period: '2017 - 2019',
      description: 'Focused on Mathematics, Physics, and Computer Science with strong foundation in analytical thinking.',
      gpa: '85%',
      achievements: ['Academic Excellence Award', 'Science Olympiad Participant', 'Computer Club President']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-primary-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience & <span className="text-shimmer">Education</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My professional journey and educational background in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Building className="text-sky-400" size={32} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`glass rounded-3xl p-8 blue-border hover-lift card-3d group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveExperience(index)}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-all duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-xl font-semibold text-sky-400 mb-3">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-slate-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(exp.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center glass p-3 rounded-xl blue-border">
                        <div className="text-lg font-bold text-sky-400">
                          {value}
                        </div>
                        <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-all duration-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Award size={18} className="text-sky-400" />
                      Key Achievements
                    </h5>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="text-slate-300 text-sm flex items-start gap-3 glass p-3 rounded-lg blue-border hover-lift"
                        >
                          <Star size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm rounded-full font-medium hover:from-sky-400 hover:to-blue-500 transition-all duration-300 magnetic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Award className="text-blue-400" size={32} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`glass rounded-2xl p-6 blue-border hover-lift ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sky-400 font-semibold mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400 mb-3">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                  
                  {edu.gpa && (
                    <div className="mb-3">
                      <span className="text-sky-300 font-bold">Score: {edu.gpa}</span>
                    </div>
                  )}
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="text-xs text-slate-400 flex items-center gap-2">
                        <Zap size={10} className="text-sky-400" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;