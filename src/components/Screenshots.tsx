import React from 'react';
import { motion } from 'motion/react';
import discoverImage from '@/assets/discover.png';

const screenshots = [
  {
    title: 'Browse',
    description: 'Discover thousands of curated wallpapers',
    image: discoverImage,
  },
  {
    title: 'Preview',
    description: 'View in full 4K resolution',
    image: 'https://images.unsplash.com/photo-1639493115941-a70fcef4f715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY1ODIxMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Apply',
    description: 'Set as wallpaper with one tap',
    image: 'https://images.unsplash.com/photo-1520529890308-f503006340b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTg5NzQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Screenshots() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Simple. <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">Intuitive.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the app in action
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative w-72">
                  {/* Phone mockup */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                    
                    {/* Screen */}
                    <div className="aspect-[9/19.5] bg-black overflow-hidden">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* UI overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                          <div className="text-xs text-gray-400 mb-1">{screenshot.description}</div>
                          <div className="text-sm">{screenshot.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-center mt-6">
                    <div className="text-xl mb-1">{screenshot.title}</div>
                    <div className="text-sm text-gray-400">{screenshot.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
