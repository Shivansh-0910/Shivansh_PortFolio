import React from 'react';
import { Heart, ArrowUp, Zap, Code, Coffee, Cloud } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 relative overflow-hidden glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Logo/Brand */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto blue-glow">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-shimmer mb-2">Shivansh Singh</h3>
              <p className="text-slate-400">Full-Stack Developer & Software Architect</p>
            </div>
            .glass-dark {
              background: rgba(15, 23, 42, 0.88);
              backdrop-filter: blur(18px);
              border: 1.5px solid rgba(56, 189, 248, 0.25);
              box-shadow: 0 2px 24px 0 rgba(14, 165, 233, 0.10), 0 1.5px 0 0 rgba(56,189,248,0.10);
            }

          {/* Built with love section */}
          <div className="flex items-center space-x-3 text-center glass p-4 rounded-2xl blue-border">
            <p className="text-slate-300">Crafted with</p>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <p className="text-slate-300">and</p>
            <Coffee className="w-5 h-5 text-yellow-400 animate-bounce" />
            <p className="text-slate-300">by</p>
            <span className="text-sky-400 font-bold">Shivansh Singh</span>
          </div>
          
          {/* Tech stack */}
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-sky-400" />
              <span>React</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>TypeScript</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-sm"></span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">© 2024 Shivansh Singh. All rights reserved.</p>
            <p className="text-slate-500 text-xs">
              Designed and developed with passion for creating exceptional digital experiences
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="mt-8 w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 magnetic blue-glow group animate-float"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-125 transition-transform duration-300 text-white" />
          </button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-sky-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-500 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-sky-300 rounded-full animate-ping opacity-30"></div>
    </footer>
  );
};

export default Footer;