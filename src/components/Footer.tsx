
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-safari-950 text-white py-16">
      <div className="safari-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="Sakabaka Safaris Logo" 
              className="h-14"
            />
            <p className="text-safari-100 max-w-xs">
              Sakabaka Afrika Safaris is a premier travel agency in Nairobi, 
              curating unforgettable safari experiences across Kenya's most 
              breathtaking landscapes.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-safari-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-safari-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-safari-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-safari-100 hover:text-safari-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Safari Regions</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Coast
                </Link>
              </li>
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Maasai Mara
                </Link>
              </li>
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Nairobi National Park
                </Link>
              </li>
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Nakuru & Naivasha
                </Link>
              </li>
              <li>
                <Link to="/safaris" className="text-safari-100 hover:text-safari-400 transition-colors">
                  Samburu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-safari-400" />
                <a href="mailto:info@sakabakasafaris.com" className="text-safari-100 hover:text-safari-400 transition-colors">
                  info@sakabakasafaris.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-safari-400" />
                <a href="tel:+254700000000" className="text-safari-100 hover:text-safari-400 transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-safari-400 mt-1" />
                <span className="text-safari-100">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-safari-800/50 text-safari-200 text-center">
          <p>&copy; {new Date().getFullYear()} Sakabaka Afrika Safaris. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Have any questions about our safari packages? <Link to="/contact" className="text-safari-400 hover:underline">Reach out to us</Link> and our team of local experts will help you plan your perfect African adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
