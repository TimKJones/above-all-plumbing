import React from 'react';

const CallToAction = () => {
  return (
    <section className="pb-16 bg-white">
      {/* CTA Banner - Full Width */}
      <div className="bg-gradient-to-b from-white to-plumbing-50 text-gray-800 shadow-xl overflow-hidden border-y border-gray-100">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-10">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Ready for Professional Plumbing Service?</h3>
              <p className="text-gray-600">Our expert plumbers are just a phone call away!</p>
            </div>
            <div>
              <a href="tel:6155551234" className="inline-block py-3 px-6 bg-plumbing-600 text-white font-semibold rounded-md hover:bg-plumbing-700 transition-colors">
                Call (615) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 