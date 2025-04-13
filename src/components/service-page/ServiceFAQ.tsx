import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ } from '@/lib/services';

/**
 * Props for the ServiceFAQ component
 */
interface ServiceFAQProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
  headingId?: string;
}

/**
 * Props for the individual FAQ item
 */
interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}

/**
 * FAQItem component renders an individual FAQ with expandable answer
 */
const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggleOpen, index }) => {
  const headingId = `faq-question-${index}`;
  const contentId = `faq-answer-${index}`;
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headingId}
      >
        <h3 className="text-lg font-semibold text-plumbing-700">
          {faq.question}
        </h3>
        <span className="ml-4 flex-shrink-0 text-plumbing-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      {/* FAQ answer with smooth height transition */}
      <div
        id={contentId}
        aria-labelledby={headingId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="pb-4 pr-4 text-gray-600">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

/**
 * ServiceFAQ component displays an accordion of frequently asked questions
 * for a service page with expandable answers.
 */
const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  className,
  headingId = "faq-heading"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs.length) return null;

  return (
    <div className={cn("bg-white rounded-lg shadow-md p-8", className)}>
      <div className="max-w-4xl mx-auto">
        <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-plumbing-800 mb-8">{title}</h2>
        
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ; 