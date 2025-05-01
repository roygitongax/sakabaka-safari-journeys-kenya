
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    text: 'Our safari with Sakabaka was beyond expectations. The guides were incredibly knowledgeable, and we saw all the Big Five in just two days at Maasai Mara. The accommodations were luxurious yet authentic. We\'ll definitely return!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    text: 'The custom itinerary Sakabaka created for our family was perfect. Our children still talk about the elephant orphanage and the lions we saw. The staff went above and beyond to make our trip special. Truly a once-in-a-lifetime experience.'
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    text: 'From the coastal beaches to the Maasai Mara, our two-week safari was absolutely perfect. Our guide James was exceptional - his knowledge of wildlife and photography tips made our trip unforgettable. Sakabaka\'s attention to detail is outstanding.'
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    text: 'The hot air balloon ride over Maasai Mara at sunrise was the highlight of our lives. Sakabaka arranged everything perfectly, and their sustainable approach to tourism made us feel good about our choice. We can\'t recommend them enough!'
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="py-20 md:py-28 bg-safari-900 text-white overflow-hidden">
      <div className="safari-container">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
              ))}
            </div>
          </div>
          <h2 className="heading-lg mb-6">What Our Guests Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-safari-100">
            Don't just take our word for it. Hear what our guests have to say about their unforgettable
            experiences with Sakabaka Afrika Safaris.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto" ref={testimonialsRef}>
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-8 z-10">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-8 z-10">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Testimonial Slider */}
          <div className="overflow-hidden py-4">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="bg-safari-800/50 p-8 md:p-12 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl font-serif italic mb-8">
                  "{testimonials[current].text}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-medium">{testimonials[current].name}</h4>
                  <p className="text-safari-200">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  current === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                )}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
