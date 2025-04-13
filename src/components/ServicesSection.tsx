import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Wrench, Thermometer, ShowerHead, Waves, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import services from '@/lib/services';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, slug, className }: ServiceCardProps) => (
  <Card className={cn("border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full", className)}>
    <CardContent className="p-6">
      <div className="mb-4 bg-plumbing-50 w-14 h-14 rounded-full flex items-center justify-center text-plumbing-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link to={`/services/${slug}`} className="inline-flex items-center text-plumbing-600 hover:text-plumbing-700 font-medium">
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </CardContent>
  </Card>
);

// Creating a custom PipeIcon since it's not in lucide-react
const PipeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 7h5m10 0h3M8 7h10M6 7v8a3 3 0 0 0 3 3h0" />
    <circle cx="16" cy="15" r="2" />
  </svg>
);

const ServicesSection = () => {
  // Find services by slug
  const findServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
  
  // Emergency Repairs
  const emergencyService = findServiceBySlug('emergency-repairs');
  // Drain Cleaning
  const drainService = findServiceBySlug('drain-cleaning');
  // Water Heater Services
  const waterHeaterService = findServiceBySlug('water-heater-services');
  // Bathroom Remodeling
  const bathroomService = findServiceBySlug('bathroom-remodeling');
  // Leak Detection
  const leakService = findServiceBySlug('leak-detection');
  // Pipe Repair & Replacement
  const pipeService = findServiceBySlug('pipe-repair-replacement');

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-plumbing-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Professional Plumbing Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, our licensed plumbers provide reliable solutions to keep your home's plumbing systems running smoothly.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title={emergencyService?.title || "Emergency Repairs"}
            description={emergencyService?.shortDescription || "24/7 service for burst pipes, overflows, and other plumbing emergencies that require immediate attention."}
            icon={<Wrench size={24} />}
            slug={emergencyService?.slug || "emergency-repairs"}
          />
          
          <ServiceCard
            title={drainService?.title || "Drain Cleaning"}
            description={drainService?.shortDescription || "Professional solutions for clogged drains, using the latest tools to clear blockages without damaging your pipes."}
            icon={<Droplet size={24} />}
            slug={drainService?.slug || "drain-cleaning"}
          />
          
          <ServiceCard
            title={waterHeaterService?.title || "Water Heater Services"}
            description={waterHeaterService?.shortDescription || "Installation, repair, and maintenance of traditional and tankless water heaters for consistent hot water."}
            icon={<Thermometer size={24} />}
            slug={waterHeaterService?.slug || "water-heater-services"}
          />
          
          <ServiceCard
            title={bathroomService?.title || "Bathroom Remodeling"}
            description={bathroomService?.shortDescription || "Expert installation of fixtures, toilets, and plumbing during your bathroom renovation project."}
            icon={<ShowerHead size={24} />}
            slug={bathroomService?.slug || "bathroom-remodeling"}
          />
          
          <ServiceCard
            title={leakService?.title || "Leak Detection"}
            description={leakService?.shortDescription || "Advanced technology to locate hidden leaks in walls, floors, and underground pipes with minimal disruption."}
            icon={<Waves size={24} />}
            slug={leakService?.slug || "leak-detection"}
          />
          
          <ServiceCard
            title={pipeService?.title || "Pipe Repair & Replacement"}
            description={pipeService?.shortDescription || "Comprehensive solutions for damaged, corroded, or outdated pipes to prevent leaks and improve water quality."}
            icon={<PipeIcon width={24} height={24} />}
            slug={pipeService?.slug || "pipe-repair-replacement"}
          />
        </div>
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="px-8">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
