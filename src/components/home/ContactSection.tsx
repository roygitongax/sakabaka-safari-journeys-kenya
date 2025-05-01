
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="safari-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Column */}
          <div>
            <div className="h-1 w-20 bg-safari mb-6"></div>
            <h2 className="heading-lg mb-6">Start Planning Your Dream Safari</h2>
            <p className="text-lg mb-10 text-muted-foreground">
              Let our expert team help you create the perfect safari experience tailored to your preferences, 
              group size, and budget. Reach out today to begin your journey.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-safari-100 flex items-center justify-center">
                  <Mail className="text-safari" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <a href="mailto:info@sakabakasafaris.com" className="text-safari hover:underline">
                    info@sakabakasafaris.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-safari-100 flex items-center justify-center">
                  <Phone className="text-safari" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Call Us</h3>
                  <a href="tel:+254700000000" className="text-safari hover:underline">
                    +254 700 000 000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-safari-100 flex items-center justify-center">
                  <MapPin className="text-safari" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Visit Us</h3>
                  <address className="not-italic text-muted-foreground">
                    Sakabaka Afrika Safaris<br />
                    Nairobi, Kenya
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="heading-sm mb-6">Send Us A Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="region" className="block mb-2 font-medium">Interested Region</label>
                  <select
                    id="region"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select a region</option>
                    <option value="coast">Coast</option>
                    <option value="masai-mara">Maasai Mara</option>
                    <option value="nairobi">Nairobi National Park</option>
                    <option value="nakuru">Nakuru & Naivasha</option>
                    <option value="samburu">Samburu</option>
                    <option value="multiple">Multiple Regions</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your travel plans, group size, preferred dates, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="safari-btn w-full py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
