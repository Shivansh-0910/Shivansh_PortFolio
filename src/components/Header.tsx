import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Cloud, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass backdrop-blur-xl border-b border-sky-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center blue-glow group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary-gradient">
                Shivansh Singh
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-slate-300 hover:text-sky-400 transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/ShivanshSingh_Resume.pdf"
              download="ShivanshSingh_Resume.pdf"
              className="btn-primary text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg magnetic flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
            {[
              { icon: Github, href: 'https://github.com/Shivansh-0910', color: 'hover:text-slate-300' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/', color: 'hover:text-sky-400' },
              { icon: Mail, href: 'mailto:shivanshs932@gmail.com', color: 'hover:text-blue-400' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-125 magnetic`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-sky-400 transition-colors duration-200 magnetic"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass rounded-xl mt-2 blue-border">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-sky-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Shivansh_Singh_Resume.pdf"
                className="btn-primary text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg flex items-center gap-2 mx-3 my-2"
              >
                <Download size={16} />
                Download Resume
              </a>
              <div className="flex space-x-4 px-3 py-2">
                {[
                  { icon: Github, href: 'https://github.com/Shivansh-0910' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/' },
                  { icon: Mail, href: 'mailto:shivanshs932@gmail.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;