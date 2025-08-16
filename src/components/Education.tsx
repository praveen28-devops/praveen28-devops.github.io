import { useEffect, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import GeometricShapes from './GeometricShapes';
import FloatingParticles from './FloatingParticles';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
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

    const element = document.getElementById('education');
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

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Information Technology',
      institution: 'K S Rangasamy College of Technology',
      location: 'Namakkal, Tamil Nadu',
      period: '2023 - 2027',
      grade: 'CGPA: 7.8/10',
      highlights: [
        'Specialized in Cloud Computing and DevOps',
        'Member of Zealous Information Technology Association'
      ]
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'Science',
      institution: 'Sri Vidya Mandir Matriculation Higher Secondary School',
      location: 'Namakkal, Tamil Nadu',
      period: '2022 - 2023',
      grade: 'Percentage: 81%',
      highlights: [
        'Active participant in Science Exhibitions',
        'Led school technology club'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: "On Progress",
      credentialUrl: 'https://www.credly.com/badges/aws-solutions-architect-professional',
      level: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: '2025',
      credentialUrl: 'https://catalog-education.oracle.com/apex/f?p=1010:2:106302833521560::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:MX238423qH73c,NtFPU238351Ytjh244ElkC,0',
      level: 'Associate',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: 'On Progress',
      credentialUrl: 'https://www.credly.com/badges/azure-devops-engineer-expert',
      level: 'Expert',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'On Progress',
      credentialUrl: 'https://www.credential.net/google-cloud-professional-architect',
      level: 'Professional',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      date: 'On Progress',
      credentialUrl: 'https://www.credly.com/badges/hashicorp-terraform-associate',
      level: 'Associate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'On Progress',
      credentialUrl: 'https://www.credly.com/badges/docker-certified-associate',
      level: 'Associate',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Effects */}
      {!isMobile && <GeometricShapes shapeCount={10} />}
      <FloatingParticles 
        particleCount={isMobile ? 10 : 18} 
        className="absolute inset-0 opacity-20" 
      />
      
      {/* Background Elements - Enhanced for animations */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-accent/30 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 sm:w-56 sm:h-56 bg-accent/15 rounded-full blur-3xl floating-card" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] sm:text-[clamp(2rem,6vw,3.5rem)] md:text-[clamp(3rem,6vw,4rem)] lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Education & Certifications
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            Academic Background
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 sm:lg:space-x-8">
                  <div className="flex-shrink-0 mb-3 sm:mb-4 lg:mb-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center glow-accent">
                      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                        <p className="text-base sm:text-lg text-accent font-semibold">{edu.field}</p>
                        <p className="text-sm sm:text-base text-foreground">{edu.institution}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 lg:text-right">
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground mb-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-accent font-semibold text-sm sm:text-base">{edu.grade}</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-10'}`}>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <div className="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 h-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-accent/5">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${cert.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1 sm:mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300 leading-tight">{cert.title}</h4>
                  <p className="text-accent font-semibold mb-1 text-xs sm:text-sm group-hover:scale-105 transition-transform duration-300">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{cert.date}</p>
                  <div className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-full group-hover:scale-105 transition-transform duration-300`}>
                    {cert.level}
                  </div>
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-accent animate-pulse" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Education;