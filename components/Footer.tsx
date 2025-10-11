// components/Footer.tsx
'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-transparent mt-auto">
      {/* Gradient overlay */}
      <div className="bg-gradient-to-t from-[#000066] via-[#000033] to-black pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-[#FFA500]/70 text-sm font-light">
                Digital Solutions, Zero Complexity
              </p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFE5B4]/60 hover:text-[#FFA500] transition-colors"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#FFE5B4]/80">
                
                {/* Phone */}
                <motion.div className="flex items-center gap-2 group" whileHover={{ scale: 1.05 }}>
                  <Phone size={12} className="text-[#FFA500] group-hover:text-white transition-colors" />
                  <a href="tel:+263782379164" className="hover:text-white transition-colors">
                    +263 782 379 164
                  </a>
                </motion.div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-4 bg-[#FFA500]/40"></div>

                {/* Address */}
                <motion.div className="flex items-center gap-2 group" whileHover={{ scale: 1.05 }}>
                  <MapPin size={12} className="text-[#FFA500] group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Harare, Zimbabwe</span>
                </motion.div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-4 bg-[#FFA500]/40"></div>

                {/* Email */}
                <motion.div className="flex items-center gap-2 group" whileHover={{ scale: 1.05 }}>
                  <Mail size={12} className="text-[#FFA500] group-hover:text-white transition-colors" />
                  <a href="mailto:mkwelait@gmail.com" className="hover:text-white transition-colors">
                    mkwelait@gmail.com
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 pt-6 border-t border-[#FFA500]/20"
          >
            <p className="text-[#FFE5B4]/80 text-xs text-center">
              © {currentYear} MkwelaTech All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
