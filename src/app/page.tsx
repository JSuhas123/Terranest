'use client';

import BackgroundParticles from '@/components/ui/BackgroundParticles';
import { CollectionCard } from '@/components/ui/Card';
import ImageGrid from '@/components/ui/ImageGrid';
import { FloatingActionButton } from '@/components/ui/InteractiveComponents';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Featured Collections Data
const featuredCollections = [
  {
    title: "Desert Oasis",
    description: "Minimalist succulents and cacti in geometric glass containers, perfect for modern spaces.",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    href: "/collections",
    badge: "Bestseller"
  },
  {
    title: "Tropical Forest",
    description: "Lush ferns and tropical plants creating a miniature rainforest ecosystem.",
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    href: "/collections",
  },
  {
    title: "Zen Garden",
    description: "Serene moss gardens with carefully placed stones for meditation and calm.",
    price: "₹3,799",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop",
    href: "/collections",
    badge: "New"
  },
  {
    title: "Aquatic Wonder",
    description: "Water-loving plants in closed ecosystems that maintain their own humidity.",
    price: "₹5,299",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    href: "/collections",
  },
  {
    title: "Seasonal Bloom",
    description: "Rotating seasonal collections featuring flowering plants and seasonal foliage.",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=500&fit=crop",
    href: "/collections",
  },
  {
    title: "Corporate Elite",
    description: "Professional-grade terrariums designed for office spaces and corporate gifts.",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1493930042121-52bca9e16ba8?w=500&h=500&fit=crop",
    href: "/collections",
    badge: "Premium"
  }
];

// Why Terrariums Data
const benefits = [
  {
    icon: "🌱",
    title: "Low Maintenance",
    description: "Self-sustaining ecosystems that require minimal care while providing maximum beauty."
  },
  {
    icon: "🏡",
    title: "Natural Décor",
    description: "Living art pieces that seamlessly blend with any interior design aesthetic."
  },
  {
    icon: "♻️",
    title: "Sustainable Ecosystem",
    description: "Eco-friendly closed-loop systems that demonstrate nature's perfect balance."
  },
  {
    icon: "🧘",
    title: "Stress Relief & Mindfulness",
    description: "Proven to reduce stress and promote mindful living through nature connection."
  }
];

// Gallery Images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=600&fit=crop",
    alt: "Desert terrarium collection",
    caption: "Minimalist desert beauty"
  },
  {
    src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
    alt: "Tropical forest terrarium",
    caption: "Lush tropical ecosystem"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
    alt: "Zen garden terrarium",
    caption: "Peaceful zen garden"
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    alt: "Workshop creation process",
    caption: "Crafting moments"
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=350&fit=crop",
    alt: "Seasonal terrarium",
    caption: "Seasonal collections"
  },
  {
    src: "https://images.unsplash.com/photo-1493930042121-52bca9e16ba8?w=400&h=450&fit=crop",
    alt: "Corporate terrarium setup",
    caption: "Corporate wellness"
  }
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-900/70 via-forest-800/60 to-primary-900/50" />
        </motion.div>

        {/* Background Particles */}
        <BackgroundParticles count={12} className="z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Tagline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Miniature Worlds,{' '}
              <span className="bg-gradient-to-r from-primary-300 to-beige-300 bg-clip-text text-transparent">
                Crafted With Care
              </span>
            </motion.h1>

            {/* Sub Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-beige-100 max-w-4xl mx-auto leading-relaxed"
            >
              Handmade plant ecosystems designed to breathe life into your space.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/collections"
                  className="inline-flex items-center px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-2xl shadow-premium transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Terrariums
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/workshops"
                  className="inline-flex items-center px-10 py-4 glass backdrop-blur-md border border-white/30 hover:border-primary-300/60 text-white font-semibold rounded-2xl transition-all duration-300"
                >
                  View Workshops
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collections Section */}
      <SectionWrapper background="beige" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-forest-800 mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated selection of premium terrarium ecosystems, each thoughtfully designed to bring nature tranquility into your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <CollectionCard {...collection} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/collections"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            View All Collections
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Why Terrariums Section */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-forest-800 mb-6">
            Why Choose Terrariums?
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            More than just decoration, our terrariums offer a gateway to wellness, sustainability, and natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center glass backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-primary-200/50 transition-all duration-300"
            >
              <motion.div 
                className="text-6xl mb-6"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-forest-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-forest-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Workshops Teaser Section */}
      <SectionWrapper background="forest" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Learn the Art of
              <span className="block bg-gradient-to-r from-primary-300 to-beige-300 bg-clip-text text-transparent">
                Terrarium Creation
              </span>
            </h2>
            <p className="text-xl text-beige-200 mb-8 leading-relaxed">
              Join our expert-led workshops where you learn the ancient art of creating self-sustaining ecosystems. 
              From selecting the perfect plants to understanding the delicate balance of moisture and light, 
              discover the meditative practice of terrarium crafting.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Hands-on guidance from botanical experts",
                "All materials and tools provided",
                "Take home your custom creation",
                "Learn ongoing care techniques"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-beige-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/workshops"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium transition-all duration-300"
              >
                Book Your Workshop
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div 
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-full h-full bg-gradient-forest bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=750&fit=crop)' }}
                />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 glass backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-beige-200 text-sm">Happy Students</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Gallery Preview Section */}
      <SectionWrapper background="beige" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-forest-800 mb-6">
            Gallery of Living Art
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our collection of handcrafted terrariums and get inspired by the endless possibilities of miniature ecosystems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ImageGrid images={galleryImages} columns={3} className="mb-12" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-4 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-xl shadow-premium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            Explore Full Gallery
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Footer Call to Action */}
      <SectionWrapper background="primary" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #d1fae5, #ffffff)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Bring Home a Living Work of Art
          </motion.h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Transform your space with nature perfect balance. Each terrarium is a unique masterpiece waiting to flourish in your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/collections"
                className="inline-flex items-center px-10 py-4 bg-white text-primary-600 hover:text-primary-500 font-semibold rounded-xl shadow-premium hover:shadow-xl transition-all duration-300"
              >
                Shop Collections
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/workshops"
                className="inline-flex items-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-xl transition-all duration-300"
              >
                Learn to Create
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Floating Action Button for Quick Contact */}
      <FloatingActionButton
        href="/contact"
        tooltip="Get a Quote"
        position="bottom-right"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        }
      />
    </>
  );
}
