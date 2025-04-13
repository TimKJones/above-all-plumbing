import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import services from '@/lib/services';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const ServicesPage: React.FC = () => {
  // Structured data for SEO (JSON-LD format)
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}` 
    : 'https://nashville-plumbing-vista.com'; // Fallback URL
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': `${baseUrl}/services`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Our Plumbing Services | Nashville Plumbing Vista"
        description="Explore our comprehensive plumbing services including emergency repairs, drain cleaning, water heater installation, and more."
        keywords={["plumbing services", "emergency plumbing", "Nashville plumbers", "drain cleaning", "water heater repair"]}
        canonicalUrl="/services"
      />
      
      <Navbar />
      
      <main className="container-custom py-8">
        {/* JSON-LD structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
        />
        
        {/* Breadcrumb */}
        <div className="py-3">
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
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-plumbing-800 mb-6">Our Professional Plumbing Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From emergencies to planned renovations, our expert plumbers deliver quality solutions for all your plumbing needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {services.map(service => (
            <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-plumbing-100">
                {service.heroImage && (
                  <img 
                    src={service.heroImage} 
                    alt={`${service.title} - Professional plumbing service`}
                    className="object-cover w-full h-full"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plumbing-900/60" />
              </div>
              
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-plumbing-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`}>
                  <Button variant="outline" className="mt-2 w-full group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage; 