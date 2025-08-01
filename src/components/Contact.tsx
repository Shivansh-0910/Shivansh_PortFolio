import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Zap, Star, Download } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email',
      info: 'shivanshs932@gmail.com',
      link: 'mailto:shivanshs932@gmail.com'
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: 'Phone',
      info: '+91 9368554228',
      link: 'tel:+919368554228'
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Location',
      info: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-7 h-7" />,
      name: 'GitHub',
      url: 'https://github.com/Shivansh-0910',
      color: 'hover:text-slate-300'
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivansh-singh-2576772b1/',
      color: 'hover:text-sky-400'
    },
    {
      icon: <Mail className="w-7 h-7" />,
      name: 'Email',
      url: 'mailto:shivanshs932@gmail.com',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className={`text-5xl sm:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Let's <span className="text-shimmer">Connect</span>
          </h2>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Get In <span className="text-primary-gradient">Touch</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-6 glass-dark p-6 rounded-2xl blue-border hover-lift card-3d group shadow-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center blue-glow group-hover:animate-pulse">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 group-hover:text-sky-400 transition-all duration-300">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-all duration-300">
                        {item.info}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Follow <span className="text-primary-gradient">Me</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center text-white transition-all duration-300 magnetic blue-glow hover-lift"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-4">
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Download className="w-6 h-6 text-sky-400" />
                  <h4 className="font-bold text-white">Resume</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Download my complete resume with detailed experience and skills.
                </p>
                <a
                  href="/resume.pdf"
                  download="Shivansh_Singh_Resume.pdf"
                  className="btn-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg magnetic inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
              
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-sky-400" />
                  <h4 className="font-bold text-white">Quick Response</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent matters,
                  feel free to reach out via phone or LinkedIn.
                </p>
              </div>
              
            <div className="glass-dark p-6 rounded-2xl blue-border hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-sky-400" />
                  <h4 className="font-bold text-white">Available for</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Full-time Roles', 'Freelance Projects', 'Consulting', 'Collaboration'].map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-dark p-8 rounded-3xl blue-border hover-lift shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send <span className="text-primary-gradient">Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 glass rounded-xl blue-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 bg-slate-800/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 glass rounded-xl blue-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 bg-slate-800/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 glass rounded-xl blue-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 bg-slate-800/50"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 glass rounded-xl blue-border focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-slate-400 bg-slate-800/50 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-white py-4 px-8 rounded-xl font-bold text-lg shadow-2xl magnetic flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;