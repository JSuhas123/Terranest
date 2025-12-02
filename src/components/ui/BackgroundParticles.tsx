'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';

interface BackgroundParticlesProps {
  className?: string;
  count?: number;
}

export default function BackgroundParticles({ className = '', count = 30 }: BackgroundParticlesProps) {
  const [particles, setParticles] = useState<Array<{ 
    x: number; 
    y: number; 
    size: number; 
    opacity: number; 
    speed: number;
    xMovement: number;
  }>>([]);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Optimize particle count based on screen size and reduce motion preference
  const optimizedCount = useMemo(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return 0;
      
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return Math.min(count * 0.5, 15); // Mobile: fewer particles
      if (screenWidth < 1024) return Math.min(count * 0.7, 20); // Tablet: moderate particles
      return count; // Desktop: full count
    }
    return count;
  }, [count]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !isVisible || optimizedCount === 0) return;
    
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < optimizedCount; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Slightly smaller particles
          opacity: Math.random() * 0.3 + 0.1, // More subtle
          speed: Math.random() * 15 + 15, // Slower movement
          xMovement: Math.random() * 8 - 4 // Less horizontal movement
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [optimizedCount, isClient, isVisible]);

  // Don't render anything until client-side to avoid hydration mismatch
  if (!isClient || !isVisible || optimizedCount === 0) {
    return <div ref={elementRef} className={`absolute inset-0 ${className}`} />;
  }

  return (
    <div ref={elementRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute bg-primary-300 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, particle.xMovement, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}