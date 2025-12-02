'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Care Guide Data
const careCategories = [
  {
    id: 'basics',
    title: 'Terrarium Basics',
    icon: '🌱',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'watering',
    title: 'Watering Guide',
    icon: '💧',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'lighting',
    title: 'Light Requirements',
    icon: '☀️',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'troubleshooting',
    title: 'Problem Solving',
    icon: '🔧',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'maintenance',
    title: 'Monthly Maintenance',
    icon: '✂️',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'seasonal',
    title: 'Seasonal Care',
    icon: '🍃',
    color: 'bg-orange-100 text-orange-800'
  }
];

const careGuides = {
  basics: {
    title: 'Terrarium Fundamentals',
    guides: [
      {
        title: 'Understanding Your Ecosystem',
        content: 'Terrariums are miniature ecosystems that require balance between humidity, air circulation, and plant health. Your closed terrarium creates its own water cycle through evaporation and condensation.',
        tips: [
          'Observe condensation patterns on glass walls',
          'Look for healthy green growth',
          'Monitor soil moisture levels',
          'Check for proper air circulation'
        ],
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
      },
      {
        title: 'Choosing the Right Location',
        content: 'Placement is crucial for terrarium health. Find a spot with bright, indirect light away from direct sunlight, heating vents, and air conditioning.',
        tips: [
          'Avoid direct sunlight which can overheat plants',
          'Choose stable surface away from traffic',
          'Ensure consistent room temperature',
          'Keep away from heat sources'
        ],
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop'
      }
    ]
  },
  watering: {
    title: 'Proper Watering Techniques',
    guides: [
      {
        title: 'When to Water',
        content: 'Most terrariums need watering only every 2-4 weeks. Signs include lack of condensation, dry soil surface, and wilting plants.',
        tips: [
          'Check condensation levels weekly',
          'Feel soil moisture through glass bottom',
          'Water when top inch of soil is dry',
          'Less is always better than more'
        ],
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop'
      },
      {
        title: 'How to Water Properly',
        content: 'Use a spray bottle or small watering can. Water slowly and evenly, avoiding plant leaves. Stop when you see moisture at the bottom drainage layer.',
        tips: [
          'Use filtered or distilled water',
          'Water around plants, not on leaves',
          'Apply water slowly and evenly',
          'Stop when drainage layer shows moisture'
        ],
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
      }
    ]
  },
  lighting: {
    title: 'Light Requirements & Management',
    guides: [
      {
        title: 'Natural Light Guidelines',
        content: 'Terrariums thrive in bright, indirect natural light. East or north-facing windows provide ideal conditions without the intense heat of direct sun.',
        tips: [
          'Place near east or north-facing windows',
          'Use sheer curtains to diffuse bright light',
          'Rotate weekly for even growth',
          'Move away from windows in summer heat'
        ],
        image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=300&fit=crop'
      },
      {
        title: 'Artificial Lighting Options',
        content: 'LED grow lights can supplement natural light or provide primary lighting. Use full-spectrum LEDs 6-12 inches away for 8-12 hours daily.',
        tips: [
          'Choose full-spectrum LED grow lights',
          'Position 6-12 inches from terrarium top',
          'Provide 8-12 hours of light daily',
          'Use timer for consistent schedule'
        ],
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      }
    ]
  },
  troubleshooting: {
    title: 'Common Problems & Solutions',
    guides: [
      {
        title: 'Dealing with Overwatering',
        content: 'Overwatering is the most common terrarium problem. Signs include excessive condensation, mold growth, and rotting plants.',
        tips: [
          'Remove lid to increase air circulation',
          'Blot excess water with paper towels',
          'Remove any moldy or rotting material',
          'Allow to dry for several days before reassessing'
        ],
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3bf27?w=400&h=300&fit=crop'
      },
      {
        title: 'Managing Fungal Issues',
        content: 'White fuzzy mold can appear from excess moisture and poor air circulation. Act quickly to prevent spread to healthy plants.',
        tips: [
          'Remove affected areas immediately',
          'Improve air circulation by opening lid',
          'Apply cinnamon as natural antifungal',
          'Reduce watering frequency'
        ],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
      }
    ]
  },
  maintenance: {
    title: 'Regular Maintenance Tasks',
    guides: [
      {
        title: 'Monthly Pruning & Grooming',
        content: 'Regular pruning keeps plants healthy and maintains the terrarium&apos;s aesthetic. Remove dead leaves, trim overgrown branches, and clean glass surfaces.',
        tips: [
          'Use small scissors or pruning tools',
          'Remove dead, yellowing, or damaged leaves',
          'Trim branches that touch the glass',
          'Clean glass with damp microfiber cloth'
        ],
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
      },
      {
        title: 'Soil and Nutrient Management',
        content: 'Terrarium plants need minimal fertilization. Use diluted liquid fertilizer sparingly, only 2-3 times per year during growing season.',
        tips: [
          'Fertilize only during spring/summer',
          'Use liquid fertilizer at 1/4 strength',
          'Apply directly to soil, not leaves',
          'Skip fertilizing if plants look healthy'
        ],
        image: 'https://images.unsplash.com/photo-1493030842880-dd3566c95208?w=400&h=300&fit=crop'
      }
    ]
  },
  seasonal: {
    title: 'Seasonal Care Adjustments',
    guides: [
      {
        title: 'Winter Care Tips',
        content: 'During winter, plants grow more slowly and need less water. Reduce watering frequency and watch for signs of dormancy in some species.',
        tips: [
          'Water less frequently in winter months',
          'Move away from cold windows',
          'Supplement with grow lights if needed',
          'Expect slower growth rates'
        ],
        image: 'https://images.unsplash.com/photo-1545282612-1c7c2c1f4b5f?w=400&h=300&fit=crop'
      },
      {
        title: 'Summer Adaptations',
        content: 'Summer heat requires careful monitoring to prevent overheating. Increase air circulation and move away from hot, sunny windows.',
        tips: [
          'Monitor temperature closely',
          'Increase air circulation if needed',
          'Move to cooler location during heat waves',
          'Check for heat stress signs'
        ],
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop'
      }
    ]
  }
};

