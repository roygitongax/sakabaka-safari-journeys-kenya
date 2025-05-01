
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from 'lucide-react';

// Define the safari package interface
interface SafariPackage {
  id: string;
  title: string;
  region: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
  description: string;
}

// Safari packages organized by region
const packages: Record<string, SafariPackage[]> = {
  coast: [
    {
      id: 'coast-1',
      title: 'Coastal Paradise Escape',
      region: 'Coast',
      duration: '5 days / 4 nights',
      price: 'From $1,200 per person',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Beach resorts', 'Marine park excursion', 'Traditional dhow cruise', 'Water sports'],
      description: 'Experience the pristine beaches of Kenya\'s coast with this relaxing package that combines beachfront luxury with marine adventures.'
    },
    {
      id: 'coast-2',
      title: 'Diani Beach & Marine Safari',
      region: 'Coast',
      duration: '7 days / 6 nights',
      price: 'From $1,800 per person',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Luxury beach accommodation', 'Snorkeling expeditions', 'Dolphin watching', 'Cultural village tours'],
      description: 'Immerse yourself in the crystal-clear waters of Diani Beach with this package that offers both relaxation and underwater exploration.'
    }
  ],
  masai_mara: [
    {
      id: 'masai-1',
      title: 'Great Migration Safari Adventure',
      region: 'Maasai Mara',
      duration: '4 days / 3 nights',
      price: 'From $2,200 per person',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Migration viewing', 'Big Five game drives', 'Luxury tented camp', 'Maasai village visit'],
      description: 'Witness the spectacular Great Migration with this focused safari package in Kenya\'s most famous wildlife reserve.'
    },
    {
      id: 'masai-2',
      title: 'Premium Maasai Mara Experience',
      region: 'Maasai Mara',
      duration: '6 days / 5 nights',
      price: 'From $3,500 per person',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Hot air balloon safari', 'Exclusive game drives', '5-star lodge accommodation', 'Professional photography guide'],
      description: 'Our premium Maasai Mara package offers the ultimate safari experience with exclusive activities and luxury accommodations.'
    }
  ],
  nairobi: [
    {
      id: 'nairobi-1',
      title: 'Nairobi Wildlife Day Tour',
      region: 'Nairobi National Park',
      duration: '1 day',
      price: 'From $250 per person',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Game drive', 'Elephant orphanage', 'Giraffe center', 'Lunch at local restaurant'],
      description: 'Perfect for those with limited time, this day tour showcases the amazing wildlife just minutes from Kenya\'s capital city.'
    },
    {
      id: 'nairobi-2',
      title: 'Nairobi Wildlife Weekend',
      region: 'Nairobi National Park',
      duration: '3 days / 2 nights',
      price: 'From $850 per person',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Multiple game drives', 'Boutique hotel stay', 'Carnivore restaurant experience', 'Karen Blixen museum'],
      description: 'Extend your city stay with this wildlife-focused weekend package that combines safari experiences with Nairobi\'s cultural highlights.'
    }
  ],
  nakuru_naivasha: [
    {
      id: 'nakuru-1',
      title: 'Lake Nakuru Flamingo Safari',
      region: 'Nakuru & Naivasha',
      duration: '3 days / 2 nights',
      price: 'From $950 per person',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Flamingo viewing', 'Rhino sanctuary', 'Lakeside accommodation', 'Boat safari'],
      description: 'Discover the famous flamingo flocks and diverse wildlife of Lake Nakuru National Park with this focused safari package.'
    },
    {
      id: 'nakuru-2',
      title: 'Rift Valley Lakes Explorer',
      region: 'Nakuru & Naivasha',
      duration: '5 days / 4 nights',
      price: 'From $1,500 per person',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Lake Nakuru & Naivasha', 'Hell\'s Gate National Park', 'Crescent Island walking safari', 'Hot springs visit'],
      description: 'Experience the diverse landscapes and wildlife of Kenya\'s Great Rift Valley with this comprehensive lake region package.'
    }
  ],
  samburu: [
    {
      id: 'samburu-1',
      title: 'Samburu Special Five Safari',
      region: 'Samburu',
      duration: '4 days / 3 nights',
      price: 'From $1,800 per person',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Special Five wildlife', 'River lodge stay', 'Samburu village visit', 'Bird watching'],
      description: 'Search for unique northern Kenya species like Grevy\'s zebra, reticulated giraffe, and Somali ostrich in their natural habitat.'
    },
    {
      id: 'samburu-2',
      title: 'Northern Kenya Wilderness',
      region: 'Samburu',
      duration: '6 days / 5 nights',
      price: 'From $2,500 per person',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500',
      features: ['Extended game drives', 'Buffalo Springs', 'Cultural immersion', 'Star gazing'],
      description: 'Explore the rugged beauty of northern Kenya with this extended safari that delves deep into the Samburu ecosystem and culture.'
    }
  ],
};

