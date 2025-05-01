
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="safari-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-safari-100">
              {/* This is a placeholder for a professional image of safari guides or staff */}
              {/* Recommended: Image of safari guides or staff in professional attire against a beautiful Kenyan backdrop */}
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Sakabaka Safari Guides" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-safari p-6 max-w-xs hidden md:block">
              <p className="text-white font-serif italic">
                "Our mission is to showcase Kenya's unparalleled beauty while supporting conservation and local communities."
              </p>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <div className="h-1 w-20 bg-safari mb-6"></div>
            <h2 className="heading-lg mb-6">
              Creating Extraordinary Safari Experiences Since 2015
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Sakabaka Afrika Safaris is a premier travel agency based in Nairobi, dedicated to crafting 
              unforgettable safari experiences that showcase Kenya's diverse wildlife and breathtaking landscapes.
            </p>
            <p className="mb-8 text-muted-foreground">
              Our expert team of local guides brings decades of experience and intimate knowledge of Kenya's 
              wildlife, geography, and culture. We take pride in creating personalized itineraries that 
              capture the magic of Africa while ensuring sustainable and responsible tourism practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <div className="text-4xl font-serif text-safari mb-2">100+</div>
                <p>Unique Safari Itineraries</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-safari mb-2">6</div>
                <p>Stunning Safari Regions</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-safari mb-2">1000+</div>
                <p>Satisfied Adventurers</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-safari mb-2">50+</div>
                <p>Local Partnerships</p>
              </div>
            </div>
            
            <a href="/about" className="safari-btn self-start">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
