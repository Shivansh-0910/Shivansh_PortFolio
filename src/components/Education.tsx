import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const education = [
    {
      institution: 'ABES Engineering College',
      location: 'Ghaziabad',
      degree: 'B.Tech in Computer Science',
      period: 'Nov 2022 – July 2026',
      gpa: '8.1/10.0',
      type: 'Bachelor\'s Degree',
      coursework: [
        'Computer Science',
        'Data Structures and Algorithms',
        'Operating System',
        'Compiler Design',
        'Computer Networking'
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-sky-400 to-blue-600'
    },
    {
      institution: 'St.Thomas Sr. Sec. School',
      location: 'Mainpuri',
      degree: 'Senior Secondary Education',
      period: '2020 – 2022',
      scores: [
        { level: 'Senior Secondary (ISC Board)', score: '82/100' },
        { level: 'Secondary (ICSE Board)', score: '92/100' }
      ],
      type: 'High School',
      icon: <BookOpen className="w-8 h-8" />, 
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section id="education" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Education & <span className="text-shimmer">Learning</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My academic journey and educational background in computer science and technology
          </p>
        </div>
        {/* Education Cards */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-dark rounded-3xl p-8 blue-border hover-lift card-3d group shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Icon and Institution */}
                <div className="flex items-start gap-6 lg:flex-col lg:items-center lg:text-center lg:min-w-[200px]">
                  <div className={`w-20 h-20 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center blue-glow group-hover:animate-pulse`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="lg:mt-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-all duration-300">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-2 lg:justify-center">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm rounded-full font-medium">
                      {edu.type}
                    </span>
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1 space-y-6">
                  {/* Degree and Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-sky-400 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    {/* GPA or Scores */}
                    {edu.gpa && (
                      <div className="glass p-4 rounded-xl blue-border text-center">
                        <div className="flex items-center gap-2 justify-center mb-1">
                          <Award size={16} className="text-sky-400" />
                          <span className="text-sm text-slate-400">GPA</span>
                        </div>
                        <div className="text-2xl font-bold text-sky-400">
                          {edu.gpa}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Scores for School */}
                  {edu.scores && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {edu.scores.map((score, scoreIndex) => (
                        <div key={scoreIndex} className="glass-dark p-4 rounded-xl blue-border">
                          <div className="flex items-center gap-2 mb-2">
                            <Star size={16} className="text-sky-400" />
                            <span className="text-sm text-slate-300 font-medium">
                              {score.level}
                            </span>
                          </div>
                          <div className="text-xl font-bold text-sky-400">
                            {score.score}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Coursework */}
                  {edu.coursework && (
                    <div>
                      <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <BookOpen size={18} className="text-sky-400" />
                        Key Coursework
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-4 py-2 glass-dark rounded-lg blue-border text-slate-300 text-sm font-medium hover-lift transition-all duration-300 hover:text-white hover:bg-sky-500/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

        {/* Academic Highlights */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Academic <span className="text-primary-gradient">Highlights</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 blue-glow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Current GPA</h4>
              <p className="text-3xl font-black text-sky-400 mb-2">8.1/10.0</p>
              <p className="text-slate-400 text-sm">Computer Science Engineering</p>
            </div>
            
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 blue-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Secondary Score</h4>
              <p className="text-3xl font-black text-blue-400 mb-2">92/100</p>
              <p className="text-slate-400 text-sm">ICSE Board</p>
            </div>
            
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 blue-glow">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Senior Secondary</h4>
              <p className="text-3xl font-black text-indigo-400 mb-2">82/100</p>
              <p className="text-slate-400 text-sm">ISC Board</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Education;