import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';


function App() {
  // Custom animated cursor logic
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 12}px`;
        cursorRef.current.style.top = `${e.clientY - 12}px`;
      }
      if (trailRef.current) {
        trailRef.current.animate([
          { left: trailRef.current.style.left, top: trailRef.current.style.top },
          { left: `${e.clientX - 32}px`, top: `${e.clientY - 32}px` }
        ], {
          duration: 400,
          fill: 'forwards',
          easing: 'ease-out'
        });
        trailRef.current.style.left = `${e.clientX - 32}px`;
        trailRef.current.style.top = `${e.clientY - 32}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white animate-fadein relative">
      {/* Custom animated cursor */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none w-6 h-6 rounded-full border-2 border-sky-400 bg-sky-400/20 shadow-lg transition-transform duration-200 animate-glow"
        style={{ left: 0, top: 0, transform: 'translateZ(0)', mixBlendMode: 'lighten' }}
      />
      {/* Cursor trailing effect */}
      <div
        ref={trailRef}
        className="fixed z-[9998] pointer-events-none w-16 h-16 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500"
        style={{ left: 0, top: 0, transform: 'translateZ(0)', mixBlendMode: 'lighten' }}
      />

      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      {/* Global animated particles overlay */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-sky-500/20 to-blue-800/20 rounded-full blur-3xl animate-particle"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;