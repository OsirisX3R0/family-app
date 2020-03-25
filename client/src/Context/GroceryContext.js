import React, { useEffect } from 'react';
import { createContext, useReducer, useState } from 'react';
import { getGroceryList, getGroceryTypes } from '../Services/groceryService';
import groceryReducer from '../Reducers/groceryReducer';
import useNewItem from '../Hooks/useNewItem';

export const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
    const [groceryList, dispatchGroceries] = useReducer(groceryReducer, []);
    const [groceryTypes, setGroceryTypes] = useState([]);
    const [newItem, dispatchNewItem] = useNewItem();
    const [loadingGroceries, setLoadingGroceries] = useState(false);

    useEffect(() => {
        setLoadingGroceries(true);

        let $groceryTypes = getGroceryTypes()
            .then(res => {
                setGroceryTypes(res.data);
                dispatchNewItem({
                    type: 'UPDATE_ITEM',
                    newItem: {
                        name: '',
                        category: res.data[0]._id,
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
            setLoadingGroceries,
            // changes, 
            // setChanges
        }}>
            {children}
        </GroceryContext.Provider>
    )
}