import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const MealPlan = () => {
    const { setActivePage } = useContext(GlobalContext);

    useEffect(() => {
        setActivePage('Meals')
    }, [])
    return <h2>Meal Plan</h2>
}

export default MealPlan;