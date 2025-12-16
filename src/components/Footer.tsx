import React from 'react';
import { Instagram, Twitter, Music2 } from 'lucide-react';
import logo from 'figma:asset/fdd0351693d8a42f950a88db239661ab5c4410dc.png';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ZaPixel Logo" className="w-12 h-12 rounded-2xl bg-white p-2" />
              <span className="text-xl">ZaPixel</span>
            </div>
            <p className="text-sm text-gray-400">
              Premium 4K wallpapers for modern devices.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm mb-4 text-gray-400">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm mb-4 text-gray-400">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm mb-4 text-gray-400">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/zapixelapp"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/zapixelapp"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@zapixel.app"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 ZaPixel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
