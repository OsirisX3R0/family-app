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
        case 'UPDATE_GROCERY_ITEM':
            return [...state.map(g => g._id == action.item._id ? action.item : g)]
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

        let $groceryTypes = getGroceryTypes()
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

        let $groceryList = getGroceryList()
            .then(res => {
                dispatchGroceries({type: 'SET_GROCERY_LIST', list: res.data})
            })
            .finally(() => setLoadingGroceries(false));

        // Promise.all([$groceryTypes, $groceryList])
        //     .then(res => {
        //         let sortedList = [];
        //         groceryTypes.forEach(type => {
        //             sortedList.push({
        //                 name: type.name,
        //                 items: groceryList.filter(g => g.category == type.name)
        //             })
        //         })
        //         dispatchGroceries({type: 'SET_GROCERY_LIST', list: sortedList})
        //     })
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