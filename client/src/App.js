import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import Groceries from './Components/Groceries/Groceries';
import MealPlan from './Components/Meals/MealPlan';
import './App.scss';
import Layout from './Components/Layout/Layout';
import { GlobalProvider } from './Context/GlobalContext';
import 'bootswatch/dist/minty/bootstrap.css';
import 'react-block-ui/style.css';

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/groceries" component={Groceries} />
        <Route exact path="/meals" component={MealPlan} />
      </Layout>      
    </GlobalProvider>
  );
}

export default App;