const Safaris = () => {
  return (
    <>
      <Helmet>
        <title>Safari Packages | Sakabaka Afrika Safaris</title>
        <meta name="description" content="Explore our custom safari packages across Kenya's most spectacular regions including Maasai Mara, Coast, Nairobi National Park, Nakuru, Naivasha, and Samburu." />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-safari-50">
          <div className="safari-container">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Safari Packages</h1>
              <p className="text-xl text-muted-foreground">
                Discover our expertly crafted safari experiences across Kenya's most spectacular regions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Safari Packages Section */}
        <section className="py-20">
          <div className="safari-container">
            <Tabs defaultValue="all" className="space-y-12">
              <TabsList className="flex flex-wrap justify-center gap-2">
                <TabsTrigger value="all">All Regions</TabsTrigger>
                <TabsTrigger value="coast">Coast</TabsTrigger>
                <TabsTrigger value="masai_mara">Maasai Mara</TabsTrigger>
                <TabsTrigger value="nairobi">Nairobi</TabsTrigger>
                <TabsTrigger value="nakuru_naivasha">Nakuru & Naivasha</TabsTrigger>
                <TabsTrigger value="samburu">Samburu</TabsTrigger>
              </TabsList>
              
              {/* All Regions */}
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.values(packages).flat().map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Coast Packages */}
              <TabsContent value="coast">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.coast.map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Maasai Mara Packages */}
              <TabsContent value="masai_mara">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.masai_mara.map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Nairobi Packages */}
              <TabsContent value="nairobi">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.nairobi.map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Nakuru & Naivasha Packages */}
              <TabsContent value="nakuru_naivasha">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.nakuru_naivasha.map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Samburu Packages */}
              <TabsContent value="samburu">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.samburu.map(pkg => (
                    <SafariPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Custom Safari Section */}
        <section className="py-20 bg-safari-50">
          <div className="safari-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-lg mb-10 text-muted-foreground">
                Let us create a custom safari experience tailored to your preferences, group size, and budget.
                Our expert team will craft the perfect itinerary for your dream Kenya safari adventure.
              </p>
              <a href="/contact" className="safari-btn">
                Request Custom Safari
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Safari Package Card Component
const SafariPackageCard = ({ pkg }: { pkg: SafariPackage }) => {
  return (
    <div className="bg-white border border-safari-100 group hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img 
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-safari text-white px-4 py-1 rounded-md">
          {pkg.region}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2">{pkg.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{pkg.duration}</p>
        
        <ul className="mb-6">
          {pkg.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center text-sm mb-2">
              <span className="w-2 h-2 bg-safari rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center pt-4 border-t border-safari-100">
          <span className="font-medium">{pkg.price}</span>
          <a href="/contact" className="flex items-center text-safari hover:text-safari-700 group-hover:translate-x-1 transition-all duration-300">
            Book Now <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Safaris;
