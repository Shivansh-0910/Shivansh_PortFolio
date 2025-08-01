import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Zap, Brain, Rocket, Shield, Globe, Trophy } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Expert in Java, Spring Boot, React, and modern web technologies',
      delay: '0s'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Proficient in MySQL, PostgreSQL, and database optimization',
      delay: '0.2s'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Competitive Programming',
      description: '750+ DSA problems solved, HackerRank 5-Star Gold Badge',
      delay: '0.4s'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Building high-performance, scalable applications',
      delay: '0.6s'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Strong analytical skills and innovative solution development',
      delay: '0.8s'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Focus',
      description: 'Implementing secure coding practices and authentication',
      delay: '1s'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Project Leadership',
      description: 'Leading development of complex applications and systems',
      delay: '1.2s'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'API Development',
      description: 'RESTful APIs and microservices architecture expertise',
      delay: '1.4s'
    }
  ];

  const achievements = [
    'Solved 750+ DSA problems across LeetCode and TUF+ (TakeUForward by Striver)',
    'HackerRank 5-Star Gold Badge in Problem Solving',
    'LeetCode: 1700+ rating — 300+ problems solved',
    'Finalist – HackData 2024, Shiv Nadar University',
    'Participant – HackVerse (by GeeksforGeeks)'
  ];

  return (
    <section id="about" className="py-32 bg-secondary-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-shimmer">Me</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate software developer with expertise in full-stack development and competitive programming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-4xl font-bold text-white mb-6">
              My <span className="text-primary-gradient">Journey</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="glass p-6 rounded-2xl blue-border hover-lift">
                I'm a <span className="text-sky-400 font-bold">dedicated software developer</span> with 
                a passion for creating innovative solutions using modern technologies. My expertise 
                spans across full-stack development with a strong foundation in Java and Spring Boot.
              </p>
              
              <p className="glass p-6 rounded-2xl blue-border hover-lift">
                With hands-on experience in <span className="text-blue-400 font-bold">Spring Boot</span>, 
                <span className="text-indigo-400 font-bold"> React</span>, and database technologies, 
                I build scalable applications that deliver exceptional user experiences and robust backend solutions.
              </p>
              
              <p className="glass p-6 rounded-2xl blue-border hover-lift">
                I'm passionate about <span className="text-sky-300 font-bold">competitive programming</span> and 
                have solved 750+ DSA problems, earning recognition through various coding competitions and maintaining 
                a strong problem-solving mindset in all my development work.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="glass p-6 rounded-2xl blue-border hover-lift">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="text-sky-400" size={24} />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass p-6 rounded-2xl blue-border hover-lift card-3d group`}
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 blue-glow group-hover:animate-pulse">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-sky-400 transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '750+', label: 'DSA Problems Solved', color: 'text-sky-400' },
            { number: '1700+', label: 'LeetCode Rating', color: 'text-blue-400' },
            { number: '10+', label: 'Projects Completed', color: 'text-indigo-400' },
            { number: '5⭐', label: 'HackerRank Gold Badge', color: 'text-sky-300' }
          ].map((stat, index) => (
            <div key={index} className="text-center glass p-6 rounded-2xl blue-border hover-lift">
              <div className={`text-4xl font-black ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;