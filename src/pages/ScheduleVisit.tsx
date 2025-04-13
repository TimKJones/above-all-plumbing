import React from 'react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import ScheduleVisitForm from '../components/schedule/ScheduleVisitForm';
import { Button } from '../components/ui/button';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';

const ScheduleVisit: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Schedule a Visit | Nashville Plumbing Vista"
        description="Schedule a plumbing service visit with Nashville Plumbing. Fill out our simple form to request an appointment with our professional plumbers."
        canonicalUrl="/schedule-visit"
      />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-plumbing-700">Schedule a Visit</h1>
            <p className="text-lg text-gray-600 mb-6">
              Request a service appointment with our professional plumbers.
            </p>
            <div className="flex justify-center">
              <Button className="btn-primary flex items-center gap-2 mb-8">
                <Phone size={18} />
                <span>Call Us: (615) 555-1234</span>
              </Button>
            </div>
          </div>
          
          <ScheduleVisitForm />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ScheduleVisit; 