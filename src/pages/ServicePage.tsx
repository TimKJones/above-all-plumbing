import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import services from '@/lib/services';
import type { Service } from '@/lib/services';
import { 
  ServicePageTemplate, 
  ServiceHero,
  ServiceDescription,
  ServiceProcess,
  ServiceCTA,
  ServiceFAQ
} from '@/components/service-page';
import SEOHead from '@/components/SEOHead';

/**
 * ServicePage component displays details for a specific service based on the slug in the URL.
 * If the service is not found, it redirects to the NotFound page.
 */
const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    // Find the service that matches the slug parameter
    const foundService = services.find(s => s.slug === slug);
    
    // Short delay to allow for animations/transitions if needed
    const timer = setTimeout(() => {
      if (foundService) {
        setService(foundService);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [slug]);

  // Redirect to 404 page if service not found
  if (notFound) {
    return <Navigate to="/not-found" />;
  }

  // Show loading state while fetching service
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-plumbing-600"></div>
      </div>
    );
  }

  // If service is loaded, render the service page with the template
  if (!service) return null;

  // Extract potential benefits from description (optional enhancement)
  const benefits = service.fullDescription.includes('Benefits:') 
    ? service.fullDescription
        .split('Benefits:')[1]
        .split('\n')
        .filter(line => line.trim().startsWith('- '))
        .map(line => line.trim().substring(2))
    : [];

  // Construct canonical URL
  const canonicalUrl = `/services/${service.slug}`;
  
  // Generate descriptive alt text for the hero image
  const heroImageAlt = `${service.title} - Professional plumbing service by Nashville Plumbing Vista`;

  return (
    <>
      <SEOHead
        title={service.seoMetadata.title}
        description={service.seoMetadata.description}
        keywords={service.seoMetadata.keywords}
        canonicalUrl={canonicalUrl}
        ogImage={service.heroImage}
        ogType="article"
      />
      
      <ServicePageTemplate
        service={service}
        heroComponent={
          <ServiceHero 
            title={service.title}
            imageAlt={heroImageAlt}
            introText={service.shortDescription}
          />
        }
        descriptionComponent={
          <ServiceDescription 
            shortDescription={service.shortDescription}
            fullDescription={service.fullDescription}
            benefits={benefits}
          />
        }
        processComponent={
          <ServiceProcess steps={service.processList} />
        }
        ctaComponent={
          <ServiceCTA serviceName={service.title} />
        }
        faqComponent={
          <ServiceFAQ faqs={service.faqs} />
        }
      />
    </>
  );
};

export default ServicePage; 