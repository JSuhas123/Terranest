'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'beige' | 'forest' | 'primary';
  padding?: 'small' | 'medium' | 'large';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  beige: 'bg-beige-50',
  forest: 'bg-forest-50',
  primary: 'bg-primary-50',
};

const paddingClasses = {
  small: 'py-12',
  medium: 'py-16 lg:py-20',
  large: 'py-20 lg:py-32',
};

export default function SectionWrapper({
  children,
  className = '',
  background = 'white',
  padding = 'medium',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}