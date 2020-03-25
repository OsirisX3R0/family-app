const initialValue = {
    name: '',
    category: '',
    price: 0
};

const newItemReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_ITEM':
            return action.newItem;
        // case 'CLEAR_ITEM':
        //     return initialValue;
        default:
            return state;
    }
}

export default newItemReducer;