import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';   

export const getItems = () => {
    return{ //going to ItemReducer and checking action.type
        type: GET_ITEMS
        
    };
};

export const deleteItem  = id => {
    return{ //going to ItemReducer and checking action.type
        type: DELETE_ITEMS,
        payload: id
        
    };
};

export const addItem  = item => {
    return{ //going to ItemReducer and checking action.type
        type: ADD_ITEMS,
        payload: item
        
    };
};