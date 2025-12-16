import React from 'react';
import { Apple, Download } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/fdd0351693d8a42f950a88db239661ab5c4410dc.png';
import discoverImage from '@/assets/discover.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-full"
            >
              <span className="text-sm text-purple-400">Premium Quality • 4K Resolution</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl">
              4K Wallpapers.
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Curated.
              </span>
              <br />
              Perfected.
            </h1>

            <p className="text-xl text-gray-400 max-w-xl">
              Ultra-HD, hand-picked wallpapers for modern devices. Experience pixel-perfect clarity on every screen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://apps.apple.com/us/app/zapixel-ai-4k-wallpapers/id6742073049"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl hover:bg-gray-100 transition-all"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-sm">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.zaplatform.zapixel"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 rounded-2xl hover:from-purple-500 hover:via-pink-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-500/25"
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Get it on</div>
                <div className="text-sm">Google Play</div>
              </div>
            </a>
          </div>

          <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors underline underline-offset-4">
            Explore Wallpapers →
          </button>
        </motion.div>

        {/* Right content - Device mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Screen content */}
              <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                <img
                  src={discoverImage}
                  alt="4K Wallpaper Preview"
                  className="w-full h-full object-cover"
                />
                
                {/* App UI overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 rounded-[3rem] blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
