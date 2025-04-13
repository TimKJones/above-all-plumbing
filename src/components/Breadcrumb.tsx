import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';

interface ServiceBreadcrumbProps {
  serviceName: string;
  serviceSlug: string;
}

/**
 * Breadcrumb navigation component for service pages
 * Shows the path: Home > Services > [Service Name]
 * Includes structured data markup for SEO
 */
const ServiceBreadcrumb: React.FC<ServiceBreadcrumbProps> = ({ serviceName, serviceSlug }) => {
  // Create URLs for structured data
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}` 
    : 'https://nashville-plumbing-vista.com'; // Fallback URL
  
  const homeUrl = baseUrl;
  const servicesUrl = `${baseUrl}/services`;
  const serviceUrl = `${baseUrl}/services/${serviceSlug}`;

  // Structured data for SEO (JSON-LD format)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': homeUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': servicesUrl
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': serviceName,
        'item': serviceUrl
      }
    ]
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />

      {/* Visual breadcrumb component */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/services">Services</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          
          <BreadcrumbItem>
            <BreadcrumbPage>{serviceName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default ServiceBreadcrumb; 