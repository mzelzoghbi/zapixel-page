import React from 'react';
import { Apple, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section id="download" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-pink-950/20 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-yellow-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-full mb-4">
            <span className="text-sm text-purple-400">Ready to Transform Your Screen?</span>
          </div>

          <h2 className="text-5xl md:text-7xl">
            Upgrade your screen.
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download ZaPixel today and experience wallpapers the way they were meant to be seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <motion.a
              href="https://apps.apple.com/us/app/zapixel-ai-4k-wallpapers/id6742073049"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl hover:bg-gray-100 transition-all"
            >
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div>App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.zaplatform.zapixel"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 rounded-2xl hover:from-purple-500 hover:via-pink-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-500/25"
            >
              <Download className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-90">Get it on</div>
                <div>Google Play</div>
              </div>
            </motion.a>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Free download • No subscription required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
