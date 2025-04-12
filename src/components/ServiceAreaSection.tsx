import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import GoogleMapComponent from './GoogleMap';

// Error fallback component for the map
const MapErrorFallback = () => (
  <div 
    className="bg-gray-100 rounded-lg h-[300px] flex items-center justify-center mb-6" 
    aria-label="Map error"
  >
    <div className="text-center">
      <p className="text-gray-500 mb-2">Unable to load map</p>
      <p className="text-sm text-gray-400">Please check your connection and try again</p>
    </div>
  </div>
);

const ServiceAreaSection = () => {
  // Nashville center coordinates
  const nashvilleCoordinates = {
    lat: 36.1627,
    lng: -86.7816
  };

  // Business location (using Nashville coordinates for now)
  const businessLocation = {
    lat: 36.1627,
    lng: -86.7816
  };

  return (
    <section className="py-16 bg-white" aria-labelledby="service-area-heading">
      <div className="container-custom">
        <h2 id="service-area-heading" className="text-3xl font-bold text-center text-plumbing-600 mb-12">
          SERVING THE ENTIRE NASHVILLE METRO AREA, INCLUDING:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Cities */}
          <div>
            <div className="mb-8">
              <h3 id="cities-heading" className="text-xl font-semibold mb-4 text-plumbing-600 border-b pb-2 border-gray-200">
                CITIES IN THE NASHVILLE METRO AREA
              </h3>
              <div className="flex flex-col space-y-4 mt-6" aria-labelledby="cities-heading">
                <Link to="/franklin" className="text-plumbing-500 hover:text-plumbing-700 hover:underline flex items-center">
                  <MapPin size={18} className="mr-2" aria-hidden="true" />
                  Franklin
                </Link>
                <Link to="/nashville" className="text-plumbing-500 hover:text-plumbing-700 hover:underline flex items-center">
                  <MapPin size={18} className="mr-2" aria-hidden="true" />
                  Nashville
                </Link>
                <Link to="/brentwood" className="text-plumbing-500 hover:text-plumbing-700 hover:underline flex items-center">
                  <MapPin size={18} className="mr-2" aria-hidden="true" />
                  Brentwood
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Map & Contact Info */}
          <div>
            {/* Google Map with Error Boundary */}
            <div className="mb-6">
              <ErrorBoundary FallbackComponent={MapErrorFallback}>
                <GoogleMapComponent 
                  center={nashvilleCoordinates}
                  zoom={11}
                  markerPosition={businessLocation}
                  height="300px"
                />
              </ErrorBoundary>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">Owner:</h4>
                  <p className="font-medium">John Smith</p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">Location:</h4>
                  <p className="font-medium">123 Main Street, Suite 100</p>
                  <p className="font-medium">Nashville, TN 37201</p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">Phone Number:</h4>
                  <p className="font-medium">(615) 555-1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection; 