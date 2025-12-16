import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/fdd0351693d8a42f950a88db239661ab5c4410dc.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ZaPixel Logo" className="w-10 h-10 rounded-2xl bg-white p-1" />
          <span className="text-xl">ZaPixel</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#categories" className="text-sm text-gray-400 hover:text-white transition-colors">
            Categories
          </a>
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        <a
          href="#download"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:from-purple-500 hover:to-pink-400 transition-all"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">Download</span>
        </a>
      </div>
    </motion.nav>
  );
}
