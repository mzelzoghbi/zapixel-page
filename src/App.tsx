import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WhyZaPixel } from './components/WhyZaPixel';
import { Categories } from './components/Categories';
import { AppExperience } from './components/AppExperience';
import { Screenshots } from './components/Screenshots';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <WhyZaPixel />
      <Categories />
      <AppExperience />
      <Screenshots />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}
