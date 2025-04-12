import React from 'react';
import { Wrench, PhoneCall, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

interface CityPageProps {
  city: string;
}

const CityPage: React.FC<CityPageProps> = ({ city }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-plumbing-600 mb-4">
                Professional Plumbing Services in {city}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Reliable, high-quality plumbing solutions for {city} residents and businesses. 
                From emergency repairs to installation projects, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex items-center gap-2">
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
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
              Our Services in {city}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-plumbing-100 p-3 rounded-full mr-4">
                    <Wrench className="text-plumbing-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Residential Plumbing</h3>
                    <p className="text-gray-600">
                      We provide comprehensive plumbing services for {city} homes, from fixing leaky faucets to complete repiping projects.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-plumbing-100 p-3 rounded-full mr-4">
                    <Clock className="text-plumbing-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">
                      Our team is always ready to respond to plumbing emergencies in {city}, day or night, weekends and holidays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for {city} Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
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
      </div>
    </div>
  );
};

export default CityPage;
