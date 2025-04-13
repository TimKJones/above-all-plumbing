import React from 'react';
import { cn } from '@/lib/utils';
import type { ProcessStep as LibProcessStep } from '@/lib/services';

interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

/**
 * Props for ServiceProcess component
 */
interface ServiceProcessProps {
  steps: ProcessStep[] | LibProcessStep[];
  title?: string;
  className?: string;
  headingId?: string;
}

/**
 * Converts a LibProcessStep to a ProcessStep
 */
const adaptProcessStep = (step: LibProcessStep | ProcessStep): ProcessStep => {
  if ('step' in step) {
    // This is a LibProcessStep
    return {
      title: step.step,
      description: step.description
    };
  }
  // Already in the correct format
  return step as ProcessStep;
};

/**
 * ServiceProcess component displays a step-by-step process for a service
 */
const ServiceProcess: React.FC<ServiceProcessProps> = ({
  steps,
  title = "Our Process",
  className,
  headingId = "process-heading"
}) => {
  // Adapt steps to component format if needed
  const adaptedSteps = steps.map(adaptProcessStep);

  return (
    <div className={cn("py-12 bg-white", className)}>
      <div className="container-custom mx-auto">
        <h2 id={headingId} className="text-3xl font-bold text-center text-plumbing-800 mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adaptedSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-plumbing-100 text-plumbing-700 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-plumbing-800">
                  {step.title}
                </h3>
              </div>
              
              {step.icon && (
                <div className="mb-3 text-plumbing-600">
                  {step.icon}
                </div>
              )}
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess; 