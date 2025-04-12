
import React from 'react';
import CityPage from '@/components/CityPage';
import { WrenchIcon, DropletIcon, TrashIcon, PenLineIcon, CheckCircleIcon } from 'lucide-react';

const Brentwood = () => {
  const brentwoodNeighborhoods = [
    'Brentwood Hills', 'Raintree Forest', 'Governors Club', 
    'Fountainhead', 'Brenthaven', 'Maryland Farms'
  ];
  
  const testimonial = {
    name: "Sarah L.",
    text: "After calling multiple plumbers in Brentwood, I was impressed with their responsiveness and professionalism. They fixed our kitchen sink issue quickly and at a reasonable price. Will definitely use them again!"
  };

  const services = [
    {
      icon: <WrenchIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Emergency Plumbing",
      description: "Fast response emergency plumbing services available 24/7 for Brentwood residents. We arrive quickly to handle any plumbing crisis."
    },
    {
      icon: <DropletIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Water Heater Services",
      description: "Expert installation and repair of traditional and tankless water heaters. We help you find the most efficient option for your Brentwood home."
    },
    {
      icon: <TrashIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Drain & Sewer Services",
      description: "Professional drain cleaning and sewer line services to keep your Brentwood home's plumbing flowing properly."
    },
    {
      icon: <PenLineIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection technology to find and fix hidden leaks with minimal disruption to your Brentwood property."
    }
  ];

  const features = [
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Experienced Team",
      description: "Highly trained plumbers with years of experience."
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Quality Materials",
      description: "We use only high-quality, durable materials."
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our top priority on every job."
    }
  ];

  const introText = "Our professional plumbers provide comprehensive plumbing services throughout Brentwood, TN. With years of experience serving local homes and businesses, we deliver reliable solutions with a focus on quality and customer satisfaction.";

  return (
    <CityPage 
      city="Brentwood" 
      headline="Plumbing Services in Brentwood, TN"
      subheadline="Expert plumbing solutions for Brentwood homes and businesses."
      neighborhoods={brentwoodNeighborhoods}
      testimonial={testimonial}
      introText={introText}
      services={services}
      features={features}
      ctaHeadline="Looking for a Brentwood Plumber?"
      ctaText="Contact our team today for fast, reliable plumbing services throughout the Brentwood area."
    />
  );
};

export default Brentwood;
