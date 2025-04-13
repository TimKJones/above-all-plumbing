import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
  headingTag?: 'h2' | 'h3' | 'h4';
  headingId?: string;
  className?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  images,
  title = "Our Work",
  headingTag = 'h2',
  headingId = "gallery-heading",
  className,
}) => {
  const HeadingTag = headingTag;

  return (
    <section className={cn("py-12 bg-white", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <HeadingTag 
            id={headingId}
            className="text-3xl font-bold text-plumbing-900 mb-8 text-center"
          >
            {title}
          </HeadingTag>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
              />
              {image.caption && (
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery; 