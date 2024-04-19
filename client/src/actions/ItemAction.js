import axios from 'axios';
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';   

export const getItems = () => dispatch => {
     dispatch(setItemsLoading());//going to ItemReducer and checking action.type
      axios.get('./api/items').then(res => 
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
            );  
};

export const addItem  = item => dispatch => {
    axios
        .post('./api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        );
};

export const deleteItem = id => dispatch => {  
      axios.delete(`./api/items/${id}`).then(res =>     //going to ItemReducer and checking action.type
        dispatch({
            type: DELETE_ITEM,      
            payload: id
        })
    );      
};



export const setItemsLoading = () => {
    return {
        type:ITEMS_LOADING
    }
}   