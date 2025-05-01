
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import RegionsSection from '@/components/home/RegionsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sakabaka Afrika Safaris | Luxury Kenya Safari Tours & Expeditions</title>
        <meta name="description" content="Experience the magic of Kenya with Sakabaka Afrika Safaris. Explore Maasai Mara, Nairobi National Park, Samburu, and more with our custom safari tours and expeditions." />
        <meta name="keywords" content="Kenya safaris, African tours, Maasai Mara safari, Nairobi National Park, wildlife tour, luxury safari, Kenya travel" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RegionsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
