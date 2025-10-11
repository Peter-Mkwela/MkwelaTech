// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if current path is home page
    setIsHomePage(pathname === '/');
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  // Admin login component with conditional behavior
  const AdminLoginButton = ({ isMobile = false }: { isMobile?: boolean }) => {
    const baseClasses = isMobile 
      ? "inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
      : "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] text-white rounded-lg font-semibold transition-all duration-200 shadow-lg border border-orange-400/30";
    
    const hoverClasses = isHomePage 
      ? "hover:from-[#FF8C00] hover:to-[#FF7700] cursor-pointer"
      : "cursor-not-allowed";
    
    const opacityClass = isHomePage ? "opacity-100" : "opacity-60";

    if (isHomePage) {
      return (
        <Link
          href="/admin/login"
          onClick={() => setIsMenuOpen(false)}
          className={`${baseClasses} ${hoverClasses} ${opacityClass}`}
          aria-label="Admin Login"
        >
          {isMobile ? (
            <>
              <User size={18} />
              <span>Admin Login</span>
            </>
          ) : (
            <User size={20} />
          )}
        </Link>
      );
    } else {
      return (
        <button
          disabled
          className={`${baseClasses} ${opacityClass} cursor-not-allowed`}
          aria-label="Admin Login available only on home page"
          title="Admin Login available only on home page"
        >
          {isMobile ? (
            <>
              <User size={18} />
              <span>Admin Login</span>
            </>
          ) : (
            <User size={20} />
          )}
        </button>
      );
    }
  };

  // Navigation link component with conditional behavior
  const NavLink = ({ 
    href, 
    label, 
    index, 
    isMobile = false 
  }: { 
    href: string; 
    label: string; 
    index: number; 
    isMobile?: boolean 
  }) => {
    const isHomeLink = href === '/';
    const baseClasses = isMobile
      ? "block py-3 text-[#FFE5B4]/90 transition-colors font-medium border-b border-[#FFA500]/10"
      : "text-[#FFE5B4]/90 transition-colors font-medium relative group";
    
    const enabledClasses = isMobile
      ? "hover:text-white cursor-pointer"
      : "hover:text-white cursor-pointer";
    
    const disabledClasses = "opacity-50 cursor-not-allowed";
    
    // ALL links are enabled on home page, only Home link is enabled on other pages
    const isEnabled = isHomePage || isHomeLink;
    const linkClasses = `${baseClasses} ${isEnabled ? enabledClasses : disabledClasses}`;

    if (isEnabled) {
      if (isMobile) {
        return (
          <motion.a
            key={href}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className={linkClasses}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {label}
          </motion.a>
        );
      } else {
        return (
          <motion.a
            key={href}
            href={href}
            className={linkClasses}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500] transition-all group-hover:w-full"></span>
          </motion.a>
        );
      }
    } else {
      if (isMobile) {
        return (
          <motion.span
            key={href}
            className={linkClasses}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            title="Available only on home page"
          >
            {label}
          </motion.span>
        );
      } else {
        return (
          <motion.span
            key={href}
            className={linkClasses}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            title="Available only on home page"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500]/30 transition-all"></span>
          </motion.span>
        );
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
      {/* Gradient overlay to match your layout */}
      <div className="bg-gradient-to-b from-[#000066] via-[#000033] to-transparent pb-1">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.img
              src="/icon.png"
              alt="MkwelaTech IT Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 object-contain"
            />
<div>
  <motion.div 
    className="text-lg font-semibold"
    whileHover={{ x: 3 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    Mkwela<span className="text-[#FFA500]">Tech</span>  
  </motion.div>
  <motion.div 
    className="text-xs text-[#FFA500]/80 -mt-0.5"
    whileHover={{ x: 2 }}
    transition={{ type: "spring", stiffness: 500, damping: 10 }}
  >
    Digital Solutions
  </motion.div>
</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                index={index}
              />
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Desktop Admin Login */}
            <motion.div
              whileHover={isHomePage ? { scale: 1.1 } : {}}
              whileTap={isHomePage ? { scale: 0.9 } : {}}
              className="hidden md:block"
            >
              <AdminLoginButton />
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] text-white rounded-lg font-semibold hover:from-[#FF8C00] hover:to-[#FF7700] transition-all duration-200 shadow-lg border border-orange-400/30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-b from-[#000066] to-[#000033] border-t border-[#FFA500]/20"
            >
              <div className="px-6 py-4">
                {/* Navigation Links */}
                <nav className="space-y-3 mb-6">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      index={index}
                      isMobile={true}
                    />
                  ))}
                </nav>

                {/* Admin Login for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center"
                >
                  <AdminLoginButton isMobile={true} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}