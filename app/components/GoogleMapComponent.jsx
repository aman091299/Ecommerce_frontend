'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GeoLocation from './GeoLocation';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};

const GoogleMapComponent = () => {
  return (
    <div>
    {/* <GeoLocation/> */}
     {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>  */}
    </div>
  );
};

export default GoogleMapComponent;