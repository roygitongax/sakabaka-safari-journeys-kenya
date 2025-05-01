
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sakabaka Afrika Safaris</title>
        <meta name="description" content="Contact Sakabaka Afrika Safaris to plan your perfect Kenya safari adventure. Our team of local experts is ready to create your custom safari itinerary." />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-safari-50">
          <div className="safari-container">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Ready to start planning your Kenya safari adventure? Get in touch with our team today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Details */}
        <section className="py-20">
          <div className="safari-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 border border-safari-100 hover:border-safari hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6 mx-auto">
                  <Mail className="text-safari" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Email Us</h3>
                <a href="mailto:info@sakabakasafaris.com" className="text-safari hover:underline">
                  info@sakabakasafaris.com
                </a>
              </div>
              
              <div className="text-center p-8 border border-safari-100 hover:border-safari hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6 mx-auto">
                  <Phone className="text-safari" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Call Us</h3>
                <a href="tel:+254700000000" className="text-safari hover:underline">
                  +254 700 000 000
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available Monday - Friday, 8am - 6pm EAT
                </p>
              </div>
              
              <div className="text-center p-8 border border-safari-100 hover:border-safari hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-safari-100 flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="text-safari" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Visit Us</h3>
                <address className="not-italic text-muted-foreground">
                  Sakabaka Afrika Safaris<br />
                  Nairobi, Kenya
                </address>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="heading-md mb-6">Send Us A Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last-name" className="block mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="travel-date" className="block mb-2 font-medium">Preferred Travel Date</label>
                    <input
                      type="text"
                      id="travel-date"
                      placeholder="Month / Year or Flexible"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="group-size" className="block mb-2 font-medium">Group Size</label>
                    <select
                      id="group-size"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select group size</option>
                      <option value="1-2">1-2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">More than 10 people</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="regions" className="block mb-2 font-medium">Regions of Interest</label>
                    <select
                      id="regions"
                      multiple
                      size={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                    >
                      <option value="coast">Coast</option>
                      <option value="masai-mara">Maasai Mara</option>
                      <option value="nairobi">Nairobi National Park</option>
                      <option value="nakuru">Nakuru & Naivasha</option>
                      <option value="samburu">Samburu</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">Hold Ctrl (or Cmd) to select multiple regions</p>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safari focus:border-transparent"
                      placeholder="Tell us about your travel plans, special interests, or any questions you have."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="safari-btn py-4 px-8"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Map and Info */}
              <div>
                <h2 className="heading-md mb-6">Visit Our Office</h2>
                <div className="aspect-video bg-safari-100 mb-8">
                  {/* Placeholder for Google Map */}
                  {/* You would replace this with an actual Google Map embed later */}
                  <div className="w-full h-full flex items-center justify-center bg-safari-100">
                    <p className="text-safari-700">Map Location of Sakabaka Afrika Safaris Office</p>
                  </div>
                </div>
                
                <div className="bg-safari-50 p-8">
                  <h3 className="text-xl font-serif mb-4">Why Choose Sakabaka Afrika Safaris</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-safari rounded-full mr-3 mt-2"></span>
                      <span>Local expertise with over 8 years of experience in Kenya safari tourism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-safari rounded-full mr-3 mt-2"></span>
                      <span>Personalized service and custom itineraries tailored to your interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-safari rounded-full mr-3 mt-2"></span>
                      <span>Commitment to sustainable tourism and community support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-safari rounded-full mr-3 mt-2"></span>
                      <span>24/7 support during your entire Kenya safari experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-safari rounded-full mr-3 mt-2"></span>
                      <span>Carefully selected accommodations for comfort and authentic experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-safari-50">
          <div className="safari-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
              <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                Find quick answers to the most common questions about our safari experiences.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'When is the best time to visit Kenya for a safari?',
                  answer: 'The best time for wildlife viewing is during the dry seasons (January-March and July-October) when animals gather around water sources and vegetation is less dense. The Great Migration in Maasai Mara typically occurs from July to October. However, Kenya offers excellent safari experiences year-round, with different advantages in each season.'
                },
                {
                  question: 'What should I pack for a safari in Kenya?',
                  answer: 'We recommend lightweight, neutral-colored clothing (avoid bright colors and white), a good pair of binoculars, a camera with extra batteries, sunscreen, insect repellent, a wide-brimmed hat, and comfortable walking shoes. For early morning and evening game drives, bring a light jacket or sweater as it can get cool.'
                },
                {
                  question: 'Do I need a visa to visit Kenya?',
                  answer: 'Most visitors to Kenya require a visa. You can apply for an e-visa online before your trip through the official Kenya e-visa portal. Some nationalities may be exempt or eligible for visa on arrival. We recommend checking the current requirements for your specific nationality well in advance of your trip.'
                },
                {
                  question: 'Are your safaris suitable for families with children?',
                  answer: "Yes, we offer family-friendly safari packages and can customize itineraries to suit families with children of all ages. Many lodges and camps have family accommodations and activities specifically designed for younger visitors. We will help you choose the most appropriate options based on your children's ages and interests."
                },
                {
                  question: 'What health precautions should I take before traveling to Kenya?',
                  answer: "Visitors to Kenya should consult with a travel doctor 4-8 weeks before departure. Typical recommendations include vaccines for yellow fever (required for entry), typhoid, hepatitis A, and taking antimalarial medication. It's also advisable to bring a basic first aid kit and any personal medications you may need."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
