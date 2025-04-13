import React from 'react';
import type { Service } from '@/lib/services';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';
import ServiceBreadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';

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
      
      {/* Hero section - Contains the H1 heading - Now full width */}
      {heroComponent || (
        <div className="bg-white shadow-md overflow-hidden">
          {/* Placeholder for ServiceHero */}
          <div className="relative h-64 bg-plumbing-100 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-plumbing-700/40 to-plumbing-800/60"></div>
            <h1 id="service-title" className="text-4xl font-bold text-white z-10">{service.title}</h1>
          </div>
        </div>
      )}
      
      {/* Description and Benefits section - Now full width */}
      <section className="bg-white py-8" aria-labelledby="service-description-heading">
        <div className="container-custom mx-auto">
          {descriptionComponent || (
            <div className="p-6">
              {/* Placeholder for ServiceDescription */}
              <h2 id="service-description-heading" className="text-2xl font-bold text-gray-800 mb-4 sr-only">Service Description</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-4">{service.shortDescription}</p>
                <div className="whitespace-pre-line">{service.fullDescription}</div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Service Process Steps visualization - Now full width */}
      <section className="bg-white py-8" aria-labelledby="service-process-heading">
        <div className="container-custom mx-auto">
          {processComponent || (
            <div className="p-6">
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
        </div>
      </section>
      
      {/* CTA section - Now full width */}
      <section className="py-8" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="sr-only">Contact Us</h2>
        {ctaComponent}
      </section>
      
      {/* FAQ section - Now full width */}
      <section className="bg-white py-8" aria-labelledby="faq-heading">
        <div className="container-custom mx-auto">
          {faqComponent || (
            <div className="p-6">
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate; 