// components/Footer.tsx
'use client';

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  FileText,
  Cookie
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} className="text-blue-400" />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <Twitter size={18} className="text-sky-400" />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram size={18} className="text-pink-400" />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={18} className="text-blue-300" />, url: 'https://linkedin.com' },
  ];

  const contactInfo = [
    {
      icon: <Phone size={16} className="text-[#FFA500]" />,
      content: <a href="tel:+263782379164" className="hover:text-white transition-colors text-sm">+263 782 379 164</a>,
      label: 'Phone'
    },
    {
      icon: <MapPin size={16} className="text-[#FFA500]" />,
      content: <span className="text-sm">Harare, Zimbabwe</span>,
      label: 'Address'
    },
    {
      icon: <Mail size={16} className="text-[#FFA500]" />,
      content: <a href="mailto:mkwelait@gmail.com" className="hover:text-white transition-colors text-sm">mkwelait@gmail.com</a>,
      label: 'Email'
    }
  ];

  const legalLinks = [
    { name: 'Terms of Service', icon: <FileText size={14} />, url: '/terms-of-service' },
    { name: 'Privacy Policy', icon: <Shield size={14} />, url: '/privacy-policy' },
    { name: 'Cookie Policy', icon: <Cookie size={14} />, url: '/cookie-policy' },
  ];

  return (
    <footer className="bg-transparent mt-auto">
      <div className="bg-gradient-to-t from-[#000066] via-[#000033] to-black pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Row: Logo + Social Links + Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6"
          >
            {/* Logo and Company Name - Top Left */}
            <Link href="#home" className="flex items-center gap-3 group flex-shrink-0">
              <motion.img
                src="/icon.png"
                alt="MkwelaTech Logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 object-contain"
              />
              <div className="text-left">
                <motion.p 
                  className="text-lg font-semibold text-white"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Mkwela<span className="text-[#FFA500]">Tech</span>
                </motion.p>
                <motion.p 
                  className="text-xs text-[#FFA500]/80 -mt-0.5"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                >
                  Digital Solutions
                </motion.p>
              </div>
            </Link>

            {/* Social Links - Next to Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFE5B4]/70 hover:text-white transition-all bg-white/5 p-2 rounded-lg backdrop-blur-sm shadow-sm"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 text-sm"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2 text-[#FFE5B4]/80 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/10 p-1.5 rounded-md shadow-sm group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="group-hover:text-white transition-colors whitespace-nowrap">
                    {item.content}
                  </div>
                  {/* Divider for desktop */}
                  {index < contactInfo.length - 1 && (
                    <div className="hidden sm:block w-px h-4 bg-[#FFA500]/30 mx-1" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Second Row: Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs border-t border-[#FFA500]/20 pt-4"
          >
            {legalLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 text-[#FFE5B4]/60 hover:text-[#FFA500] transition-all bg-white/5 px-3 py-2 rounded-lg backdrop-blur-sm hover:bg-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-[#FFE5B4]/80 text-xs tracking-wide mt-4 pt-4 border-t border-[#FFA500]/20"
          >
            <p>© {currentYear} MkwelaTech. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}