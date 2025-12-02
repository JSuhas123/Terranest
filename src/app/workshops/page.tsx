'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Workshop Data
const workshops = [
  {
    title: "Beginner&apos;s Terrarium Workshop",
    description: "Perfect introduction to terrarium creation. Learn the basics of plant selection, soil layering, and care techniques.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    duration: "2 hours",
    level: "Beginner",
    includes: ["All materials", "Take home your creation", "Care guide", "Refreshments"]
  },
  {
    title: "Advanced Ecosystem Design",
    description: "Master complex terrarium systems with multiple plant layers and sophisticated drainage systems.",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    duration: "4 hours",
    level: "Advanced",
    includes: ["Premium materials", "Two terrariums", "Advanced care techniques", "Lunch included"]
  },
  {
    title: "Corporate Team Building",
    description: "Collaborative workshop designed for teams. Build connections while creating beautiful terrariums together.",
    price: "₹1,299 per person",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop",
    duration: "3 hours",
    level: "All levels",
    includes: ["Team activities", "Individual terrariums", "Group photos", "Certificate"]
  },
  {
    title: "Seasonal Terrarium Special",
    description: "Create themed terrariums that celebrate the current season with specially selected plants and decorations.",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=500&fit=crop",
    duration: "2.5 hours",
    level: "Intermediate",
    includes: ["Seasonal materials", "Themed decorations", "Care calendar", "Snacks"]
  },
  {
    title: "Kids & Family Workshop",
    description: "Fun-filled workshop designed for families. Children learn about nature while creating their own miniature worlds.",
    price: "₹999 per child",
    image: "https://images.unsplash.com/photo-1493930042121-52bca9e16ba8?w=500&h=500&fit=crop",
    duration: "1.5 hours",
    level: "Family-friendly",
    includes: ["Child-safe materials", "Parent participation", "Take-home kit", "Sticker rewards"]
  },
  {
    title: "Zen Garden Meditation",
    description: "Combine mindfulness meditation with terrarium creation for a deeply relaxing and therapeutic experience.",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop",
    duration: "3.5 hours",
    level: "All levels",
    includes: ["Meditation session", "Zen-style materials", "Mindfulness guide", "Tea ceremony"]
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "The advanced workshop was incredibly detailed. I learned techniques I never knew existed and created the most beautiful terrarium!",
    rating: 5
  },
  {
    name: "Arjun Patel",
    role: "Software Engineer",
    content: "Perfect team-building activity for our office. Everyone loved it and we still display our terrariums at work.",
    rating: 5
  },
  {
    name: "Meera Krishnan",
    role: "Teacher",
    content: "Brought my kids to the family workshop. They&apos;re still talking about it weeks later. Highly recommended!",
    rating: 5
  }
];

export default function WorkshopsPage() {
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
            Terrarium Creation Workshops
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Join our hands-on workshops and learn the art of creating self-sustaining ecosystems. From beginners to advanced enthusiasts, we have the perfect workshop for you.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-primary-100"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>150+ Happy Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>All Materials Included</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Workshop Cards */}
      <SectionWrapper background="beige" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-6">
            Choose Your Workshop Experience
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Each workshop is designed to provide a unique learning experience while you create beautiful terrariums to take home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
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
              className="glass backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-primary-200/50 transition-all duration-300"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <Image 
                  src={workshop.image} 
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {workshop.level}
                </span>
                <span className="text-forest-600 font-semibold">
                  {workshop.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold text-forest-800 mb-3">
                {workshop.title}
              </h3>
              
              <p className="text-forest-600 mb-4 leading-relaxed">
                {workshop.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-forest-800 mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {workshop.includes.map((item) => (
                    <li key={item} className="flex items-center text-forest-600">
                      <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary-600">
                  {workshop.price}
                </div>
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-6">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonials.indexOf(testimonial) * 0.2 }}
              className="glass backdrop-blur-sm p-6 rounded-2xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...new Array(testimonial.rating)].map((_, i) => (
                  <svg key={`star-${testimonial.name}-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-forest-600 mb-4 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <div className="font-semibold text-forest-800">{testimonial.name}</div>
                <div className="text-forest-500 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-forest-800 mb-4">
              Ready to Start Your Terrarium Journey?
            </h3>
            <p className="text-forest-600 mb-6">
              Book your workshop today and join our community of terrarium enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Workshop
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                View Student Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}