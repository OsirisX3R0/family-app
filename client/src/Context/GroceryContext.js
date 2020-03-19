import React, { useEffect } from 'react';
import { createContext, useReducer, useState } from 'react';
import { getGroceryList, getGroceryTypes } from '../Services/groceryService';

export const GroceryContext = createContext();

const groceryReducer = (state, action) => {
    switch(action.type) {
        case 'SET_GROCERY_LIST':
            return action.list;
        case 'ADD_GROCERY_ITEM':
            return [...state, action.item];
        case 'DELETE_GROCERY_ITEM':
            return [...state.filter(g => g._id != action.id)];
        default:
            return state;
    }
}

const newItemReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.newItem;
        default:
            return state;
    }
}

export const GroceryProvider = ({ children }) => {
    const [groceryList, dispatchGroceries] = useReducer(groceryReducer, []);
    const [groceryTypes, setGroceryTypes] = useState([]);
    const [newItem, dispatchNewItem] = useReducer(newItemReducer, {});
    const [loadingGroceries, setLoadingGroceries] = useState(false);

    useEffect(() => {
        setLoadingGroceries(true);

        getGroceryTypes()
            .then(res => {
                setGroceryTypes(res.data);
                dispatchNewItem({
                    type: 'UPDATE',
                    newItem: {
                        name: '',
                        type: res.data[0]._id,
                        price: 0
                    }
                })
            });

        getGroceryList()
            .then(res => {
                dispatchGroceries({type: 'SET_GROCERY_LIST', list: res.data})
            })
            .finally(() => setLoadingGroceries(false));
    }, [])

    return (
        <GroceryContext.Provider value={{
            groceryList,
            dispatchGroceries,
            groceryTypes,
            setGroceryTypes,
            newItem,
            dispatchNewItem,
            loadingGroceries,
            setLoadingGroceries
        }}>
            {children}
        </GroceryContext.Provider>
    )
}