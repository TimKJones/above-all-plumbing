
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-10 pb-16 md:pt-20 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-plumbing-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=2000&auto=format&fit=crop')] 
           bg-no-repeat bg-right opacity-10 -z-10 bg-contain"></div>
      
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                <PhoneCall size={18} />
                <span>Call Now: (615) 555-1234</span>
              </Button>
              
              <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                <span>View Our Services</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Card */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-plumbing-600">Need A Plumber Today?</h3>
              <div className="bg-plumbing-50 rounded-md p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Emergency Service Available</h4>
                <p className="text-gray-600 text-sm">We'll be at your doorstep quickly to resolve your plumbing issues.</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-green-500 mr-2 mt-0.5" />
                  <p className="text-gray-700">Free estimates on new installations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-green-500 mr-2 mt-0.5" />
                  <p className="text-gray-700">Same-day service for emergencies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-green-500 mr-2 mt-0.5" />
                  <p className="text-gray-700">Transparent, upfront pricing</p>
                </div>
              </div>
              
              <Button className="btn-primary w-full mt-6">
                <span>Schedule Service</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
