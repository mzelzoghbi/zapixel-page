import React from 'react';
import { Zap, Feather, MousePointer, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const experienceFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant browsing and downloads. Built for speed.',
  },
  {
    icon: Feather,
    title: 'Lightweight',
    description: 'Minimal battery and memory footprint. Runs smoothly on any device.',
  },
  {
    icon: MousePointer,
    title: 'One-Tap Apply',
    description: 'Set wallpapers instantly. No complicated steps.',
  },
  {
    icon: Heart,
    title: 'Favorites & Downloads',
    description: 'Save your favorites and access downloads offline.',
  },
];

export function AppExperience() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Built for <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">Performance</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A seamless experience designed with your device in mind
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features list */}
          <div className="space-y-6">
            {experienceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-purple-500/20">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Circular progress indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-4 border-gray-800 rounded-full" />
                <div className="absolute w-full h-full border-4 border-transparent border-t-purple-400 border-r-pink-400 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                  <Zap className="w-16 h-16 text-purple-400 mx-auto" />
                  <div>
                    <div className="text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                      &lt;10ms
                    </div>
                    <p className="text-sm text-gray-400">Average Load Time</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-3xl mb-1">99.9%</div>
                    <p className="text-xs text-gray-400">User Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}