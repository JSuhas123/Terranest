'use client';

import BackgroundParticles from '@/components/ui/BackgroundParticles';
import { CollectionCard } from '@/components/ui/Card';
import { FloatingActionButton, NotificationToast } from '@/components/ui/InteractiveComponents';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// All Collections Data
const allCollections = [
  {
    title: "Desert Oasis",
    description: "Minimalist succulents and cacti in geometric glass containers, perfect for modern spaces.",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    href: "/collections/desert-oasis",
    badge: "Bestseller",
    category: "Desert"
  },
  {
    title: "Tropical Forest",
    description: "Lush ferns and tropical plants creating a miniature rainforest ecosystem.",
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    href: "/collections/tropical-forest",
    category: "Tropical"
  },
  {
    title: "Zen Garden",
    description: "Serene moss gardens with carefully placed stones for meditation and calm.",
    price: "₹3,799",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop",
    href: "/collections/zen-garden",
    badge: "New",
    category: "Zen"
  },
  {
    title: "Aquatic Wonder",
    description: "Water-loving plants in closed ecosystems that maintain their own humidity.",
    price: "₹5,299",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    href: "/collections/aquatic-wonder",
    category: "Aquatic"
  },
  {
    title: "Seasonal Bloom",
    description: "Rotating seasonal collections featuring flowering plants and seasonal foliage.",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=500&fit=crop",
    href: "/collections/seasonal-bloom",
    category: "Seasonal"
  },
  {
    title: "Corporate Elite",
    description: "Professional-grade terrariums designed for office spaces and corporate gifts.",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1493930042121-52bca9e16ba8?w=500&h=500&fit=crop",
    href: "/collections/corporate-elite",
    badge: "Premium",
    category: "Corporate"
  },
  {
    title: "Micro Paradise",
    description: "Compact terrariums perfect for small spaces without compromising on beauty.",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop",
    href: "/collections/micro-paradise",
    category: "Compact"
  },
  {
    title: "Forest Canopy",
    description: "Multi-level arrangements mimicking the layers of a natural forest ecosystem.",
    price: "₹7,299",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=500&fit=crop",
    href: "/collections/forest-canopy",
    badge: "Limited Edition",
    category: "Forest"
  },
  {
    title: "Moonlight Garden",
    description: "Ethereal arrangements with silver-leafed plants for sophisticated interiors.",
    price: "₹5,799",
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=500&h=500&fit=crop",
    href: "/collections/moonlight-garden",
    category: "Luxury"
  }
];

const categories = ["All", "Desert", "Tropical", "Zen", "Aquatic", "Seasonal", "Corporate", "Compact", "Forest", "Luxury"];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showNotification, setShowNotification] = useState(false);
  const [filteredCollections, setFilteredCollections] = useState(allCollections);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredCollections(allCollections);
    } else {
      setFilteredCollections(allCollections.filter(item => item.category === category));
    }
    
    // Show notification
    setShowNotification(true);
  };

  return (
    <div className="pt-20">
      <BackgroundParticles count={30} />
      {/* Hero Section */}
      <SectionWrapper background="forest" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Terrarium Collections
          </h1>
          <p className="text-xl lg:text-2xl text-beige-100 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of handcrafted terrariums, each one a unique ecosystem designed to bring nature&apos;s tranquility into your space.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Collections Grid */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 text-center mb-8">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-3 rounded-full border border-primary-300 text-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold ${
                  selectedCategory === category ? 'bg-primary-600 text-white' : ''
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <CollectionCard {...collection} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-forest-800 mb-4">
              Can Find What Youre Looking For?
            </h3>
            <p className="text-forest-600 mb-6">
              We create custom terrariums tailored to your specific needs and space requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1"
            >
              Request Custom Design
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Notification Toast */}
      {showNotification && (
        <NotificationToast
          message={`Showing ${selectedCategory === 'All' ? 'all' : selectedCategory.toLowerCase()} collections`}
          type="info"
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Floating Action Button */}
      <FloatingActionButton
        href="/workshops"
        tooltip="Book Workshop"
        position="bottom-right"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        }
      />
    </div>
  );
}