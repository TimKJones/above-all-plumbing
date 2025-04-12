
import React from 'react';
import CityPage from '@/components/CityPage';

const Nashville = () => {
  const nashvilleNeighborhoods = [
    'East Nashville', '12 South', 'The Nations', 'Germantown', 
    'Belle Meade', 'Green Hills', 'Sylvan Park', 'Downtown'
  ];
  
  const testimonial = {
    name: "Jennifer M.",
    text: "When my water heater failed on a Sunday evening, their team was at my East Nashville home within an hour. The technician quickly diagnosed the issue, explained my options, and had a new unit installed that same day. Professional, fast, and fairly priced - I wouldn't call anyone else!"
  };

  const services = [
    {
      title: "Emergency Plumbing in Nashville",
      description: "Our 24/7 emergency team is always ready to respond to Nashville homes and businesses. With fully-stocked trucks and experienced technicians available day or night, we'll get your plumbing emergency resolved quickly and correctly."
    },
    {
      title: "Water Heater Services",
      description: "From traditional tank models to energy-efficient tankless systems, our Nashville technicians specialize in water heater repair, maintenance, and installation. We help you select the right system for your home's needs and budget."
    },
    {
      title: "Drain Cleaning & Sewer Help",
      description: "Our advanced diagnostic equipment quickly identifies drain clogs and sewer line issues in Nashville properties. From routine drain cleaning to complex sewer line repairs, we restore proper flow with minimal disruption."
    },
    {
      title: "Leak Detection & Pipe Repair",
      description: "Using the latest technology, we can locate even the most elusive leaks without damaging your walls or floors. Our technicians are experts at repairing and replacing damaged pipes with durable solutions built to last."
    }
  ];

  const introText = "When plumbing problems strike in Nashville, our licensed professionals respond with fast, reliable service. We provide comprehensive solutions 24/7 for all Nashville neighborhoods, delivering quality workmanship and honest, transparent pricing on every job.";

  return (
    <CityPage 
      city="Nashville" 
      headline="Plumbing Services in Nashville, TN"
      subheadline="Licensed, 24/7 plumbing help for homes and businesses in Nashville."
      neighborhoods={nashvilleNeighborhoods}
      testimonial={testimonial}
      introText={introText}
      services={services}
      ctaHeadline="Need a Plumber in Nashville? We're Ready 24/7."
      ctaText="Whether it's an emergency repair or a scheduled installation, our Nashville plumbing team is just a phone call away. Contact us for upfront pricing and reliable service."
    />
  );
};

export default Nashville;
