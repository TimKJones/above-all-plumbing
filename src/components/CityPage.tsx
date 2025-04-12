
import React from 'react';
import { PhoneCall, ArrowRight, MapPin, Star, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface CityPageProps {
  city: string;
  headline?: string;
  subheadline?: string;
  introText?: string;
  neighborhoods?: string[];
  testimonial?: {
    name: string;
    text: string;
  };
  services?: ServiceItem[];
  features?: FeatureItem[];
  ctaHeadline?: string;
  ctaText?: string;
}

const CityPage: React.FC<CityPageProps> = ({ 
  city, 
  headline, 
  subheadline, 
  introText, 
  neighborhoods, 
  testimonial,
  services,
  features,
  ctaHeadline,
  ctaText
}) => {
  // Default values if props aren't provided
  const defaultHeadline = `Professional Plumbing Services in ${city}`;
  const defaultSubheadline = `Reliable, high-quality plumbing solutions for ${city} residents and businesses.`;
  const defaultCtaHeadline = `Need a Plumber in ${city}?`;
  const defaultCtaText = `Contact us today for professional plumbing services.`;

  return (
    <div>
      <Navbar />
      <div className="pt-10">
        {/* Hero Section - Clean, impactful headline and subheadline */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-plumbing-600 mb-4">
                {headline || defaultHeadline}
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {subheadline || defaultSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-plumbing-600 hover:bg-plumbing-700 flex items-center gap-2">
                  <PhoneCall size={18} />
                  <span>Call Now: (615) 555-1234</span>
                </Button>
                <Button size="lg" variant="outline" className="border-plumbing-500 text-plumbing-500 hover:bg-plumbing-50 flex items-center gap-2">
                  <span>Request a Free Quote</span>
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - Dedicated section below hero */}
        {introText && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {introText}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Services Section - Visual service cards with icons */}
        {services && services.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
                Our Services in {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex">
                    <div className="mr-4 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-plumbing-500">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section - Better visual emphasis */}
        {features && features.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
                Why Choose Our {city} Plumbers
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-plumbing-500">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial and Neighborhoods Section */}
        {(testimonial || neighborhoods) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-plumbing-600 mb-8 text-center">
                Trusted in {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonial && (
                  <Card className="shadow-md bg-white overflow-hidden">
                    <div className="bg-plumbing-600 py-3 px-6">
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 fill-current text-yellow-300 mr-1" />
                        <Star className="h-4 w-4 fill-current text-yellow-300 mr-1" />
                        <Star className="h-4 w-4 fill-current text-yellow-300 mr-1" />
                        <Star className="h-4 w-4 fill-current text-yellow-300 mr-1" />
                        <Star className="h-4 w-4 fill-current text-yellow-300 mr-1" />
                        <span className="ml-2 text-sm font-medium">5.0 Rating</span>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <blockquote className="italic text-gray-700 mb-4">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="bg-plumbing-100 rounded-full p-2 mr-3">
                          <Users className="h-4 w-4 text-plumbing-600" />
                        </div>
                        <p className="font-semibold text-gray-800">— {testimonial.name}, {city} resident</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {neighborhoods && neighborhoods.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-plumbing-500 mr-2" />
                      <h3 className="text-xl font-semibold text-plumbing-500">Areas We Serve in {city}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We proudly provide plumbing services throughout {city}, including:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {neighborhoods.map((neighborhood, index) => (
                        <span key={index} className="bg-plumbing-50 text-plumbing-600 px-3 py-1 rounded-full text-sm flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - Strong closing call-to-action */}
        <section className="py-12 bg-plumbing-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {ctaHeadline || defaultCtaHeadline}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {ctaText || defaultCtaText}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-plumbing-600 hover:bg-gray-100 text-lg py-6 px-8 h-auto">
                <PhoneCall className="mr-2" size={20} />
                Call (615) 555-1234
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-plumbing-700 text-lg py-6 px-8 h-auto">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CityPage;
