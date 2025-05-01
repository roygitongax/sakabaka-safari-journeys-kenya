
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface SafariRegion {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const regions: SafariRegion[] = [
  {
    id: 'coast',
    name: 'Coast',
    description: 'Experience the pristine beaches of Kenya\'s coast, where the Indian Ocean meets white sands and vibrant marine life.',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Beach resorts', 'Snorkeling & diving', 'Marine national parks', 'Historical coastal towns']
  },
  {
    id: 'masai-mara',
    name: 'Maasai Mara',
    description: 'Witness the iconic Great Migration and unparalleled concentration of wildlife in Kenya\'s most famous reserve.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Great Migration', 'Big Five sightings', 'Hot air balloon safaris', 'Maasai cultural experiences']
  },
  {
    id: 'nairobi',
    name: 'Nairobi National Park',
    description: 'Explore the world\'s only national park within a capital city, offering amazing wildlife viewing against the city backdrop.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Big Five wildlife', 'City skyline views', 'Orphaned elephant sanctuary', 'Convenient access']
  },
  {
    id: 'nakuru-naivasha',
    name: 'Nakuru & Naivasha',
    description: 'Discover the flamingo-lined lakes and abundant wildlife in the Great Rift Valley\'s spectacular landscapes.',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Flamingo spectacles', 'Lake boat tours', 'Hiking & biking trails', 'Hot springs & geothermal sites']
  },
  {
    id: 'samburu',
    name: 'Samburu',
    description: 'Encounter unique wildlife in the rugged, arid landscapes of northern Kenya, home to the Samburu Special Five.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=600',
    features: ['Samburu Special Five', 'Desert landscapes', 'Samburu cultural experiences', 'Off-the-beaten-path adventure']
  }
];

const RegionsSection = () => {
  const [activeRegion, setActiveRegion] = useState(0);
  
  return (
    <section id="destinations" className="py-20 bg-safari-50">
      <div className="safari-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Explore Kenya's Most Spectacular Regions</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            From the iconic savannahs of the Maasai Mara to the pristine beaches of the Coast,
            our expertly curated safari packages showcase the diversity of Kenya's landscapes and wildlife.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Region Navigation */}
          <div className="flex flex-col space-y-4">
            {regions.map((region, index) => (
              <button
                key={region.id}
                className={cn(
                  'flex justify-between items-center p-6 text-left transition-all duration-300',
                  activeRegion === index 
                    ? 'bg-safari text-white' 
                    : 'bg-white hover:bg-safari-100'
                )}
                onClick={() => setActiveRegion(index)}
              >
                <div>
                  <h3 className="text-xl font-serif mb-1">{region.name}</h3>
                  <p className={cn(
                    'text-sm',
                    activeRegion === index ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    {region.description.substring(0, 60)}...
                  </p>
                </div>
                <ChevronRight size={20} className={activeRegion === index ? 'text-white' : 'text-safari'} />
              </button>
            ))}
          </div>
          
          {/* Region Details */}
          <motion.div 
            key={regions[activeRegion].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-10"
          >
            <div className="aspect-[4/3] mb-6">
              <img
                src={regions[activeRegion].image}
                alt={regions[activeRegion].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="heading-md mb-4">{regions[activeRegion].name}</h3>
            <p className="mb-6 text-muted-foreground">
              {regions[activeRegion].description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-3">Highlights:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {regions[activeRegion].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-safari rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="/safaris" className="safari-btn">
              View {regions[activeRegion].name} Packages
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
