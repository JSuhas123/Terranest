'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OptimizedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function OptimizedLayout({ children, className = '' }: OptimizedLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Set loaded state
    setIsLoaded(true);

    // Listen for changes in motion preference
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      };

  return (
    <div className={`min-h-screen ${className}`}>
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div {...motionProps}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Scroll optimization component
interface ScrollOptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function ScrollOptimizedSection({ 
  children, 
  className = '', 
  threshold = 0.1 
}: ScrollOptimizedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const element = document.querySelector(`[data-scroll-section]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div data-scroll-section className={className}>
      {isVisible ? children : <div className="h-32" />}
    </div>
  );
}

export default OptimizedLayout;