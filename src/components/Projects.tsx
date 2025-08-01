import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Star, Zap, Users, Award, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'ShopEase E-Commerce Platform',
      description: 'Full-stack e-commerce application built with Spring Boot and React. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Stripe API', 'Bootstrap'],
      githubUrl: 'https://github.com/Shivansh-0910/ShopEase',
      liveUrl: 'https://github.com/Shivansh-0910/ShopEase',
      features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Gateway'],
      stats: { users: '500+', performance: '99.5%', rating: 4.8 }
    },
    {
      title: 'SilverLink Banking App',
      description: 'Comprehensive banking application with secure transaction processing, account management, and real-time balance updates. Built with modern security practices.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Spring Security', 'JWT', 'Material-UI'],
      githubUrl: 'https://github.com/Shivansh-0910/Silverlink-Banking-App',
      liveUrl: 'https://github.com/Shivansh-0910/Silverlink-Banking-App',
      features: ['Secure Transactions', 'Account Management', 'Real-time Updates', 'Transaction History'],
      stats: { users: '300+', performance: '99.8%', rating: 4.9 }
    },
    {
      title: 'Hospital Management System',
      description: 'Complete hospital management solution with patient records, appointment scheduling, doctor management, and billing system. Streamlines healthcare operations.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React', 'MySQL', 'JPA/Hibernate', 'Spring Security', 'Bootstrap'],
      githubUrl: 'https://github.com/Shivansh-0910/Hospital_M_System',
      liveUrl: 'https://github.com/Shivansh-0910/Hospital_M_System',
      features: ['Patient Records', 'Appointment Scheduling', 'Doctor Management', 'Billing System'],
      stats: { users: '200+', performance: '99.3%', rating: 4.7 }
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured <span className="text-shimmer">Projects</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Showcasing my expertise in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative glass-dark rounded-3xl overflow-hidden blue-border hover-lift card-3d shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 to-blue-600/60 group-hover:from-sky-400/40 group-hover:to-blue-500/40 transition-all duration-500"></div>
                
                {/* Floating stats */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="glass px-3 py-1 rounded-full text-white text-sm font-bold blue-border">
                    <Users className="w-4 h-4 inline mr-1" />
                    {project.stats.users}
                  </div>
                  <div className="glass px-3 py-1 rounded-full text-white text-sm font-bold blue-border">
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    {project.stats.performance}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic blue-border"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 magnetic blue-border"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 glass px-3 py-1 rounded-full blue-border">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-bold">{project.stats.rating}</span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-all duration-300">
                  {project.description}
                </p>

                {/* Features grid */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap size={16} className="text-sky-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-slate-300 flex items-center gap-2 glass px-3 py-2 rounded-lg blue-border hover-lift"
                      >
                        <Award size={12} className="text-sky-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm rounded-full font-medium hover:from-sky-400 hover:to-blue-500 transition-all duration-300 magnetic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium group/link"
                  >
                    <Github size={18} className="group-hover/link:animate-pulse" />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-200 font-medium group/link"
                  >
                    <ExternalLink size={18} className="group-hover/link:animate-pulse" />
                    View Project
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#contact"
            className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl magnetic inline-flex items-center gap-3"
          >
            <Zap className="w-5 h-5" />
            Let's Build Something Amazing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;