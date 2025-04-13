import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-plumbing-50">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready for Professional Plumbing Service?</h3>
          <p className="text-gray-600 mb-8">Our expert plumbers are just a phone call away!</p>
          
          <div className="flex flex-col items-center gap-5">
            <Link to="/schedule-visit" className="inline-block py-3 px-8 bg-plumbing-600 text-white font-semibold rounded-md hover:bg-plumbing-700 transition-colors">
              Schedule a Visit
            </Link>
            
            <div className="flex items-center justify-center text-plumbing-600 font-medium">
              <PhoneCall size={20} className="mr-2" />
              <span>Call Now: (615) 555-1234</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 