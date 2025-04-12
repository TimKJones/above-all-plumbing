
import React from 'react';
import CityPage from '@/components/CityPage';
import { WrenchIcon, DropletIcon, TrashIcon, PenLineIcon, CheckCircleIcon } from 'lucide-react';

const Franklin = () => {
  const franklinNeighborhoods = [
    'Downtown Franklin', 'Cool Springs', 'Fieldstone Farms', 
    'Westhaven', 'McKay\'s Mill', 'Berry Farms'
  ];
  
  const testimonial = {
    name: "Michael T.",
    text: "I've been using their plumbing services for my Franklin home for years. They're always prompt, professional, and their work is top-notch. Highly recommend to anyone in the Franklin area!"
  };

  const services = [
    {
      icon: <WrenchIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for all Franklin homes and businesses. Our technicians arrive promptly to diagnose and fix your plumbing issues."
    },
    {
      icon: <DropletIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Water Heater Services",
      description: "Expert installation, repair, and maintenance of all water heater types. We help Franklin residents find the most efficient solutions."
    },
    {
      icon: <TrashIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to eliminate clogs and ensure your plumbing system flows smoothly."
    },
    {
      icon: <PenLineIcon className="h-8 w-8 text-plumbing-500" />,
      title: "Pipe Repair & Replacement",
      description: "Quality pipe repair and replacement services for Franklin homes, using durable materials and proper techniques."
    }
  ];

  const features = [
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Licensed Experts",
      description: "Fully licensed and insured plumbing professionals."
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden costs."
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-plumbing-500" />,
      title: "Quality Guaranteed",
      description: "We stand behind our work with satisfaction guarantees."
    }
  ];

  const introText = "Our Franklin plumbing team delivers reliable, professional service for all your plumbing needs. From emergency repairs to routine maintenance, we provide quality workmanship and excellent customer service throughout Franklin, TN.";

  return (
    <CityPage 
      city="Franklin" 
      headline="Plumbing Services in Franklin, TN"
      subheadline="Reliable, professional plumbing for Franklin homes and businesses."
      neighborhoods={franklinNeighborhoods}
      testimonial={testimonial}
      introText={introText}
      services={services}
      features={features}
      ctaHeadline="Need a Plumber in Franklin?"
      ctaText="Our professional plumbing team is ready to help with all your Franklin plumbing needs. Contact us today for prompt, reliable service."
    />
  );
};

export default Franklin;
