'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'white' | 'forest';
  className?: string;
}

const sizeClasses = {
  small: 'w-6 h-6',
  medium: 'w-10 h-10',
  large: 'w-16 h-16'
};

const variantClasses = {
  primary: 'border-primary-600',
  white: 'border-white',
  forest: 'border-forest-600'
};

export function LoadingSpinner({ 
  size = 'medium', 
  variant = 'primary', 
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <motion.div
      className={`${sizeClasses[size]} border-4 border-t-transparent rounded-full ${variantClasses[variant]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function PageLoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <h2 className="text-2xl font-bold text-forest-800">Terranest</h2>
        </motion.div>
        
        <LoadingSpinner size="large" />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-forest-600"
        >
          Growing your digital garden...
        </motion.p>
      </div>
    </motion.div>
  );
}

export function PlantGrowthAnimation() {
  return (
    <div className="relative w-16 h-16">
      {/* Pot */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gradient-to-t from-amber-700 to-amber-500 rounded-b-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      />
      
      {/* Soil */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-amber-900 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />
      
      {/* Stem */}
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1 bg-green-600 rounded-t-full"
        initial={{ height: 0 }}
        animate={{ height: '2rem' }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      
      {/* Leaves */}
      <motion.div
        className="absolute bottom-7 left-1/2 transform -translate-x-1/2"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <div className="w-3 h-6 bg-green-500 rounded-full transform -rotate-45 origin-bottom"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-7 left-1/2 transform -translate-x-1/2"
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        <div className="w-3 h-6 bg-green-500 rounded-full transform rotate-45 origin-bottom"></div>
      </motion.div>
    </div>
  );
}