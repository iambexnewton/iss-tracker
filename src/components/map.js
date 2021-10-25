import React from 'react';

import GoogleMapReact from 'google-map-react';

import iss from './iss.png';

const apiKey = process.env.REACT_APP_API_KEY;

function Map({ center, zoom }) {
  return (
    <div className="map-container">
      <googleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultcenter={center}
        defaultZoom={zoom}
      >
        <img src={iss} alt="ISS icon" className="iss-icon" />
      </googleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 56.11816,
    lng: 10.19289,
  },
  zoom: 10,
};

export default Map;
