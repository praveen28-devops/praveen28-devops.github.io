import { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Cloud, 
  Server, 
  Database, 
  Shield,
  Monitor,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingParticles from './FloatingParticles';
import GeometricShapes from './GeometricShapes';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

    const element = document.getElementById('projects');
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

  const projects = [
    {
      title: '3-Tier Scalable Web Application on AWS',
      description: 'Architected and deployed a highly available 3-tier web application on AWS using EC2, RDS, and S3 with load balancing, auto scaling, and secure VPC networking.',
      icon: Zap,
      technologies: ['AWS', 'EC2', 'RDS', 'S3', 'IAM', 'VPC'],
      highlights: [
        'Achieved 60fps animations on low-end mobile devices',
        'Reduced animation bundle size by 40%', 
        'Implemented adaptive performance based on device capability'
      ],
      metrics: {
        performance: '35% lower latency',
        cost: '40% smaller bundle',
        reliability: '99.9% uptime'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AWS Fully Serverless Architecture with CI/CD',
      description: 'Implemented a production-grade serverless API architecture using AWS Lambda, API Gateway, and Aurora Serverless, with infrastructure provisioned via Terraform and CI/CD powered by GitHub Actions.',
      icon: Monitor,
      technologies: ['Lambda', 'API Gateway', 'Terraform', 'GitHub Actions'],
      highlights: [
        'Automated deployments via GitHub Actions CI/CD pipeline',
        'Achieved secure, scalable API delivery with private VPC endpoints and Secrets Manager',
      ],
      metrics: {
        performance: '100% serverless uptime',
        cost: 'Touch-optimized UX',
        reliability: 'Fully automated deployments'
      },
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'AWS Infrastructure Automation with Terraform & GitLab CI/CD',
      description: 'Developed a DevOps pipeline to provision and manage AWS infrastructure using Terraform, fully automated with GitLab CI/CD for seamless deployments.',
      icon: Server,
      technologies: ['Terraform', 'GitLab CI/CD', 'EC2', 'S3', 'VPC'],
      highlights: [
        'Automated multi-environment AWS provisioning with Terraform',
        'Enabled zero-touch deployments through GitLab CI/CD pipelines',
      ],
      metrics: {
        performance: 'Faster infrastructure provisioning',
        cost: 'Network-adaptive quality',
        reliability: 'Consistent, error-free deployments'
      },
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleProjectInteraction = (index: number, isEntering: boolean) => {
    if (!isMobile) {
      setHoveredProject(isEntering ? index : null);
    }
  };

  const handleProjectClick = (index: number) => {
    if (isMobile) {
      // Toggle hover state on mobile for better UX
      setHoveredProject(hoveredProject === index ? null : index);
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Effects */}
      {!isMobile && <GeometricShapes shapeCount={12} />}
      <FloatingParticles 
        particleCount={isMobile ? 15 : 25} 
        className="absolute inset-0 opacity-30" 
      />
      
      {/* Background Elements - Enhanced for animations */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-neon-blue/30 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-neon-purple/20 rounded-full blur-2xl sm:blur-3xl floating-card animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-accent/10 rounded-full blur-3xl floating-card" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] sm:text-[clamp(2rem,6vw,3.5rem)] md:text-[clamp(3rem,6vw,4rem)] lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions that drive operational excellence and business growth
          </p>
        </div>

        {/* Projects Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 touch-manipulation cursor-pointer group ${
                isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${hoveredProject === index ? 'scale-[1.05] translate-y-[-8px] shadow-2xl' : 'hover:scale-[1.03] hover:shadow-lg'}`}
              style={{ 
                transitionDelay: `${200 + index * 150}ms`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => handleProjectInteraction(index, true)}
              onMouseLeave={() => handleProjectInteraction(index, false)}
              onClick={() => handleProjectClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(index);
                }
              }}
            >
              {/* Project Header */}
              <div className={`p-3 sm:p-4 md:p-5 bg-gradient-to-r ${project.color} relative overflow-hidden group-hover:bg-gradient-to-br transition-all duration-500`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full blur-lg sm:blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/10 rounded-full blur-lg sm:blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 bg-white/15 rounded-full blur-md group-hover:scale-150 transition-transform duration-700"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/20 rounded-lg sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-tight group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white/80">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white/80 hover:text-white hover:bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 h-auto text-xs touch-manipulation transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 md:p-5">
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs font-semibold text-primary mb-1.5 sm:mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-1.5">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics - Condensed for mobile */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs font-semibold text-primary mb-1.5 sm:mb-2">Impact</h4>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Performance:</span>
                      <span className="text-accent font-medium text-xs">{project.metrics.performance}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Reliability:</span>
                      <span className="text-accent font-medium text-xs">{project.metrics.reliability}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-1.5 sm:mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-1.5 sm:px-2 py-0.5 bg-secondary-elevated text-foreground text-xs font-medium rounded-full hover:bg-accent-soft hover:text-accent transition-colors duration-200 touch-manipulation"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects - Mobile Optimized */}
        <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base touch-manipulation"
          >
            View All Projects
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;