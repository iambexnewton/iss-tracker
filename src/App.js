import './App.css';
import Map from './components/map';

import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [longitue, setLongitude] = useState(10.19289);
  const [latitude, setLatitude] = useState(56.11816);
  return (
    <div className="App">
      {!loading ? <Map /> : <h1>Loading</h1>}
      <Map />
    </div>
  );
}

export default App;
