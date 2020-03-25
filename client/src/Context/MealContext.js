import { createContext, useReducer } from 'react';
import mealReducer from '../Reducers/mealReducer';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
    const [mealPlan, dispatchMeals] = useReducer(mealReducer, []);
    const [newItem, dispatchNewItem] = useNewItem();
    return (
        <MealContext.Provider value={
            mealPlan, 
            dispatchMeals
        }>
            {children}
        </MealContext.Provider>
    )
}