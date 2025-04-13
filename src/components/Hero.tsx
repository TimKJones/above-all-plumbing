import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-10 pb-16 md:pt-20 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-plumbing-50 to-white -z-10"></div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 z-10 animate-fade-in">
            {/* Certified Badge */}
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <CheckCircle2 size={18} className="text-green-500 mr-2" />
              <span className="text-sm font-medium">Licensed & Insured Plumbers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
              Nashville's Most <span className="text-plumbing-500">Trusted</span> Plumbing Experts
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              From emergency repairs to complete installations, our skilled plumbers deliver exceptional service when you need it most.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <Clock size={20} className="text-plumbing-500 mr-2" />
                <span className="text-gray-700 font-medium">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={20} className="text-plumbing-500 mr-2" />
                <span className="text-gray-700 font-medium">100% Satisfaction Guarantee</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-6 max-w-md">
              <Button asChild size="lg" className="w-full py-6 text-lg font-medium bg-plumbing-500 hover:bg-plumbing-600">
                <Link to="/schedule-visit" className="flex items-center justify-center">
                  Schedule a Visit
                </Link>
              </Button>
              <div className="flex items-center justify-start text-plumbing-600 font-medium text-lg">
                <PhoneCall size={20} className="mr-3" />
                <span>Call Now: (615) 555-1234</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dowzzhm6s/image/upload/c_scale,w_800/v1744474654/ai%20websites/nashville-plumbing-demo/nashville-plumbing_g0wacm.jpg" 
                alt="Nashville Plumbing technician working under a sink" 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
