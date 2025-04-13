import React from 'react';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceFeaturesProps {
  features: Feature[];
  title?: string;
  description?: string;
  headingTag?: 'h2' | 'h3' | 'h4';
  className?: string;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  features,
  title = 'Key Features',
  description,
  headingTag = 'h2',
  className,
}) => {
  const HeadingTag = headingTag;
  
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HeadingTag className="text-3xl font-bold text-plumbing-900 mb-4">
            {title}
          </HeadingTag>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {feature.icon && (
                <div className="mb-4 text-plumbing-600">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-plumbing-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures; 