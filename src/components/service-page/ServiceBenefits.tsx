import React from 'react';
import { cn } from '@/lib/utils';

interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  title?: string;
  description?: string;
  headingTag?: 'h2' | 'h3' | 'h4';
  className?: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  benefits,
  title = "Benefits",
  description,
  headingTag = 'h2',
  className,
}) => {
  const HeadingTag = headingTag;
  const SubheadingTag = headingTag === 'h2' ? 'h3' : headingTag === 'h3' ? 'h4' : 'h5';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-4">
              {benefit.icon && (
                <div className="text-plumbing-600 mr-4 text-2xl mt-1">
                  {benefit.icon}
                </div>
              )}
              <div>
                <SubheadingTag className="text-xl font-semibold text-plumbing-900 mb-2">
                  {benefit.title}
                </SubheadingTag>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits; 