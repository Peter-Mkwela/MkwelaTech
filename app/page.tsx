// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import PortfolioSection from '@/components/Portfolio';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Database, Palette, Globe, Check, Phone, Mail, MapPin, HardDrive, Cpu, Zap, Award, DollarSign, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import TypingHeadline from '@/components/TypingHeadline';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#FFA500] text-[#000066] rounded-full shadow-lg hover:bg-orange-400 transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      {/* Home Section */}
      <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Enhanced Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-32 -left-32 w-80 h-80 bg-[#FFA500] rounded-full mix-blend-soft-light filter blur-[120px] opacity-40"
          />
          <motion.div
            animate={{ 
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#000066] rounded-full mix-blend-soft-light filter blur-[120px] opacity-40"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Unified Bouncing Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <TypingHeadline />
          </motion.div>

          {/* Enhanced Subtitle with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl sm:text-2xl text-[#FFE5B4] max-w-3xl mx-auto mb-8 font-light"
          >
            Digital Solutions,{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-semibold text-white"
            >
              Zero Complexity
            </motion.span>
          </motion.p>

          {/* Additional Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-[#FFE5B4]/80 mb-12 max-w-2xl mx-auto"
          >
            Professional IT Services • Web Development • Data Recovery • Graphics Design
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="btn-primary group text-lg px-8 py-4 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <Link href="/auth/login">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-[#FFA500] hover:text-white transition-colors font-semibold group px-6 py-3 rounded-lg glass hover:bg-white/20"
              >
                Client Login
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { number: "200+", label: "Projects" },
              { number: "99%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "5+", label: "Years" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#FFA500]">{stat.number}</div>
                <div className="text-[#FFE5B4]/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fixed Scroll Indicator - PERFECTLY CENTERED */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => scrollToSection('services')}
          >
            {/* Mouse outline */}
            <div className="w-8 h-12 border-2 border-[#FFA500] rounded-full flex justify-center items-start p-1 group hover:border-white transition-colors">
              <motion.div
                animate={{ y: [0, 12, 4] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1 h-3 bg-[#FFA500] rounded-full group-hover:bg-white transition-colors"
              />
            </div>
            
            {/* Text label */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center mt-2"
            >
              <p className="text-[#FFA500] text-xs group-hover:text-white transition-colors text-center">
                Scroll to explore
              </p>
              <ChevronDown className="w-4 h-4 text-[#FFA500] mt-1" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Professional websites and web applications' },
              { icon: Code, title: 'Software Development', desc: 'Custom software solutions' },
              { icon: Palette, title: 'Website Design', desc: 'Beautiful and responsive designs' },
              { icon: Sparkles, title: 'Graphics Design', desc: 'Logos, flyers, posters, calendars' },
              { icon: Cpu, title: 'OS Installations', desc: 'Windows 10, 11 professional installation' },
              { icon: HardDrive, title: 'Data Recovery', desc: 'HDD, SSD, USB data retrieval' },
              { icon: Zap, title: 'Software Troubleshooting', desc: 'Expert problem solving' },
              { icon: Cpu, title: 'Hardware Troubleshooting', desc: 'Hardware diagnostics and repair' },
              { icon: Database, title: 'Windows & Office Activation', desc: 'Professional activation services' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FFA500] rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                  <service.icon size={32} className="text-[#000066] group-hover:text-[#FFA500] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-[#FFE5B4]/80">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
              Experience the difference with our professional IT services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: 'Professional & Reliable', 
                desc: 'Expert service you can trust for all your IT needs',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: DollarSign, 
                title: 'Affordable Prices', 
                desc: 'Quality service at competitive prices that fit your budget',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: Clock, 
                title: 'Flexible Support', 
                desc: 'On-site and remote support options for your convenience',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-[#FFE5B4]/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Call Us Every Time You Need Help!
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a
                href="tel:+263782379164"
                className="flex items-center gap-3 bg-[#FFA500] text-[#000066] px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
              >
                <Phone size={20} />
                <span className="text-lg">+263 782 379 164</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
              Ready to simplify your IT? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#FFA500] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-[#000066]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+263782379164" className="text-[#FFE5B4] hover:text-white transition-colors">
                      +263 782 379 164
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-[#000066]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:mkwelait@gmail.com" className="text-[#FFE5B4] hover:text-white transition-colors">
                      mkwelait@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-[#000066]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-[#FFE5B4]">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#FFA500] mb-4">Service Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['On-Site Support', 'Remote Support', 'Web Development', 'Data Recovery', 'Graphics Design', 'Software Solutions'].map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <Check size={16} className="text-[#FFA500]" />
                      <span className="text-[#FFE5B4] text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
<ContactForm />

          </div>
        </div>
      </section>
            {/* Floating WhatsApp Icon - Matches Back to Top Style */}
      <motion.a
        href="https://wa.me/263710312818?text=Hi%20MkwelaTech%2C" // Change to your actual WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-400 transition-colors flex items-center justify-center"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke="none"
          className="w-6 h-6"
        >
          <path d="M12.04 2c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.47 1.35 4.99L2 22l5.26-1.38a9.93 9.93 0 0 0 4.78 1.22h.01c5.5 0 9.97-4.47 9.97-9.97S17.54 2 12.04 2zm0 18.24a8.24 8.24 0 0 1-4.2-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 1 1 6.99 3.87zM17 14.5c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.27-.74.91-.91 1.1-.17.18-.33.2-.61.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.27-.02-.42.12-.55.12-.12.28-.33.41-.49.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.18 0-.48.07-.74.34s-.97.95-.97 2.31.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.72 4.17.66.29 1.18.47 1.59.6.67.21 1.28.18 1.77.11.54-.08 1.66-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.52-.33z" />
        </svg>
      </motion.a>

    </div>
  );
}