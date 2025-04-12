
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

  return (
    <CityPage 
      city="Nashville" 
      neighborhoods={nashvilleNeighborhoods}
      testimonial={testimonial}
    />
  );
};

export default Nashville;
