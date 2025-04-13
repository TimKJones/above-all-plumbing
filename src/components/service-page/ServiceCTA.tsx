import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/**
 * Props for ServiceCTA component
 */
interface ServiceCTAProps {
  serviceName: string;
  className?: string;
  headingId?: string;
}

/**
 * ServiceCTA component provides call-to-action buttons for scheduling
 * and contacting for a particular service
 */
const ServiceCTA: React.FC<ServiceCTAProps> = ({
  serviceName,
  className,
  headingId = "cta-heading"
}) => {
  return (
    <div className={cn("bg-plumbing-50 rounded-lg shadow-md p-8", className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-plumbing-800 mb-4">
          Ready to Get Started with {serviceName}?
        </h2>
        <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
          Our professional team is ready to help with your {serviceName.toLowerCase()} needs. 
          Contact us today for a consultation or schedule service online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="gap-2"
          >
            <PhoneCall size={18} />
            Call Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 bg-white hover:bg-gray-50"
          >
            <Calendar size={18} />
            Schedule Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA; 