import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

/**
 * Props for the RelatedServices component
 */
interface RelatedServicesProps {
  services: Service[];
  title?: string;
  className?: string;
  headingId?: string;
}

/**
 * RelatedServices component displays a grid of related services
 * with links to their respective pages.
 */
const RelatedServices: React.FC<RelatedServicesProps> = ({
  services,
  title = "Related Services",
  className,
  headingId = "related-services-heading"
}) => {
  if (!services.length) return null;

  // Function to generate descriptive alt text for service images
  const generateImageAlt = (service: Service): string => {
    return `${service.title} service - Nashville Plumbing Vista`;
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-md p-8", className)}>
      <div className="max-w-6xl mx-auto">
        <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-plumbing-800 mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.slug}`}
              className="group block bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="aspect-video bg-plumbing-100 relative overflow-hidden">
                {service.heroImage && (
                  <img 
                    src={service.heroImage} 
                    alt={generateImageAlt(service)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-plumbing-700 mb-2 group-hover:text-plumbing-600">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.shortDescription}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-plumbing-600">
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices; 