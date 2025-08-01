
import React, { useState, useRef, useEffect } from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: ' CS50’s Introduction to Programming with Python',
    issuer: 'Harvard University',
    date: 'January 2025',
    link: 'https://cs50.harvard.edu/certificates/2a970abe-42b9-41bc-a035-b832a17919a5',
    file: '/harvard_Certificate.jpeg',
  },
  {
    title: 'TUF+ Certificate in DSA',
    issuer: 'TakeUForward',
    date: 'March 2025',
    link: 'https://static.takeuforward.org/certificate-KR4SnW.pdf',
    file: '/certificate-dsa_TUF+.pdf',
  },
  {
    title: 'Problem Solving(Intermediate) - Hackerrank',
    issuer: 'Hackerrank',
    date: 'July 2025',
    link: 'https://www.hackerrank.com/certificates/d667a766355d',
    file: '/problem_solving_intermediate certificate.pdf',
  },
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Certificates <span className="text-shimmer">& Awards</span></h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Recognitions and certifications that validate my skills and commitment to excellence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, idx) => (
            <div
              key={cert.title}
              className={`group glass-dark rounded-3xl overflow-hidden blue-border card-3d hover-lift shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center blue-glow mr-4 animate-float">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-sky-300 text-sm font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 mb-4">Issued: <span className="font-semibold text-white">{cert.date}</span></p>
                </div>
                <div className="flex space-x-3 mt-auto">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-xl text-sky-400 font-semibold flex items-center space-x-2 hover:bg-sky-500/10 transition-all blue-border">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>View</span>
                  </a>
                  <a href={cert.file} download className="glass px-4 py-2 rounded-xl text-blue-400 font-semibold flex items-center space-x-2 hover:bg-blue-500/10 transition-all blue-border">
                    <Download className="w-4 h-4 mr-1" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-br from-sky-400/30 to-blue-600/30 rounded-full blur-2xl animate-particle"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
