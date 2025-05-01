
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-image.jpg" 
          alt="Sakabaka Safari Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-safari-950/80 to-safari-950/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="heading-xl text-white mb-6">
            Discover the Magic of Kenya's Wilderness
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Expertly crafted safari experiences through Kenya's most breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#destinations" className="safari-btn">
              Explore Destinations
            </a>
            <a href="/contact" className="safari-btn-outline text-white border-white hover:text-safari hover:border-white hover:bg-white">
              Plan Your Safari
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/90 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-[bounce_1.5s_infinite]" style={{ marginTop: '8px' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
