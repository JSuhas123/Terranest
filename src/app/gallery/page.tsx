'use client';

import BackgroundParticles from '@/components/ui/BackgroundParticles';
import { FloatingActionButton, ImageZoom } from '@/components/ui/InteractiveComponents';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Gallery Types
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  description: string;
  featured: boolean;
}

// Gallery Data
const galleryItems = [
  {
    id: 1,
    title: 'Desert Oasis Collection',
    category: 'collection',
    type: 'Desert',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    description: 'A stunning desert terrarium featuring succulents and decorative sand layers',
    featured: true
  },
  {
    id: 2,
    title: 'Tropical Paradise',
    category: 'collection',
    type: 'Tropical',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop',
    description: 'Lush tropical plants creating a miniature rainforest ecosystem',
    featured: true
  },
  {
    id: 3,
    title: 'Corporate Workshop Session',
    category: 'workshop',
    type: 'Corporate',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    description: 'Team building terrarium workshop at TechCorp headquarters',
    featured: false
  },
  {
    id: 4,
    title: 'Zen Garden Meditation',
    category: 'collection',
    type: 'Zen',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    description: 'Minimalist zen garden terrarium for meditation and mindfulness',
    featured: true
  },
  {
    id: 5,
    title: 'Family Workshop Fun',
    category: 'workshop',
    type: 'Family',
    image: 'https://images.unsplash.com/photo-1493930042121-52bca9e16ba8?w=800&h=600&fit=crop',
    description: 'Families creating their first terrariums together',
    featured: false
  },
  {
    id: 6,
    title: 'Moss Forest Ecosystem',
    category: 'collection',
    type: 'Forest',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    description: 'Delicate moss terrarium mimicking forest floor ecosystems',
    featured: true
  },
  {
    id: 7,
    title: 'Seasonal Spring Collection',
    category: 'collection',
    type: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
    description: 'Spring-themed terrarium with blooming plants and fresh greenery',
    featured: false
  },
  {
    id: 8,
    title: 'Advanced Ecosystem Design',
    category: 'workshop',
    type: 'Advanced',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    description: 'Advanced workshop participants creating complex multi-layer terrariums',
    featured: false
  },
  {
    id: 9,
    title: 'Aquatic Terrarium',
    category: 'collection',
    type: 'Aquatic',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    description: 'Unique aquatic terrarium featuring water-loving plants',
    featured: true
  },
  {
    id: 10,
    title: 'Miniature Landscape',
    category: 'collection',
    type: 'Landscape',
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&h=600&fit=crop',
    description: 'Detailed landscape terrarium with multiple plant species and decorative elements',
    featured: true
  },
  {
    id: 11,
    title: 'Beginner Workshop Success',
    category: 'workshop',
    type: 'Beginner',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3bf27?w=800&h=600&fit=crop',
    description: 'First-time terrarium creators showcasing their beautiful results',
    featured: false
  },
  {
    id: 12,
    title: 'Succulent Garden',
    category: 'collection',
    type: 'Desert',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop',
    description: 'Colorful succulent arrangement in geometric glass container',
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All', count: galleryItems.length },
  { id: 'featured', name: 'Featured', count: galleryItems.filter(item => item.featured).length },
  { id: 'collection', name: 'Collections', count: galleryItems.filter(item => item.category === 'collection').length },
  { id: 'workshop', name: 'Workshops', count: galleryItems.filter(item => item.category === 'workshop').length }
];

const types = [
  'Desert', 'Tropical', 'Zen', 'Forest', 'Seasonal', 'Aquatic', 'Landscape'
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'featured' && item.featured) ||
      item.category === selectedCategory;
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesCategory && matchesType;
  });

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      <BackgroundParticles count={40} />
      {/* Hero Section */}
      <SectionWrapper background="forest" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terrarium Gallery
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Explore our collection of beautiful terrariums and see the amazing creations from our workshops. Get inspired for your own miniature ecosystem.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-primary-100"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>200+ Unique Designs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Student Creations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Professional Collections</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Responsive Filter Section */}
      <SectionWrapper background="beige" padding="medium">
        <div className="space-y-6">
          {/* Category Filters */}
          <div>
            <h3 className="text-lg font-semibold text-forest-800 mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-premium'
                      : 'bg-white text-forest-600 hover:bg-primary-50 border border-forest-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-1 sm:ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Type Filters */}
          <div>
            <h3 className="text-lg font-semibold text-forest-800 mb-4">Filter by Type</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedType === 'all'
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-white text-forest-600 hover:bg-forest-50'
                }`}
              >
                All Types
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-white text-forest-600 hover:bg-forest-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Optimized Gallery Grid */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item)}
                onDoubleClick={() => setZoomImage({ src: item.image, alt: item.title })}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-forest-50 shadow-soft hover:shadow-premium transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 8 ? "eager" : "lazy"}
                    priority={index < 4}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjM2KsNeZvtcbstDAmhJYyeWLy3PaXDAmh//2Q=="
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between items-start">
                    {item.featured && (
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 sm:px-3 sm:py-1 text-xs font-semibold rounded-full ml-auto ${
                      item.category === 'collection' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>

                  {/* Optimized Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3 sm:p-4">
                    <div className="text-white w-full">
                      <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 truncate">{item.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{item.description}</p>
                      <div className="mt-2 inline-flex items-center text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-forest-800 mb-2">No items found</h3>
            <p className="text-forest-600">Try adjusting your filters to see more results.</p>
          </motion.div>
        )}
      </SectionWrapper>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedImage.category === 'collection' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedImage.type}
                    </span>
                    {selectedImage.featured && (
                      <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl font-bold text-forest-800 mb-4">
                    {selectedImage.title}
                  </h2>
                  
                  <p className="text-forest-600 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={closeLightbox}
                      className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      Get Similar Design
                    </button>
                    <button 
                      onClick={closeLightbox}
                      className="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      Join Workshop
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <SectionWrapper background="primary" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Create Your Own Masterpiece
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Inspired by what you&apos;ve seen? Join one of our workshops or order a custom terrarium to create your own beautiful ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1">
              Browse Collections
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-xl transition-all duration-300">
              Book Workshop
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011-1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <ImageZoom
          src={zoomImage.src}
          alt={zoomImage.alt}
          onClose={() => setZoomImage(null)}
        />
      )}

      {/* Floating Action Button */}
      <FloatingActionButton
        href="/collections"
        tooltip="View Collections"
        position="bottom-right"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        }
      />
    </div>
  );
}