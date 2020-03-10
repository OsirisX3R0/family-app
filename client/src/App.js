import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    getTypes().then(res => {
      setTypes(res.data)
    });
  }, [])

  const getTypes = () => axios.get('api/groceryTypes');

  return (
    <div className="App">
      <ul>
        {types.map(type => <li key={type._id}>{type.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
