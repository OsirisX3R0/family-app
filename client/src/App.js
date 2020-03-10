import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [chicken, setChicken] = useState('');
  useEffect(() => {
    getChicken().then(res => setChicken(res.data));
  }, [])

  const getChicken = () => axios.get('api/chicken');

  return (
    <div className="App">
      {chicken}
    </div>
  );
}

export default App;
