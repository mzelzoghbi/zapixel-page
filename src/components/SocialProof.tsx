import React from 'react';
import { Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Walaa El-Basry',
    role: 'Wallpaper enthusiast',
    text: 'I was already blown away by the huge variety of wallpapers and categories in this App! And the best part? 🥳The AI feature in next level, I literally describe the wallpaper which I imagine, and it brings it to life 😊👍',
    rating: 5,
  },
  {
    name: 'Mohamed Sayed',
    role: 'Wallpaper enthusiast',
    text: 'Amazing app, simple and elegant GUI.',
    rating: 5,
  },
  {
    name: 'Mohamed Nagy',
    role: 'Wallpaper enthusiast',
    text: "It has a lot of cool wallpapers and it aligns perfectly with my phone's screen.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Loved by <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our community of design enthusiasts
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-purple-400 text-purple-400" />
              ))}
            </div>
            <div className="text-4xl mb-2">5.0</div>
            <div className="text-sm text-gray-400">App Store Rating</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl mb-2">1K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              
              <div>
                <div className="text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
