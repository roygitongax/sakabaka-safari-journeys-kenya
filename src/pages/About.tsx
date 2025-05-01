
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sakabaka Afrika Safaris</title>
        <meta name="description" content="Learn about Sakabaka Afrika Safaris, Kenya's premier safari tour operator offering expertly crafted wildlife experiences across Kenya's most spectacular regions." />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-safari-50">
          <div className="safari-container">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">About Sakabaka Afrika Safaris</h1>
              <p className="text-xl text-muted-foreground">
                Kenya's premier safari tour operator, creating unforgettable wildlife experiences since 2015.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="safari-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-1 w-20 bg-safari mb-6"></div>
                <h2 className="heading-lg mb-6">Our Story</h2>
                <p className="mb-6 text-muted-foreground">
                  Founded in 2015 by lifelong wildlife enthusiast and conservation advocate James Mbuthia, 
                  Sakabaka Afrika Safaris was born out of a passion for sharing Kenya's natural wonders 
                  with the world while supporting sustainable tourism practices.
                </p>
                <p className="mb-6 text-muted-foreground">
                  The name "Sakabaka" comes from a Swahili term meaning "to explore with purpose" - reflecting 
                  our commitment to creating meaningful safari experiences that benefit both visitors and local communities.
                </p>
                <p className="text-muted-foreground">
                  Today, our team of 30+ experienced guides, travel specialists, and conservation experts work 
                  together to create custom safari itineraries that showcase the beauty of Kenya while supporting 
                  wildlife conservation and community development initiatives.
                </p>
              </div>
              <div>
                <div className="relative">
                  <div className="aspect-[4/5] bg-safari-100">
                    {/* This is a placeholder for a founder or team photo */}
                    {/* Recommended: Image of the founder or team in safari setting */}
                    <img 
                      src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800&h=1000" 
                      alt="Sakabaka Afrika Safaris Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-safari p-6 max-w-xs hidden md:block">
                    <p className="text-white font-serif italic">
                      "We don't just create tours, we craft experiences that connect people with the magic of Kenya's wilderness."
                    </p>
                    <p className="text-white/80 mt-2 text-right">- James Mbuthia, Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-20 bg-safari-50">
          <div className="safari-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Meet Our Expert Team</h2>
              <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                Our passionate team of safari guides and travel specialists bring decades of experience
                and deep knowledge of Kenya's wildlife, geography, and culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Team Member Card */}
              {/* These are placeholder cards - you can fill with actual team members later */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden bg-safari-100">
                    {/* Placeholder for team member photo */}
                    {/* Recommended: Professional headshots of your guides in safari attire */}
                    <div className="w-full h-full bg-safari-100"></div>
                  </div>
                  <h3 className="text-xl font-serif mb-1">Safari Guide Name</h3>
                  <p className="text-safari mb-3">Senior Safari Guide</p>
                  <p className="text-muted-foreground text-sm">
                    With over 15 years of experience leading safari tours across Kenya, our guide brings
                    extensive knowledge of wildlife behavior and local ecosystems to every expedition.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20">
          <div className="safari-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Our Values</h2>
              <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                At Sakabaka Afrika Safaris, we are guided by core principles that shape every aspect of our operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Value Card 1 */}
              <div className="p-8 border border-safari-100">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif text-safari">01</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Sustainable Tourism</h3>
                <p className="text-muted-foreground">
                  We are committed to minimizing our environmental impact and supporting conservation efforts
                  that protect Kenya's wildlife and natural habitats for future generations.
                </p>
              </div>
              
              {/* Value Card 2 */}
              <div className="p-8 border border-safari-100">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif text-safari">02</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Community Engagement</h3>
                <p className="text-muted-foreground">
                  We work closely with local communities, ensuring that tourism benefits those who live alongside
                  wildlife through employment opportunities and community development initiatives.
                </p>
              </div>
              
              {/* Value Card 3 */}
              <div className="p-8 border border-safari-100">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif text-safari">03</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Exceptional Experiences</h3>
                <p className="text-muted-foreground">
                  We are dedicated to creating personalized, authentic safari experiences that exceed 
                  expectations and create lasting memories for our guests.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
