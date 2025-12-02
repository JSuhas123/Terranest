'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'minimal';
  hover?: boolean;
  href?: string;
}

const cardVariants = {
  default: 'bg-white border border-gray-200 shadow-soft',
  glass: 'glass',
  elevated: 'bg-white shadow-premium',
  minimal: 'bg-white',
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  href,
}: CardProps) {
  const cardClasses = `
    ${cardVariants[variant]} 
    rounded-xl overflow-hidden transition-all duration-300
    ${hover ? 'hover:shadow-premium hover:-translate-y-2' : ''}
    ${className}
  `;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02 } : {}}
      className={cardClasses}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

// Specialized Card Components
export function CollectionCard({
  title,
  description,
  price,
  image,
  href,
  badge,
}: {
  title: string;
  description: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
}) {
  return (
    <Card href={href} variant="elevated">
      <div className="relative">
        <div
          className="h-64 bg-gradient-forest bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          {badge && (
            <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-forest-800 mb-2">{title}</h3>
          <p className="text-forest-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">{price}</span>
            <span className="text-primary-600 font-medium">Learn More →</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function WorkshopCard({
  title,
  description,
  date,
  duration,
  level,
  price,
  href,
  status = 'available',
}: {
  title: string;
  description: string;
  date: string;
  duration: string;
  level: string;
  price: string;
  href: string;
  status?: 'available' | 'full' | 'coming-soon';
}) {
  const statusColors = {
    available: 'bg-primary-100 text-primary-800',
    full: 'bg-earth-100 text-earth-800',
    'coming-soon': 'bg-beige-100 text-beige-800',
  };

  return (
    <Card href={href} variant="glass">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-forest-800">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
            {status === 'coming-soon' ? 'Coming Soon' : status === 'full' ? 'Full' : 'Available'}
          </span>
        </div>
        <p className="text-forest-600 mb-6 leading-relaxed">{description}</p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-forest-500">Date</span>
            <span className="font-medium text-forest-800">{date}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-forest-500">Duration</span>
            <span className="font-medium text-forest-800">{duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-forest-500">Level</span>
            <span className="font-medium text-forest-800">{level}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-forest-200">
            <span className="text-forest-500">Price</span>
            <span className="text-xl font-bold text-primary-600">{price}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}