const quickTips = [
  {
    title: 'Daily Observations',
    description: 'Spend a few moments each day observing your terrarium for changes',
    icon: '👀'
  },
  {
    title: 'Weekly Rotation',
    description: 'Rotate your terrarium weekly for even plant growth',
    icon: '🔄'
  },
  {
    title: 'Monthly Cleaning',
    description: 'Clean glass surfaces monthly for optimal light transmission',
    icon: '🧽'
  },
  {
    title: 'Seasonal Adjustments',
    description: 'Adjust care routine based on seasonal changes',
    icon: '📅'
  }
];

export default function CareGuidePage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof careGuides>('basics');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SectionWrapper background="primary" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terrarium Care Guide
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know to keep your terrarium thriving. From basic care to troubleshooting common problems, we&apos;ve got you covered.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Quick Tips */}
      <SectionWrapper background="beige" padding="medium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
            >
              <div className="text-3xl mb-3">{tip.icon}</div>
              <h3 className="font-semibold text-forest-800 mb-2">{tip.title}</h3>
              <p className="text-forest-600 text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Category Navigation */}
      <SectionWrapper background="white" padding="medium">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">
            Choose Your Care Topic
          </h2>
          <p className="text-forest-600">
            Select a category to learn more about specific care aspects
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {careCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id as keyof typeof careGuides)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                activeCategory === category.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-forest-200 bg-white hover:border-primary-300'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-semibold text-sm text-forest-800">{category.title}</div>
            </motion.button>
          ))}
        </div>
      </SectionWrapper>

      {/* Care Guide Content */}
      <SectionWrapper background="beige" padding="large">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
                {careGuides[activeCategory].title}
              </h2>
            </div>

            <div className="space-y-12">
              {careGuides[activeCategory].guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="glass backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                      <h3 className="text-2xl font-bold text-forest-800 mb-4">
                        {guide.title}
                      </h3>
                      <p className="text-forest-600 mb-6 leading-relaxed">
                        {guide.content}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-forest-800 mb-3">Key Tips:</h4>
                        <ul className="space-y-2">
                          {guide.tips.map((tip) => (
                            <li key={tip} className="flex items-start text-forest-600">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>

      {/* Emergency Help Section */}
      <SectionWrapper background="primary" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            If your terrarium is in distress and you need expert advice, don&apos;t hesitate to reach out. Our team is here to help save your miniature ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1"
            >
              Emergency Care Support
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
              </svg>
            </Link>
            <Link
              href="/workshops"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-xl transition-all duration-300"
            >
              Book Care Workshop
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-primary-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Expert Diagnostics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Personalized Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Follow-up Support</span>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}