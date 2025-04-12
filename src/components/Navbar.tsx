
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-plumbing-600">Nashville <span className="text-plumbing-500">Plumbing</span></h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              <span>(615) 555-1234</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white px-4 py-3 shadow-lg transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
        )}>
          <div className="flex flex-col space-y-3 pb-3">
            <a href="#" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">Home</a>
            <a href="#services" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">Services</a>
            <a href="#about" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">Contact</a>
            <Button className="btn-primary flex items-center gap-2 justify-center mt-2">
              <Phone size={18} />
              <span>(615) 555-1234</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
