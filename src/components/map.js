import React from "react";
import GoogleMapReact from "google-map-react";
import iss from "./iss.png";

const apiKey = process.env.REACT_APP_API_KEY;

function Map({ center, zoom }) {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultcenter={center}
        defaultZoom={zoom}
      >
        <img
          src={iss}
          lat={center.lat}
          lng={center.lng}
          alt="ISS icon"
          className="iss-icon"
        />
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 56.11816,
    lng: 10.19289,
  },
  zoom: 6,
};

export default Map;
