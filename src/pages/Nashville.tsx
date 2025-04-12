
import React from 'react';
import CityPage from '@/components/CityPage';

const Nashville = () => {
  const nashvilleNeighborhoods = [
    'East Nashville', '12 South', 'The Nations', 'Germantown', 
    'Belle Meade', 'Green Hills', 'Sylvan Park', 'Downtown'
  ];
  
  const testimonial = {
    name: 'Jennifer M.',
    text: "When my water heater failed on a Sunday evening, their team was at my East Nashville home within an hour. The technician quickly diagnosed the issue, explained my options, and had a new unit installed that same day. Professional, fast, and fairly priced - I wouldn't call anyone else!"
  };

  const introText = "When plumbing problems strike in Nashville, TN, our team of licensed professionals is ready to respond with fast, reliable service. Whether it's a burst pipe in the middle of the night or a scheduled water heater installation, we provide comprehensive plumbing solutions 24/7 for all Nashville neighborhoods. With decades of combined experience and a commitment to quality workmanship, our Nashville plumbers arrive promptly, diagnose issues accurately, and implement lasting solutions that exceed industry standards—all at fair, transparent prices.";

  return (
    <CityPage 
      city="Nashville" 
      neighborhoods={nashvilleNeighborhoods}
      testimonial={testimonial}
      introText={introText}
    />
  );
};

export default Nashville;
