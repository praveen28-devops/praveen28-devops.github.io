import { useEffect, useState } from 'react';
import { Code, Cloud, Zap, Shield } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import GeometricShapes from './GeometricShapes';

const ProfessionalSummary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('summary');
    if (element) {
      observer.observe(element);
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'Quick Learner',
      description: 'Rapidly acquiring new technologies and development practices'
    },
    {
      icon: Cloud,
      title: 'Cloud Enthusiast',
      description: 'Passionate about AWS, Azure, and modern cloud architectures'
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Analytical approach to troubleshooting and optimization'
    },
    {
      icon: Shield,
      title: 'Quality Focused',
      description: 'Committed to best practices and secure coding standards'
    }
  ];

  return (
    <section id="summary" className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Elements - Reduced on mobile */}
      {!isMobile && (
        <>
          <FloatingParticles 
            particleCount={30} 
            colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary)/0.7)', 'hsl(var(--accent)/0.7)']}
          />
          <GeometricShapes shapeCount={6} />
        </>
      )}
      {isMobile && (
        <FloatingParticles 
          particleCount={15} 
          colors={['hsl(var(--primary))', 'hsl(var(--accent))']}
        />
      )}
      
      {/* Traditional Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-accent/30 rounded-full blur-2xl sm:blur-3xl floating-card"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-2xl sm:blur-3xl floating-card" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] sm:text-[clamp(1.75rem,6vw,3rem)] md:text-[clamp(2rem,6vw,3.5rem)] lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Professional Summary
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Summary Card */}
        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl perspective-card">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center text-foreground">
              <span className="text-accent font-semibold">Pursuing</span> B.Tech in Information Technology with strong foundations in DevOps, Cloud Computing, and automation. Skilled in 
              <span className="text-accent font-semibold"> Docker</span>, 
              <span className="text-accent font-semibold"> Kubernetes</span>, 
              <span className="text-accent font-semibold"> Terraform</span>, 
              GitLab CI/CD, and AWS, with practical experience through academic projects and self-learning. Proficient in 
              <span className="text-accent font-semibold"> containerization</span> and 
              <span className="text-accent font-semibold"> CI/CD pipelines</span>, ready to apply these skills in real-world scenarios.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center text-foreground mt-4 sm:mt-6">
              Eager to join innovative teams, sharpen cloud-native and automation skills, and deliver value from day one.
            </p>
          </div>
        </div>

        {/* Highlights Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center perspective-card transition-all duration-1000 ${
                isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent to-primary rounded-xl sm:rounded-2xl mb-3 sm:mb-4 glow-accent">
                <highlight.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary leading-tight">
                {highlight.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row - Mobile Optimized */}
        <div className={`mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">1+</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Years of Self Learning</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">5+</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Projects Built</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">5+</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Technologies Learned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;