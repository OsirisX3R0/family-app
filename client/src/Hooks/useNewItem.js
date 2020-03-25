import { useReducer } from 'react';
import newItemReducer from '../Reducers/newItemReducer';

const initialValue = {
    name: '',
    category: '',
    price: 0
};

const useNewItem = () => {    
    return useReducer(newItemReducer, initialValue);
}

export default useNewItem;