
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="safari-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Sakabaka Safaris Logo" 
            className={cn(
              'transition-all duration-300',
              isScrolled ? 'h-12' : 'h-16'
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/safaris" label="Safaris" />
          <NavLink to="/contact" label="Contact" />
          <Link to="/contact" className="safari-btn">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-safari"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="safari-container pt-24 flex flex-col space-y-6">
          <MobileNavLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/safaris" label="Safaris" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMobileMenuOpen(false)} />
          <Link 
            to="/contact" 
            className="safari-btn text-center mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => (
  <Link 
    to={to} 
    className="text-foreground font-medium hover:text-safari transition-colors"
  >
    {label}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="text-2xl font-medium text-foreground hover:text-safari transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
