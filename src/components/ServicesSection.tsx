import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Wrench, Thermometer, ShowerHead, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <Card className={cn("border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full", className)}>
    <CardContent className="p-6">
      <div className="mb-4 bg-plumbing-50 w-14 h-14 rounded-full flex items-center justify-center text-plumbing-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
            title="Emergency Repairs"
            description="24/7 service for burst pipes, overflows, and other plumbing emergencies that require immediate attention."
            icon={<Wrench size={24} />}
          />
          
          <ServiceCard
            title="Drain Cleaning"
            description="Professional solutions for clogged drains, using the latest tools to clear blockages without damaging your pipes."
            icon={<Droplet size={24} />}
          />
          
          <ServiceCard
            title="Water Heater Services"
            description="Installation, repair, and maintenance of traditional and tankless water heaters for consistent hot water."
            icon={<Thermometer size={24} />}
          />
          
          <ServiceCard
            title="Bathroom Remodeling"
            description="Expert installation of fixtures, toilets, and plumbing during your bathroom renovation project."
            icon={<ShowerHead size={24} />}
          />
          
          <ServiceCard
            title="Leak Detection"
            description="Advanced technology to locate hidden leaks in walls, floors, and underground pipes with minimal disruption."
            icon={<Waves size={24} />}
          />
          
          <ServiceCard
            title="Pipe Repair & Replacement"
            description="Comprehensive solutions for damaged, corroded, or outdated pipes to prevent leaks and improve water quality."
            icon={<PipeIcon width={24} height={24} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
