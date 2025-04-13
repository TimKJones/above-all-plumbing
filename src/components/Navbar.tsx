import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import services from '@/lib/services';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const location = useLocation();
  
  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-plumbing-600">Nashville <span className="text-plumbing-500">Plumbing</span></h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-gray-600 hover:text-plumbing-500 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base",
                      location.pathname.includes('/services') && "text-plumbing-500"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      {services.map(service => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="block p-2 hover:bg-gray-100 rounded"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Areas We Serve Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-gray-600 hover:text-plumbing-500 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-base",
                      (location.pathname === '/nashville' || 
                       location.pathname === '/franklin' || 
                       location.pathname === '/brentwood') && "text-plumbing-500"
                    )}
                  >
                    Areas We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col p-4 w-[200px]">
                      <Link 
                        to="/nashville" 
                        className={cn(
                          "block p-2 hover:bg-gray-100 rounded",
                          location.pathname === '/nashville' && "bg-gray-100"
                        )}
                      >
                        Nashville
                      </Link>
                      <Link 
                        to="/franklin" 
                        className={cn(
                          "block p-2 hover:bg-gray-100 rounded",
                          location.pathname === '/franklin' && "bg-gray-100"
                        )}
                      >
                        Franklin
                      </Link>
                      <Link 
                        to="/brentwood" 
                        className={cn(
                          "block p-2 hover:bg-gray-100 rounded",
                          location.pathname === '/brentwood' && "bg-gray-100"
                        )}
                      >
                        Brentwood
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/schedule-visit" 
              className={cn(
                "text-gray-600 hover:text-plumbing-500 transition-colors font-medium text-base",
                location.pathname === '/schedule-visit' && "text-plumbing-500"
              )}
            >
              Schedule a Visit
            </Link>
          </div>

          {/* Phone Number - Right Aligned */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center text-plumbing-600 font-medium">
              <Phone size={18} className="mr-2" />
              <span>(615) 555-1234</span>
            </div>
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
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center w-full text-left text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                Services
                <ChevronDown size={16} className="ml-2" />
              </button>
              <div className={cn("ml-4 mt-1 space-y-2", isServicesOpen ? "block" : "hidden")}>
                {services.map(service => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.slug}`} 
                    className="block py-1 text-gray-600 hover:text-plumbing-500"
                    onClick={closeMobileMenu}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Areas We Serve */}
            <div className="relative">
              <button 
                className="flex items-center w-full text-left text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  const dropdown = e.currentTarget.nextElementSibling;
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
              >
                Areas We Serve
                <ChevronDown size={16} className="ml-2" />
              </button>
              <div className="hidden ml-4 mt-1 space-y-2">
                <Link 
                  to="/nashville" 
                  className="block py-1 text-gray-600 hover:text-plumbing-500"
                  onClick={closeMobileMenu}
                >
                  Nashville
                </Link>
                <Link 
                  to="/franklin" 
                  className="block py-1 text-gray-600 hover:text-plumbing-500"
                  onClick={closeMobileMenu}
                >
                  Franklin
                </Link>
                <Link 
                  to="/brentwood" 
                  className="block py-1 text-gray-600 hover:text-plumbing-500"
                  onClick={closeMobileMenu}
                >
                  Brentwood
                </Link>
              </div>
            </div>
            
            <Link 
              to="/schedule-visit" 
              className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              Schedule a Visit
            </Link>
            <div className="flex items-center text-plumbing-600 font-medium py-2">
              <Phone size={18} className="mr-2" />
              <span>(615) 555-1234</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
