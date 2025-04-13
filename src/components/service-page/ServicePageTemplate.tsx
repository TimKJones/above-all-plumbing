import React from 'react';
import type { Service } from '@/lib/services';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';
import ServiceBreadcrumb from '@/components/Breadcrumb';

/**
 * Props for the ServicePageTemplate component
 */
export interface ServicePageTemplateProps {
  service: Service;
  heroComponent?: React.ReactNode;
  descriptionComponent?: React.ReactNode;
  processComponent?: React.ReactNode;
  ctaComponent?: React.ReactNode;
  faqComponent?: React.ReactNode;
}

/**
 * ServicePageTemplate is a reusable template for all service pages.
 * It accepts a service object and renders all required sections.
 * Components can be passed in as props for customization, or they will be rendered from the service data.
 */
const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ 
  service,
  heroComponent,
  descriptionComponent,
  processComponent,
  ctaComponent = <CallToAction />,
  faqComponent
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster />
      
      {/* Main content container */}
      <main className="container-custom">
        {/* Breadcrumb navigation removed */}
        
        {/* Hero section - Contains the H1 heading */}
        <section className="py-12" aria-labelledby="service-title">
          {heroComponent || (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Placeholder for ServiceHero */}
              <div className="relative h-64 bg-plumbing-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-plumbing-700/40 to-plumbing-800/60"></div>
                <h1 id="service-title" className="text-4xl font-bold text-white z-10">{service.title}</h1>
              </div>
            </div>
          )}
        </section>
        
        {/* Description and Benefits section */}
        <section className="py-8" aria-labelledby="service-description-heading">
          {descriptionComponent || (
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Placeholder for ServiceDescription */}
              <h2 id="service-description-heading" className="text-2xl font-bold text-gray-800 mb-4 sr-only">Service Description</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-4">{service.shortDescription}</p>
                <div className="whitespace-pre-line">{service.fullDescription}</div>
              </div>
            </div>
          )}
        </section>
        
        {/* Service Process Steps visualization */}
        <section className="py-8" aria-labelledby="service-process-heading">
          {processComponent || (
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Placeholder for ServiceProcess */}
              <h2 id="service-process-heading" className="text-2xl font-bold text-gray-800 mb-4">Our Process</h2>
              <ol className="list-decimal pl-5 space-y-3">
                {service.processList.map((process, index) => (
                  <li key={index} className="pl-2">
                    <h3 className="font-semibold inline">{process.step}:</h3> {process.description}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>
        
        {/* CTA section */}
        <section className="py-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">Contact Us</h2>
          {ctaComponent}
        </section>
        
        {/* FAQ section */}
        <section className="py-8" aria-labelledby="faq-heading">
          {faqComponent || (
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Placeholder for ServiceFAQ */}
              <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ServicePageTemplate; 