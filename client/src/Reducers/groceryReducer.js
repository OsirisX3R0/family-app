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
        case 'CLEAR_GROCERY_LIST':
            return [];
        default:
            return state;
    }
}

export default groceryReducer;