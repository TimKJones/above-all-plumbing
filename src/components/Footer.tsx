import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-plumbing-700 text-white mt-12 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Nashville Plumbing</h3>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <span>(615) 555-1234</span>
            </div>
            <p className="text-gray-300">Serving Nashville and surrounding areas</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link to="/schedule-visit" className="hover:text-gray-300 transition-colors">Schedule a Visit</Link>
            </nav>
          </div>
          
          {/* Hours */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="mb-1">Monday - Friday: 7am - 7pm</p>
            <p className="mb-1">Saturday: 8am - 5pm</p>
            <p>Sunday: Emergency Service Only</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
          <p>Copyright © {currentYear} Nashville Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 