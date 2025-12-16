import React from 'react';
import { Sparkles, Layers, Monitor, Download, RefreshCw, Award } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Sparkles,
    title: 'Ultra-High-Resolution',
    description: '4K wallpapers with stunning clarity. Every pixel optimized for your display.',
  },
  {
    icon: Award,
    title: 'Carefully Curated',
    description: 'Hand-picked by design experts. Only the finest wallpapers make the cut.',
  },
  {
    icon: Monitor,
    title: 'OLED Optimized',
    description: 'Designed for high-refresh and OLED displays. True blacks, vivid colors.',
  },
  {
    icon: Layers,
    title: 'No Quality Loss',
    description: 'Zero compression. Download original files in full resolution.',
  },
  {
    icon: RefreshCw,
    title: 'Regular Updates',
    description: 'Fresh content weekly. New collections added constantly.',
  },
  {
    icon: Download,
    title: 'Unlimited Downloads',
    description: 'Download as many as you want. No restrictions, no limits.',
  },
];

export function WhyZaPixel() {
  return (
    <section id="features" className="relative py-32 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Why <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">ZaPixel</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium wallpapers crafted for those who demand perfection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-600/0 group-hover:from-purple-500/5 group-hover:to-pink-600/5 rounded-3xl transition-all duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}