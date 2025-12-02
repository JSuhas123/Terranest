'use client';

import BackgroundParticles from '@/components/ui/BackgroundParticles';
import { FloatingActionButton, NotificationToast } from '@/components/ui/InteractiveComponents';
import { LoadingSpinner } from '@/components/ui/LoadingAnimations';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Contact Form Data
const inquiryTypes = [
  'General Inquiry',
  'Workshop Booking',
  'Corporate Services',
  'Custom Orders',
  'Care Support',
  'Wholesale/Partnerships'
];

const locations = [
  {
    id: 'mumbai',
    name: 'Mumbai Studio',
    address: '123 Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 98765 43210',
    email: 'mumbai@terranest.com',
    hours: {
      weekdays: '10:00 AM - 7:00 PM',
      saturday: '10:00 AM - 6:00 PM',
      sunday: '12:00 PM - 5:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 'bangalore',
    name: 'Bangalore Workshop',
    address: '456 Koramangala, Bangalore, Karnataka 560034',
    phone: '+91 98765 43211',
    email: 'bangalore@terranest.com',
    hours: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: '11:00 AM - 4:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 'delhi',
    name: 'Delhi Showroom',
    address: '789 Khan Market, New Delhi, Delhi 110003',
    phone: '+91 98765 43212',
    email: 'delhi@terranest.com',
    hours: {
      weekdays: '10:00 AM - 8:00 PM',
      saturday: '10:00 AM - 8:00 PM',
      sunday: '12:00 PM - 6:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    featured: false
  }
];

const faqs = [
  {
    question: 'How long do terrariums last?',
    answer: 'With proper care, closed terrariums can last for years or even decades. They&apos;re self-sustaining ecosystems that require minimal maintenance once established.'
  },
  {
    question: 'Do you offer delivery across India?',
    answer: 'Yes, we deliver nationwide. Delivery times vary by location, typically 3-7 business days for major cities and 5-10 days for remote areas.'
  },
  {
    question: 'Can I customize my terrarium design?',
    answer: 'Absolutely! We offer custom design services. Contact us with your preferences for container style, plant types, and decorative elements.'
  },
  {
    question: 'What if my terrarium develops problems?',
    answer: 'We provide comprehensive care support. Contact us with photos and description of the issue, and our experts will guide you through solutions.'
  },
  {
    question: 'Are workshops suitable for complete beginners?',
    answer: 'Yes! Our beginner workshops are designed for those with no prior experience. We provide all materials and step-by-step guidance.'
  },
  {
    question: 'Do you offer corporate team building workshops?',
    answer: 'Yes, we specialize in corporate workshops. We can accommodate groups of various sizes and customize the experience for your team.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    preferredLocation: '',
    preferredDate: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error' | 'info'>('info');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setNotificationMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
      setNotificationType('success');
      setShowNotification(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        preferredLocation: '',
        preferredDate: ''
      });
    } catch {
      setNotificationMessage('Sorry, there was an error submitting your form. Please try again.');
      setNotificationType('error');
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="pt-20">
      <BackgroundParticles count={25} />
      {/* Hero Section */}
      <SectionWrapper background="forest" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Ready to start your terrarium journey? Have questions about care, workshops, or custom designs? We&apos;re here to help bring your green vision to life.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-primary-100"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>Expert Support Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>24-Hour Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
              <span>3 Convenient Locations</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper background="beige" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h2 className="text-2xl font-bold text-forest-800 mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-forest-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-primary-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us more about your requirements, questions, or how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'bg-primary-400 cursor-not-allowed' 
                    : 'bg-primary-600 hover:bg-primary-500'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="small" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-forest-800 mb-4">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-forest-800">Email Us</div>
                    <div className="text-forest-600">info@terranest.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-forest-800">Call Us</div>
                    <div className="text-forest-600">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-forest-800">Response Time</div>
                    <div className="text-forest-600">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-forest-800">Visit Us</div>
                    <div className="text-forest-600">3 locations across India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-forest-800 mb-4">Follow Us</h3>
              
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165C4.575 16.294 3.6 14.24 3.6 11.769c0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378 0 0-.598 2.284-.744 2.840-.269 1.040-1.03 2.467-1.518 3.312C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.012 11.987z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.02 2.091c-2.719 0-3.064.012-4.137.06-1.071.049-1.805.218-2.446.465-.66.256-1.17.598-1.707 1.134-.537.537-.878 1.047-1.134 1.707-.247.641-.416 1.375-.465 2.446-.048 1.073-.06 1.418-.06 4.137 0 2.719.012 3.064.06 4.137.049 1.071.218 1.805.465 2.446.256.66.598 1.17 1.134 1.707.537.537 1.047.878 1.707 1.134.641.247 1.375.416 2.446.465 1.073.048 1.418.06 4.137.06 2.719 0 3.064-.012 4.137-.06 1.071-.049 1.805-.218 2.446-.465.66-.256 1.17-.598 1.707-1.134.537-.537.878-1.047 1.134-1.707.247-.641.416-1.375.465-2.446.048-1.073.06-1.418.06-4.137 0-2.719-.012-3.064-.06-4.137-.049-1.071-.218-1.805-.465-2.446-.256-.66-.598-1.17-1.134-1.707-.537-.537-1.047-.878-1.707-1.134-.641-.247-1.375-.416-2.446-.465-1.073-.048-1.418-.06-4.137-.06zm0 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.764-.684a1.255 1.255 0 11-2.51 0 1.255 1.255 0 012.51 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Location Cards */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-6">
            Visit Our Studios
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Experience terrariums in person at our beautiful studio locations across India. Each offers workshops, displays, and expert guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`glass backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 ${
                location.featured 
                  ? 'border-primary-200/50 bg-primary-50/30' 
                  : 'border-white/20'
              }`}
            >
              {location.featured && (
                <div className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full mb-4">
                  Featured Location
                </div>
              )}

              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <Image 
                  src={location.image} 
                  alt={location.name}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-forest-800 mb-3">
                {location.name}
              </h3>
              
              <div className="space-y-3 text-forest-600">
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{location.address}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">{location.phone}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">{location.email}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-forest-200">
                <h4 className="font-semibold text-forest-800 mb-2">Operating Hours</h4>
                <div className="text-sm text-forest-600 space-y-1">
                  <div>Mon-Fri: {location.hours.weekdays}</div>
                  <div>Saturday: {location.hours.saturday}</div>
                  <div>Sunday: {location.hours.sunday}</div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 text-sm">
                  Get Directions
                </button>
                <button className="flex-1 px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm">
                  Visit Store
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper background="forest" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Find answers to common questions about terrariums, workshops, and our services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-300 transition-transform duration-200 flex-shrink-0 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-primary-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-primary-100 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1">
            Contact Our Support Team
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </motion.div>
      </SectionWrapper>

      {/* Notification Toast */}
      {showNotification && (
        <NotificationToast
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Floating Action Button */}
      <FloatingActionButton
        href="tel:+919876543210"
        tooltip="Call Us"
        position="bottom-right"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        }
      />
    </div>
  );
}