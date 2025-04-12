import React, { useCallback, useState } from 'react';
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
  }
};

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  center = defaultCenter,
  zoom = 11,
  markerPosition = defaultCenter,
  height = '300px',
}) => {
  // Load the Google Maps JavaScript API
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  // State to hold the map instance
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Callback when map loads
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // Callback when map unmounts
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

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
      >
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  // Handle error state
  if (loadError) {
    return (
      <div 
        style={customContainerStyle}
        className="bg-gray-100 flex items-center justify-center"
      >
        <p className="text-gray-500">Error loading map</p>
      </div>
    );
  }

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={customContainerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultMapOptions}
      >
        {/* Marker for the business location */}
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent; 