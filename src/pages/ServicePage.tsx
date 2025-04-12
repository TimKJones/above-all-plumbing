import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import services from '@/lib/services';
import type { Service } from '@/lib/services';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';

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

  // Service placeholder content (will be replaced with actual template in Task 3)
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster />
      
      {service && (
        <div className="container-custom py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">{service.shortDescription}</p>
              <div className="whitespace-pre-line">{service.fullDescription}</div>
            </div>
          </div>
          
          {/* Process List Preview */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <ol className="list-decimal pl-5 space-y-3">
              {service.processList.map((process, index) => (
                <li key={index} className="pl-2">
                  <span className="font-semibold">{process.step}:</span> {process.description}
                </li>
              ))}
            </ol>
          </div>
          
          {/* FAQs Preview */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <CallToAction />
        </div>
      )}
    </div>
  );
};

export default ServicePage; 