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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
                  <NavigationMenuTrigger className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent text-base">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[320px] gap-3 p-4">
                      {services.map(service => (
                        <li key={service.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/services/${service.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-plumbing-50 hover:text-plumbing-500"
                            >
                              {service.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Areas We Serve Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent text-base">
                    Areas We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/nashville"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-plumbing-50 hover:text-plumbing-500"
                          >
                            Nashville
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/franklin"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-plumbing-50 hover:text-plumbing-500"
                          >
                            Franklin
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/brentwood"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-plumbing-50 hover:text-plumbing-500"
                          >
                            Brentwood
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="#about" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium">About</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="secondary" className="bg-plumbing-500 text-white hover:bg-plumbing-600">
              <a href="#contact">Schedule a Visit</a>
            </Button>
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
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center w-full text-left text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2"
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
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Areas We Serve */}
            <div className="relative">
              <button 
                className="flex items-center w-full text-left text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2"
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
                <Link to="/nashville" className="block py-1 text-gray-600 hover:text-plumbing-500">Nashville</Link>
                <Link to="/franklin" className="block py-1 text-gray-600 hover:text-plumbing-500">Franklin</Link>
                <Link to="/brentwood" className="block py-1 text-gray-600 hover:text-plumbing-500">Brentwood</Link>
              </div>
            </div>
            
            <a href="#about" className="text-gray-600 hover:text-plumbing-500 transition-colors font-medium py-2">About</a>
            <Button asChild variant="secondary" className="bg-plumbing-500 text-white hover:bg-plumbing-600 w-full justify-center">
              <a href="#contact">Schedule a Visit</a>
            </Button>
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
