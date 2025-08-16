import { useEffect } from 'react';
import { useMobile, useMobilePerformance } from '../hooks/use-mobile';

interface MobileOptimizationsProps {
  children: React.ReactNode;
}

const MobileOptimizations: React.FC<MobileOptimizationsProps> = ({ children }) => {
  const { isMobile } = useMobile();
  const { shouldReduceAnimations } = useMobilePerformance();

  useEffect(() => {
    if (isMobile) {
      // Disable pull-to-refresh on mobile
      document.body.style.overscrollBehavior = 'none';
      
      // Optimize scrolling performance
      (document.body.style as any).webkitOverflowScrolling = 'touch';
      
      // Prevent text selection on interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .touch-manipulation');
      interactiveElements.forEach(element => {
        element.addEventListener('selectstart', (e) => e.preventDefault());
      });

      return () => {
        document.body.style.overscrollBehavior = '';
        (document.body.style as any).webkitOverflowScrolling = '';
        
        interactiveElements.forEach(element => {
          element.removeEventListener('selectstart', (e) => e.preventDefault());
        });
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (shouldReduceAnimations) {
      // Add reduced motion class to body
      document.body.classList.add('reduced-motion');
      
      return () => {
        document.body.classList.remove('reduced-motion');
      };
    }
  }, [shouldReduceAnimations]);

  // Add mobile-specific CSS variables
  useEffect(() => {
    const updateMobileVars = () => {
      const root = document.documentElement;
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      
      root.style.setProperty('--vh', `${vh}px`);
      root.style.setProperty('--vw', `${vw}px`);
      
      if (isMobile) {
        root.style.setProperty('--mobile-safe-top', 'env(safe-area-inset-top, 0px)');
        root.style.setProperty('--mobile-safe-bottom', 'env(safe-area-inset-bottom, 0px)');
        root.style.setProperty('--mobile-safe-left', 'env(safe-area-inset-left, 0px)');
        root.style.setProperty('--mobile-safe-right', 'env(safe-area-inset-right, 0px)');
      }
    };

    updateMobileVars();
    window.addEventListener('resize', updateMobileVars);
    window.addEventListener('orientationchange', updateMobileVars);

    return () => {
      window.removeEventListener('resize', updateMobileVars);
      window.removeEventListener('orientationchange', updateMobileVars);
    };
  }, [isMobile]);

  return <>{children}</>;
};

export default MobileOptimizations;
