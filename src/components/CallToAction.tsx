import React from 'react';

const CallToAction = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="container-custom">
        {/* CTA Banner */}
        <div className="bg-plumbing-600 text-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-10">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Ready for Professional Plumbing Service?</h3>
              <p className="text-plumbing-100">Our expert plumbers are just a phone call away!</p>
            </div>
            <div>
              <a href="tel:6155551234" className="inline-block py-3 px-6 bg-white text-plumbing-600 font-semibold rounded-md hover:bg-plumbing-50 transition-colors">
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