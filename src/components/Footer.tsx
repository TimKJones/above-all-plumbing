import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-plumbing-700 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Above All Plumbing & Septic</h3>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <span>(615) 555-1234</span>
            </div>
            <p className="text-gray-300">Serving Nashville and surrounding areas</p>
          </div>
          
          {/* Areas We Serve */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/nashville" className="hover:text-gray-300 transition-colors">Nashville</Link>
              <Link to="/franklin" className="hover:text-gray-300 transition-colors">Franklin</Link>
              <Link to="/brentwood" className="hover:text-gray-300 transition-colors">Brentwood</Link>
            </nav>
          </div>
          
          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/emergency-repairs" className="hover:text-gray-300 transition-colors">Emergency Repairs</Link>
              <Link to="/services/drain-cleaning" className="hover:text-gray-300 transition-colors">Drain Cleaning</Link>
              <Link to="/services/water-heater-services" className="hover:text-gray-300 transition-colors">Water Heater Services</Link>
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
          <p>Copyright © {currentYear} Above All Plumbing & Septic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 