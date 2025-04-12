import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { mapStyles } from './GoogleMapStyles';

interface GoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markerPosition?: {
    lat: number;
    lng: number;
  };
  height?: string;
  ariaLabel?: string;
}

// Map container styles
const containerStyle = {
  width: '100%',
  height: '300px', // Default height
  borderRadius: '0.5rem', // To match the design
};

// Nashville center coordinates
const defaultCenter = {
  lat: 36.1627,
  lng: -86.7816
};

// Map options to customize the map appearance
const defaultMapOptions = {
  disableDefaultUI: true, // Disable all default UI
  zoomControl: true, // But keep zoom control
  streetViewControl: false,
  mapTypeControl: false,
  gestureHandling: 'cooperative', // Makes it more mobile-friendly
  styles: mapStyles, // Apply our custom map styles
  zoomControlOptions: {
    position: 7 // RightBottom - using the google.maps.ControlPosition value
  },
  // Improved accessibility
  fullscreenControl: false,
  keyboardShortcuts: true,
};

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  center = defaultCenter,
  zoom = 11,
  markerPosition = defaultCenter,
  height = '300px',
  ariaLabel = "Map showing service area in Nashville, Tennessee"
}) => {
  // State for loading indicator
  const [isMapLoading, setIsMapLoading] = useState(true);

  // Load the Google Maps JavaScript API
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    // Lazy loading with callback
    nonce: undefined,
    // For production, add restrictive options
    // authReferrerPolicy: 'origin',
  });

  // State to hold the map instance
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Callback when map loads
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    // Mark that the map has finished loading
    setIsMapLoading(false);
  }, []);

  // Callback when map unmounts
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Set a timeout to handle very slow loading
  useEffect(() => {
    let timerId: number;

    if (isLoaded && isMapLoading) {
      timerId = window.setTimeout(() => {
        // If still loading after 10 seconds, just hide the loading indicator
        setIsMapLoading(false);
      }, 10000);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isLoaded, isMapLoading]);

  // Custom container style with dynamic height
  const customContainerStyle = {
    ...containerStyle,
    height
  };

  // Handle loading state
  if (!isLoaded) {
    return (
      <div 
        style={customContainerStyle}
        className="bg-gray-100 flex items-center justify-center"
        role="alert"
        aria-live="polite"
      >
        <div className="text-center">
          <div className="animate-pulse mb-2">
            <div className="h-8 w-8 mx-auto bg-gray-300 rounded-full"></div>
          </div>
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (loadError) {
    return (
      <div 
        style={customContainerStyle}
        className="bg-gray-100 flex items-center justify-center"
        role="alert"
        aria-live="assertive"
      >
        <p className="text-gray-500">Error loading map</p>
      </div>
    );
  }

  return (
    <div className="map-container relative">
      {isMapLoading && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-lg"
          role="alert"
          aria-live="polite"
        >
          <div className="text-center">
            <div className="animate-pulse mb-2">
              <div className="h-8 w-8 mx-auto bg-gray-300 rounded-full"></div>
            </div>
            <p className="text-gray-600">Initializing map...</p>
          </div>
        </div>
      )}
      <div aria-label={ariaLabel}>
        <GoogleMap
          mapContainerStyle={customContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultMapOptions}
        >
          {/* Marker for the business location */}
          <Marker 
            position={markerPosition} 
            title="Our Location"
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapComponent; 