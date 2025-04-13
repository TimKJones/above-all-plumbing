import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        <div className="absolute inset-0 bg-plumbing-600/80"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          {title}
        </h1>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {introText || description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Get Free Estimate</Link>
          </Button>
          
          <Button variant="outline" asChild size="lg">
            <Link to="tel:+16155555555">Call (615) 555-5555</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

 