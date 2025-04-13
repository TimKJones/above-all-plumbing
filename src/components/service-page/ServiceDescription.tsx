import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

/**
 * Props for the ServiceDescription component
 */
interface ServiceDescriptionProps {
  shortDescription: string;
  fullDescription: string;
  benefits?: string[];
  className?: string;
}

/**
 * ServiceDescription component displays a detailed description of a service
 * along with a list of benefits where applicable.
 */
const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  shortDescription,
  fullDescription,
  benefits = [],
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Visually hidden heading for accessibility */}
        <h2 id="service-description-heading" className="sr-only">Service Description</h2>
        
        {/* Short description with larger, emphasized text */}
        <p className="text-xl md:text-2xl font-medium text-plumbing-800 mb-6 leading-relaxed">
          {shortDescription}
        </p>
        
        {/* Main description */}
        <div className="prose prose-lg max-w-none mb-10 text-gray-700 whitespace-pre-line">
          {fullDescription}
        </div>
        
        {/* Benefits section - only show if there are benefits */}
        {benefits.length > 0 && (
          <div className="mt-8 bg-plumbing-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-plumbing-800 mb-4">
              Key Benefits
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-plumbing-600">
                    <Check size={18} strokeWidth={3} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDescription; 