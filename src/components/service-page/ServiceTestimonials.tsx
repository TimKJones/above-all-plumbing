import React from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  headingTag?: 'h2' | 'h3' | 'h4';
  className?: string;
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({
  testimonials,
  title = "What Our Clients Say",
  description,
  headingTag = 'h2',
  className,
}) => {
  const HeadingTag = headingTag;

  return (
    <section className={cn("py-16 bg-slate-50", className)}>
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-plumbing-600 mb-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="font-semibold text-plumbing-900">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials; 