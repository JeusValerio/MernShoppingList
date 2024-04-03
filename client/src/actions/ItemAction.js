import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';   

export const getItems = () => dispatch => {
     dispatch(setItemsLoading());//going to ItemReducer and checking action.type
      axios.get('/api/item').then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
            )  
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

export const setItemsLoading = () => {
    return {
        type:ITEMS_LOADING
    }
}