import './App.css';
import Map from './components/map';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState(10.19289);
  const [latitude, setLatitude] = useState(56.11816);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setLoading(true);
    const res = await axios.get('http://api.open-notify.org/iss-now.json');
    const { longitude, latitude } = await res.data.iss_position;
    console.log(res.data);

    setLongitude(parseFloat(longitude));
    setLatitude(parseFloat(latitude));
    setLoading(false);
  };

  return (
    <div className="App">
      {!loading ? (
        <Map center={{ lat: latitude, lng: longitude }} />
      ) : (
        <h1>Loading...</h1>
      )}
      <Map />
    </div>
  );
}

export default App;
