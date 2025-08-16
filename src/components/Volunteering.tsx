import { useEffect, useState } from 'react';
import { 
  Users, 
  Award, 
  Heart, 
  BookOpen, 
  Lightbulb, 
  Target,
  Globe,
  Star
} from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import GeometricShapes from './GeometricShapes';

const Volunteering = () => {
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

    const element = document.getElementById('volunteering');
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


  const volunteeringExperience = [
    {
      title: 'Community Volunteer',
      organization: 'Atchayam Trust',
      period: '2024 - Present',
      description: 'Supporting community events and elder care initiatives.',
      icon: BookOpen,
      contributions: [
        'Volunteered at old age homes during functions.',
        'Distributed food, clothing, and essential supplies.',
        'Fostered intergenerational connections through activities and conversations',
        'Assisted in event planning and logistics for community welfare programs.'
      ],
      impact: 'Improved quality of life for elders and promoted community bonding.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Volunteer',
      organization: 'Ullash Trust',
      period: '2023 - Present',
      description: 'Educating and mentoring tribal students in Sittling, Dharmapuri.',
      icon: Heart,
      contributions: [
        'Taught 10th–12th grade tribal students in Sittling, Dharmapuri.',
        'Encouraged learning despite resource and infrastructure challenges.',
        'Organized interactive workshops to improve problem-solving and critical thinking skills.'
      ],
      impact: 'Empowered rural students with knowledge and confidence to pursue higher education.',
      color: 'from-red-500 to-orange-500'
    },
  ];


  return (
    <section id="volunteering" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Effects */}
      {!isMobile && <GeometricShapes shapeCount={8} />}
      <FloatingParticles 
        particleCount={isMobile ? 12 : 20} 
        className="absolute inset-0 opacity-25" 
      />
      
      {/* Background Elements - Enhanced for animations */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-neon-purple/30 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-neon-cyan/20 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-accent/15 rounded-full blur-3xl floating-card" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] sm:text-[clamp(2rem,6vw,3.5rem)] md:text-[clamp(3rem,6vw,4rem)] lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Volunteering
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto">
            Making a positive impact through community engagement and knowledge sharing
          </p>
        </div>

        {/* Volunteering Experience */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-primary transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            Volunteering Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {volunteeringExperience.map((experience, index) => (
              <div
                key={index}
                className={`glass-card p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700 group hover:scale-[1.02] hover:shadow-xl ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${experience.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <experience.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:animate-pulse" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1 sm:mb-2 leading-tight">{experience.title}</h4>
                <p className="text-accent font-semibold mb-1 text-xs sm:text-sm">{experience.organization}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 md:mb-4">{experience.period}</p>
                <p className="text-muted-foreground mb-2.5 sm:mb-3 md:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">{experience.description}</p>
                
                <div className="mb-2.5 sm:mb-3 md:mb-4">
                  <h5 className="text-xs font-semibold text-primary mb-1.5 sm:mb-2">Contributions</h5>
                  <div className="space-y-1">
                    {experience.contributions.slice(0, 3).map((contribution, cIndex) => (
                      <div key={cIndex} className="flex items-start space-x-1.5">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-accent-soft p-2 sm:p-2.5 md:p-3 rounded-lg border-l-2 sm:border-l-3 border-accent group-hover:bg-accent/20 group-hover:border-accent/80 transition-all duration-300">
                  <p className="text-xs text-foreground font-medium group-hover:text-accent transition-colors duration-300">{experience.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;