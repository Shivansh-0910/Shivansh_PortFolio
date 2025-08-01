import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Code, Rocket, Star } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titles = [
    "Full-Stack Developer",
    "Spring Boot Expert", 
    "React Specialist",
    "Java Developer",
    "Software Engineer"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-primary-gradient">
      {/* Subtle background particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Subtle mouse follower effect */}
      <div 
        className="fixed w-64 h-64 rounded-full pointer-events-none z-10 opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          transition: 'all 0.3s ease-out'
        }}
      />

      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Profile Avatar */}
            <div className="mb-12 relative">
              <div className="relative inline-block group">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl animate-float card-3d blue-glow">
                  <span className="text-shimmer">SS</span>
                </div>
                
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse-blue">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-pulse-blue">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full flex items-center justify-center animate-pulse-blue">
                  <Star className="w-4 h-4 text-white" />
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse-blue shadow-lg">
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Hi, I'm{' '}
              <span className="text-shimmer block sm:inline">
                Shivansh Singh
              </span>
            </h1>
            
            {/* Animated subtitle */}
            <div className="text-2xl sm:text-3xl text-slate-300 mb-4 h-12 flex items-center justify-center">
              <span className="typing-effect font-semibold">
                {titles[currentTitle]}
              </span>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Passionate developer crafting exceptional digital experiences with{' '}
              <span className="text-sky-400 font-bold">Spring Boot</span>,{' '}
              <span className="text-blue-400 font-bold">React</span>, and{' '}
              <span className="text-indigo-400 font-bold">Java Technologies</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#contact"
                className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl magnetic"
              >
                Let's Connect
              </a>
              <a
                href="/resume.pdf"
                download="Shivansh_Singh_Resume.pdf"
                className="btn-secondary flex items-center gap-3 text-white px-10 py-4 rounded-full font-bold text-lg magnetic"
              >
                <Download size={24} className="animate-bounce" />
                Download Resume
              </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="animate-bounce">
              <a 
                href="#about" 
                className="inline-block text-slate-400 hover:text-sky-400 transition-colors duration-300 magnetic"
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <ArrowDown size={32} className="animate-pulse" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky-500/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500/10 rounded-lg animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-sky-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;