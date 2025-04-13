import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

/**
 * Props for ServiceHero component
 */
interface ServiceHeroProps {
  title: string;
  description?: string;
  imageAlt?: string;
  introText?: string;
  className?: string;
}

/**
 * ServiceHero component displays the hero section for a service page
 * with a consistent plumbing van background and blue overlay
 */
const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  imageAlt,
  introText,
  className,
}) => {
  // Generate descriptive alt text if not provided
  const altText = imageAlt || `${title} service - Nashville Plumbing Vista`;
  
  return (
    <div 
      className={cn(
        "relative flex flex-col items-center pt-24 pb-16 md:pb-24 px-4",
        className
      )}
    >
      {/* Nashville plumbing van background with blue overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/nashville-plumbing-van.jpg)` }}
        role="img"
        aria-label={altText}
      >
        {/* Blue translucent overlay with increased opacity */}
        <div className="absolute inset-0 bg-plumbing-900/90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center">
        <h1 
          className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          {title}
        </h1>
        
        <p 
          className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
        >
          {introText || description}
        </p>
        
        <div className="flex flex-col items-center gap-5 max-w-md mx-auto">
          <Button asChild size="lg" className="w-full py-6 text-lg font-medium bg-plumbing-500 hover:bg-plumbing-600">
            <Link to="/schedule-visit">Schedule a Visit</Link>
          </Button>
          
          <div className="flex items-center justify-center text-white font-medium text-lg">
            <PhoneCall size={20} className="mr-3" />
            <span>Call Now: (615) 555-1234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

 