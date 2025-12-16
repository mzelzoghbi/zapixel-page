import React from 'react';
import { Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Designer',
    text: 'Finally, wallpapers that actually look good on my OLED display. The quality is unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Martinez',
    role: 'Developer',
    text: 'Clean interface, amazing selection, and incredibly fast. This is how an app should be built.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Photographer',
    text: 'As someone who appreciates high-quality visuals, ZaPixel delivers exactly what I need.',
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
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-purple-400 text-purple-400" />
              ))}
            </div>
            <div className="text-4xl mb-2">4.9</div>
            <div className="text-sm text-gray-400">App Store Rating</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl mb-2">500K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl">
            <div className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">10M+</div>
            <div className="text-sm text-gray-400">Downloads This Month</div>
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