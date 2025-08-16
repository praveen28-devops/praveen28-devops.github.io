import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleSystem from './ParticleSystem';
import profilePhoto from '../assets/profile-photo.png'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contactItems = [
    { icon: MapPin, text: 'Namakkal, Tamil Nadu, India', href: 'https://maps.app.goo.gl/TmHd9zgFyMdSK8Kc7' , color: "text-red-500"},
    { icon: Mail, text: 'Gmail', href: 'mailto:praveen.dev.cloud@gmail.com' },
    { icon: Phone, text: 'Phone', href: 'tel:+916382832865' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/praveen-a-devops' },
    { icon: Github, text: 'GitHub Profile', href: 'https://github.com/praveen28-devops' }
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('summary');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(215 75% 15% / 0.95), hsl(190 85% 45% / 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}
    >
      {/* Particle System - Reduced on mobile for performance */}
      {!isMobile && <ParticleSystem count={150} />}
      {isMobile && <ParticleSystem count={50} />}

      {/* Enhanced Animated Background - Simplified for mobile */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-20 sm:top-55 left-10 sm:left-30 w-40 h-40 sm:w-90 sm:h-90 bg-accent/40 rounded-full blur-2xl sm:blur-3xl floating-card"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-primary-glow/30 rounded-full blur-2xl sm:blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-72 sm:h-72 bg-highlight-teal/25 rounded-full blur-2xl sm:blur-3xl floating-slow"></div>
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-32 h-32 sm:w-64 sm:h-64 bg-highlight-blue/20 rounded-full blur-2xl sm:blur-3xl floating-card" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Section with Mobile-Optimized Image */}
          <div className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 transition-all duration-1600 ${isVisible ? 'fade-in-scale' : 'opacity-0'}`}>
            <div className="relative inline-block mb-3 sm:mb-4 md:mb-6">
              <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] mx-auto rounded-full glass-card p-2 floating-card super-elevated">
                <div className="w-full h-full rounded-full overflow-hidden relative image-overlay">
                  <img 
                    src={profilePhoto} 
                    alt="Praveen A" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-accent rounded-full glow-accent animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-primary-glow rounded-full glow-liteblue" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Name and Title with Mobile-First Typography */}
          <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-[clamp(2.5rem,10vw,4rem)] sm:text-[clamp(3rem,8vw,5rem)] md:text-[clamp(4rem,8vw,6rem)] lg:text-8xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-glow-blue leading-tight">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-600 animate-pulse">
                Praveen A
              </span>
            </h1>
            <h2 className="text-[clamp(1.25rem,5vw,1.75rem)] sm:text-[clamp(1.5rem,5vw,2.5rem)] md:text-[clamp(2rem,5vw,3rem)] lg:text-4xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-glow leading-tight">
              Aspiring Cloud and DevOps Engineer
            </h2>
            <p className="text-[clamp(0.875rem,4vw,1rem)] sm:text-[clamp(1rem,4vw,1.25rem)] md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Pursuing B.Tech in Information Technology with a passion for cloud and DevOps, automation, and scalable system design. Currently at an intermediate level and eager to contribute to innovative projects while growing skills in the DevOps field
            </p>
          </div>

          {/* Enhanced Contact Info with Mobile-Optimized Layout */}
          <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1500 delay-500 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 max-w-5xl mx-auto px-2">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full bg-blue-900/80 hover:bg-blue-700 text-white 
                    hover:super-elevated transition-all duration-500 group tilt-card touch-manipulation backdrop-blur-sm`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
                    <item.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium hidden sm:inline">{item.text}</span>
                    <span className="font-medium sm:hidden">{item.text.split(' ')[0]}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons with Mobile-Responsive Design */}
          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-4">
              <a 
                href="/Praveen A-Resume.pdf"
                download="Praveen_A_Resume.pdf"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-base md:text-lg touch-manipulation inline-flex items-center justify-center cursor-pointer"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-1.5 sm:mr-2 md:mr-3 group-hover:animate-bounce" />
                Download Resume
              </a>
              <button 
                onClick={() => {
                  console.log('View Projects clicked!');
                  window.open('https://github.com/praveen28-devops', '_blank');
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-base md:text-lg touch-manipulation inline-flex items-center justify-center cursor-pointer relative z-50"
              >
                View Projects
                <Github className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1.5 sm:ml-2 md:ml-3 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Mobile Optimization */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 floating-card">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 touch-manipulation"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-8 sm:w-8 sm:h-12 border-2 sm:border-3 border-white/50 rounded-full flex justify-center backdrop-blur-sm group-hover:border-white/80 transition-colors duration-300">
            <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-accent rounded-full mt-1.5 sm:mt-3 animate-ping glow-accent"></div>
          </div>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 group-hover:text-white/90 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;