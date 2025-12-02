'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  explore: [
    { name: 'Our Story', href: '/about' },
    { name: 'Terrarium Collections', href: '/collections' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Gallery', href: '/gallery' },
  ],
  support: [
    { name: 'Care Guide', href: '/care-guide' },
    { name: 'FAQ', href: '/contact' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Corporate Services', href: '/corporate' },
  ],
  connect: [
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-2xl font-bold text-white">Terranest</span>
              </Link>
              <p className="text-beige-200 mb-6 leading-relaxed">
                Creating premium terrarium experiences that bring nature tranquility 
                into modern spaces. Each piece is thoughtfully crafted for lasting beauty.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Pinterest', 'YouTube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-forest-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social}
                  >
                    <span className="text-sm font-medium">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-6 capitalize">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-beige-200 hover:text-primary-300 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-forest-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-beige-300 text-sm"
            >
              © 2024 Terranest. All rights reserved. Crafted with care for nature lovers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="#" className="text-beige-300 hover:text-primary-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-beige-300 hover:text-primary-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-beige-300 hover:text-primary-300 transition-colors">
                Care Guidelines
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}