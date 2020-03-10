import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Layout from './Components/Layout/Layout';
import 'bootswatch/dist/minty/bootstrap.css'

function App() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    getTypes().then(res => {
      setTypes(res.data)
    });
  }, [])

  const getTypes = () => axios.get('api/groceryTypes');

  return (
    <Layout>
      <ul>
        {types.map(type => <li key={type._id}>{type.name}</li>)}
      </ul>
    </Layout>
  );
}

export default App;
