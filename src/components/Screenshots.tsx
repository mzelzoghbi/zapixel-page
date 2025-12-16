import React from 'react';
import { motion } from 'motion/react';
import discoverImage from '@/assets/discover.png';
import previewImage from '@/assets/preview.png';
import watchSupportImage from '@/assets/watch support.png';

const screenshots = [
  {
    title: 'Browse',
    description: 'Discover thousands of curated wallpapers',
    image: discoverImage,
  },
  {
    title: 'Preview',
    description: 'View in full 4K resolution',
    image: previewImage,
  },
  {
    title: 'Watch Support',
    description: 'Control ZaPixel right from your wrist',
    image: watchSupportImage,
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
                  <div className="relative bg-gradient-to-br from-zinc-900 via-slate-900 to-black rounded-[3rem] border-[12px] border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
                    {/* Titanium chamfer */}
                    <div className="absolute inset-0 rounded-[2.9rem] border border-white/10 pointer-events-none" />
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-9 bg-black rounded-full border border-white/10 shadow-[0_6px_12px_rgba(0,0,0,0.35)] z-10" />
                    {/* Side buttons */}
                    <div className="absolute left-0 top-16 h-10 w-1.5 rounded-r-full bg-slate-700/70" />
                    <div className="absolute right-0 top-14 h-8 w-1.5 rounded-l-full bg-slate-700/70" />
                    <div className="absolute right-0 top-24 h-8 w-1.5 rounded-l-full bg-slate-700/70" />

                    {/* Screen */}
                    <div className="aspect-[9/19.5] bg-black overflow-hidden rounded-[2.4rem] border border-white/5 mx-2 my-3">
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
