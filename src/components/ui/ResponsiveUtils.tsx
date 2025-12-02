'use client';

import { useEffect, useState } from 'react';

// Breakpoint utilities
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Hook to get current screen size
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
    breakpoint: Breakpoint;
  }>({
    width: 0,
    height: 0,
    breakpoint: 'sm',
  });

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint: Breakpoint = 'sm';
      if (width >= breakpoints['2xl']) breakpoint = '2xl';
      else if (width >= breakpoints.xl) breakpoint = 'xl';
      else if (width >= breakpoints.lg) breakpoint = 'lg';
      else if (width >= breakpoints.md) breakpoint = 'md';
      else breakpoint = 'sm';

      setScreenSize({ width, height, breakpoint });
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return screenSize;
}

// Hook to check if user prefers reduced motion
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Hook to check if device supports hover
export function useSupportsHover() {
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setSupportsHover(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setSupportsHover(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return supportsHover;
}

// Responsive container component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

export function ResponsiveContainer({ 
  children, 
  className = '', 
  maxWidth = 'xl',
  padding = true 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}

// Responsive grid component
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 2 | 3 | 4 | 6 | 8;
}

export function ResponsiveGrid({ 
  children, 
  className = '', 
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 6 
}: ResponsiveGridProps) {
  const getColsClass = () => {
    const classes = [`grid-cols-${cols.default}`];
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    return classes.join(' ');
  };

  return (
    <div className={`grid ${getColsClass()} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

// Performance monitoring hook
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    loadTime: number;
    renderTime: number;
  }>({
    loadTime: 0,
    renderTime: 0,
  });

  useEffect(() => {
    const startTime = performance.now();

    // Measure page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    });

    // Measure render time
    const renderTime = performance.now() - startTime;
    setMetrics(prev => ({ ...prev, renderTime }));
  }, []);

  return metrics;
}

export default {
  useScreenSize,
  usePrefersReducedMotion,
  useSupportsHover,
  ResponsiveContainer,
  ResponsiveGrid,
  usePerformanceMetrics,
  breakpoints,
};