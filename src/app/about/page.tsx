'use client';

import BackgroundParticles from '@/components/ui/BackgroundParticles';
import Hero from '@/components/ui/Hero';
import { FloatingActionButton } from '@/components/ui/InteractiveComponents';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <BackgroundParticles count={20} />
      {/* Hero Section */}
      <Hero
        subtitle="Our Story"
        title="Growing Dreams, One Terrarium at a Time"
        description="Founded in 2020 by passionate plant enthusiasts, Terranest began as a small studio with a big vision: to bring the healing power of nature into every modern space through beautifully crafted terrariums."
        primaryCTA={{
          text: "Our Collections",
          href: "/collections"
        }}
        secondaryCTA={{
          text: "Join Workshop",
          href: "/workshops"
        }}
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop"
        className="pt-20"
      />

      {/* Our Mission */}
      <SectionWrapper background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-forest-800 mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-forest-600 leading-relaxed mb-12"
          >
            We believe that everyone deserves a piece of nature in their daily life. Our carefully curated terrariums are more than decorative pieces—they're miniature ecosystems that foster mindfulness, reduce stress, and connect you to the natural world, even in the busiest urban environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {[
            {
              title: "Sustainability",
              description: "Every terrarium is crafted with eco-friendly materials and sustainable practices, ensuring minimal environmental impact.",
              icon: "🌱"
            },
            {
              title: "Quality",
              description: "Hand-selected plants and premium materials ensure each terrarium is built to thrive and bring lasting beauty.",
              icon: "✨"
            },
            {
              title: "Education",
              description: "We empower our customers with knowledge through workshops, care guides, and ongoing support for terrarium success.",
              icon: "📚"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-forest-800 mb-4">{value.title}</h3>
              <p className="text-forest-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Journey */}
      <SectionWrapper background="beige" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-8">
              The Journey Begins
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-forest-800 mb-2">2020 - The Seed</h4>
                  <p className="text-forest-600">Started in a small Mumbai apartment with just a passion for plants and design.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-forest-800 mb-2">2021 - First Workshop</h4>
                  <p className="text-forest-600">Hosted our first terrarium workshop, inspiring 20 participants to create their own green spaces.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-forest-800 mb-2">2023 - Going Digital</h4>
                  <p className="text-forest-600">Launched our online platform, making terrariums accessible across India.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-forest-800 mb-2">2024 - Corporate Wellness</h4>
                  <p className="text-forest-600">Expanded to corporate partnerships, bringing nature to office spaces nationwide.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
              <div 
                className="w-full h-full bg-gradient-forest bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop)' }}
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Passionate plant enthusiasts and design experts working together to bring you the finest terrarium experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "Ananya Kulkarni",
              role: "Founder & Creative Director",
              bio: "Botanical artist with 8 years of experience in landscape design and sustainable gardening.",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face"
            },
            {
              name: "Ravi Mehta", 
              role: "Head of Workshops",
              bio: "Former botanist turned educator, passionate about sharing the joy of plant care with everyone.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
              name: "Priya Singh",
              role: "Corporate Relations",
              bio: "Wellness consultant helping businesses integrate biophilic design into their work environments.",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-48 h-48 mx-auto rounded-full bg-gradient-primary bg-cover bg-center mb-6"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <h3 className="text-xl font-semibold text-forest-800 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{member.role}</p>
              <p className="text-forest-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="primary" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Become part of a community that values sustainability, mindfulness, and the simple joy of nurturing life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/workshops"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:text-primary-500 font-semibold rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Workshop
            </a>
            <a
              href="/collections"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Collections
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Floating Action Button */}
      <FloatingActionButton
        href="/workshops"
        tooltip="Book Workshop"
        position="bottom-right"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
          </svg>
        }
      />
    </>
  );
}