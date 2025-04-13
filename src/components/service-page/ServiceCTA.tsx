import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className={cn("bg-plumbing-50 py-8", className)}>
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-plumbing-800 mb-4">
            Ready to Get Started with {serviceName}?
          </h2>
          <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
            Our professional team is ready to help with your {serviceName.toLowerCase()} needs. 
            Contact us today for a consultation or schedule service online.
          </p>
          
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <Button 
              asChild
              size="lg" 
              className="w-full py-6 text-lg font-medium bg-plumbing-500 hover:bg-plumbing-600"
            >
              <Link to="/schedule-visit" className="flex items-center justify-center">
                Schedule a Visit
              </Link>
            </Button>
            <div className="flex items-center justify-center text-plumbing-600 font-medium text-lg">
              <PhoneCall size={20} className="mr-3" />
              <span>Call Now: (615) 555-1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA; 