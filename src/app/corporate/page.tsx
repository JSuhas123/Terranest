'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Corporate Services Data
const corporateServices = [
  {
    title: "Office Wellness Programs",
    description: "Transform your workplace with biophilic design elements that improve employee wellbeing and productivity.",
    features: [
      "Custom terrarium installations",
      "Employee wellness workshops",
      "Ongoing maintenance service",
      "Monthly plant care training"
    ],
    price: "Starting from ₹25,000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
    benefit: "Reduces stress by 37%"
  },
  {
    title: "Team Building Packages",
    description: "Strengthen team bonds through collaborative terrarium creation workshops designed for corporate groups.",
    features: [
      "Collaborative terrarium projects",
      "Leadership building activities",
      "Customizable group sizes",
      "Professional facilitation"
    ],
    price: "₹1,799 per participant",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    benefit: "Improves team cohesion by 45%"
  },
  {
    title: "Corporate Gifting Solutions",
    description: "Impress clients and employees with premium terrarium gifts that represent your brand&apos;s commitment to sustainability.",
    features: [
      "Branded terrarium designs",
      "Bulk order discounts",
      "Custom packaging options",
      "Delivery coordination"
    ],
    price: "₹899 - ₹4,999 per unit",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop",
    benefit: "98% client satisfaction"
  },
  {
    title: "Office Space Design",
    description: "Complete biophilic office transformation with strategic terrarium placement and green space optimization.",
    features: [
      "Space assessment and design",
      "Large-scale installations",
      "Maintenance planning",
      "Employee training programs"
    ],
    price: "Custom quote based on space",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500&h=400&fit=crop",
    benefit: "Increases productivity by 15%"
  },
  {
    title: "Event & Exhibition Services",
    description: "Create stunning terrarium displays for corporate events, trade shows, and product launches.",
    features: [
      "Custom event installations",
      "Interactive demonstration stations",
      "Professional setup and breakdown",
      "Branded materials and signage"
    ],
    price: "Starting from ₹15,000",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=500&h=400&fit=crop",
    benefit: "Attracts 3x more visitors"
  },
  {
    title: "Sustainability Consulting",
    description: "Partner with us to develop comprehensive sustainability initiatives using terrariums as the centerpiece.",
    features: [
      "Sustainability strategy development",
      "Carbon footprint reduction planning",
      "Employee engagement programs",
      "Progress tracking and reporting"
    ],
    price: "₹50,000 - ₹2,00,000",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=400&fit=crop",
    benefit: "Reduces carbon footprint by 25%"
  }
];

const clientLogos = [
  { name: "TechCorp", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=TechCorp" },
  { name: "GreenSpace", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=GreenSpace" },
  { name: "EcoSolutions", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=EcoSolutions" },
  { name: "InnovateLab", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=InnovateLab" },
  { name: "BioPharma", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=BioPharma" },
  { name: "FutureWork", logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=FutureWork" }
];

const testimonials = [
  {
    quote: "Terranest transformed our office environment. Employee satisfaction has increased significantly since we introduced their wellness program.",
    author: "Rajesh Kumar",
    role: "HR Director, TechCorp India",
    company: "TechCorp"
  },
  {
    quote: "The team building workshop was exceptional. Our teams are more collaborative and creative than ever before.",
    author: "Priya Mehta", 
    role: "Operations Manager, GreenSpace Solutions",
    company: "GreenSpace"
  },
  {
    quote: "Outstanding corporate gifting solution. Our clients were impressed with the thoughtful and sustainable approach.",
    author: "Arjun Shah",
    role: "Business Development Head, EcoSolutions",
    company: "EcoSolutions"
  }
];

export default function CorporatePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SectionWrapper background="forest" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Corporate Wellness &amp; Sustainability Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed">
              Partner with Terranest to create healthier, more productive work environments through biophilic design and team-building experiences.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span className="text-primary-100">Proven ROI on employee wellness</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span className="text-primary-100">Custom solutions for any space</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span className="text-primary-100">Ongoing support and maintenance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1">
                Get Custom Quote
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-xl transition-all duration-300 text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                alt="Corporate office with terrariums"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-primary-100">Happy Corporate Clients</div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Corporate Services */}
      <SectionWrapper background="beige" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-6">
            Comprehensive Corporate Solutions
          </h2>
          <p className="text-xl text-forest-600 max-w-4xl mx-auto">
            From individual team building sessions to complete office transformations, we have solutions tailored for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service, index) => (
            <motion.div
              key={service.title}
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
                  src={service.image} 
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                {service.benefit}
              </div>

              <h3 className="text-xl font-bold text-forest-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-forest-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-forest-800 mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-forest-600">
                      <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-primary-600">
                  {service.price}
                </div>
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Client Logos */}
      <SectionWrapper background="white" padding="medium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-forest-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-forest-600">
            Join hundreds of companies creating healthier workplaces
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="forest" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            What Our Corporate Partners Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonials.indexOf(testimonial) * 0.2 }}
              className="glass backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-white"
            >
              <svg className="w-8 h-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              
              <p className="text-lg mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-primary-100 text-sm">{testimonial.role}</div>
                <div className="text-primary-200 text-xs">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="beige" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass backdrop-blur-md p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-6">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-xl text-forest-600 mb-8 leading-relaxed">
              Let&apos;s discuss how Terranest can create a healthier, more productive environment for your team. Get a custom proposal tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-premium transition-all duration-300 transform hover:-translate-y-1">
                Request Custom Proposal
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                </svg>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-forest-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Site Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom Design Proposal</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ROI Analysis</span>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}