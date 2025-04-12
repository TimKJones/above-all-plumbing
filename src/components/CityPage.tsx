
import React from 'react';
import { Wrench, PhoneCall, Clock, Droplet, Flame, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

interface CityPageProps {
  city: string;
  neighborhoods?: string[];
  testimonial?: {
    name: string;
    text: string;
  };
}

const CityPage: React.FC<CityPageProps> = ({ city, neighborhoods, testimonial }) => {
  // Default content for all cities
  let introText = `Reliable, high-quality plumbing solutions for ${city} residents and businesses. 
                From emergency repairs to installation projects, we've got you covered.`;
  
  // Nashville-specific content
  if (city === "Nashville") {
    introText = `When plumbing problems strike in Nashville, TN, our team of licensed professionals is ready to respond with fast, reliable service. Whether it's a burst pipe in the middle of the night or a scheduled water heater installation, we provide comprehensive plumbing solutions 24/7 for all Nashville neighborhoods. With decades of combined experience and a commitment to quality workmanship, our Nashville plumbers arrive promptly, diagnose issues accurately, and implement lasting solutions that exceed industry standards—all at fair, transparent prices.`;
  }

  return (
    <div>
      <Navbar />
      <div className="pt-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-plumbing-600 mb-4">
                Professional Plumbing Services in {city}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {introText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-plumbing-600 hover:bg-plumbing-700 flex items-center gap-2">
                  <PhoneCall size={18} />
                  <span>Call Now: (615) 555-1234</span>
                </Button>
                <Button variant="outline" className="border-plumbing-500 text-plumbing-500 hover:bg-plumbing-50">
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
              Our Services in {city}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-plumbing-100 p-3 rounded-full mr-4">
                    <Clock className="text-plumbing-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emergency Plumbing in {city}</h3>
                    <p className="text-gray-600">
                      {city === "Nashville" 
                        ? "Plumbing emergencies don't wait for business hours. Our 24/7 emergency team is always ready to respond to Nashville homes and businesses, with fully-stocked trucks and experienced technicians available day or night."
                        : `We provide 24/7 emergency plumbing services for ${city} residents and businesses, ensuring help is always available when you need it most.`
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-plumbing-100 p-3 rounded-full mr-4">
                    <Flame className="text-plumbing-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Water Heater Services</h3>
                    <p className="text-gray-600">
                      {city === "Nashville" 
                        ? "From traditional tank models to energy-efficient tankless systems, our Nashville technicians specialize in water heater repair, maintenance, and installation. We help you select the right system for your home's needs and budget."
                        : `We provide comprehensive water heater services in ${city}, including repairs, maintenance, and installation of both traditional and tankless systems.`
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-plumbing-100 p-3 rounded-full mr-4">
                    <Trash2 className="text-plumbing-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Drain & Sewer Services</h3>
                    <p className="text-gray-600">
                      {city === "Nashville" 
                        ? "Our advanced diagnostic equipment quickly identifies drain clogs and sewer line issues in Nashville properties. From routine drain cleaning to complex sewer line repairs, we restore proper flow with minimal disruption to your property."
                        : `Our team specializes in comprehensive drain and sewer services in ${city}, from routine maintenance to emergency repairs.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for {city} Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
              Why {city} Residents Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-plumbing-500">Local Expertise</h3>
                <p className="text-gray-600">
                  Our plumbers have years of experience working in {city}, and understand the unique plumbing challenges in this area.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-plumbing-500">Transparent Pricing</h3>
                <p className="text-gray-600">
                  We provide upfront pricing with no hidden fees or surprises. Know what you'll pay before we start the work.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-plumbing-500">Guaranteed Satisfaction</h3>
                <p className="text-gray-600">
                  Our work is backed by a 100% satisfaction guarantee. We're not happy until you're happy with our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial and Neighborhoods Section - Only show if city has specific content */}
        {(testimonial || neighborhoods) && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
                Trusted in {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonial && (
                  <Card className="shadow-md">
                    <CardContent className="pt-6">
                      <blockquote className="italic text-gray-700 mb-4">
                        "{testimonial.text}"
                      </blockquote>
                      <p className="font-semibold text-right">— {testimonial.name}, {city} resident</p>
                    </CardContent>
                  </Card>
                )}
                
                {neighborhoods && neighborhoods.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-plumbing-500">Areas We Serve in {city}</h3>
                    <p className="text-gray-700">
                      We proudly provide plumbing services throughout {city}, including {neighborhoods.join(', ')}, and all surrounding areas.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 bg-plumbing-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {city === "Nashville" 
                ? "Need a Nashville plumber today?" 
                : `Need a ${city} plumber?`}
            </h2>
            <p className="text-xl mb-8">
              {city === "Nashville" 
                ? "Call us now or request a free quote!" 
                : "Contact us today for professional plumbing services."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-plumbing-600 hover:bg-gray-100 text-lg py-6 px-8">
                <PhoneCall className="mr-2" size={20} />
                Call (615) 555-1234
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-plumbing-700 text-lg py-6 px-8">
                Request Free Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CityPage;
