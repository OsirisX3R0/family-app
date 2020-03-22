import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import useActivePage from '../../Hooks/useActivePage';

const MealPlan = () => {
    useActivePage('Meals');
    
    return <h2>Meal Plan</h2>
}

export default MealPlan;