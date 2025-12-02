'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BackgroundParticles from './BackgroundParticles';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className = '',
}: HeroProps) {
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

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/60 via-forest-800/50 to-primary-800/40" />
      
      <BackgroundParticles count={6} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          {...animationProps}
          className="space-y-6 sm:space-y-8"
        >
          <motion.p
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 }
            })}
            className="text-primary-300 font-medium text-base sm:text-lg tracking-wide uppercase"
          >
            {subtitle}
          </motion.p>

          <motion.h1
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 }
            })}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2"
          >
            {title}
          </motion.h1>

          <motion.p
            {...(prefersReducedMotion ? {} : {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 }
            })}
            className="text-lg sm:text-xl text-beige-100 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
          >
            {description}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 }
              })}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 px-4"
            >
              {primaryCTA && (
                <motion.div
                  {...(prefersReducedMotion ? {} : {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 }
                  })}
                >
                  <Link
                    href={primaryCTA.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:shadow-xl text-center min-w-[200px]"
                  >
                    <span>{primaryCTA.text}</span>
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              )}

              {secondaryCTA && (
                <motion.div
                  {...(prefersReducedMotion ? {} : {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 }
                  })}
                >
                  <Link
                    href={secondaryCTA.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 glass text-white font-semibold rounded-xl backdrop-blur-md border border-white/20 hover:border-primary-300/50 transition-all duration-300 text-center min-w-[200px]"
                  >
                    {secondaryCTA.text}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        {...(prefersReducedMotion ? {} : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 1 }
        })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            {...(prefersReducedMotion ? {} : {
              animate: { y: [0, 10, 0] },
              transition: { duration: 2, repeat: Infinity }
            })}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}