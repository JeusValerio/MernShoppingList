//get item to dispatch from the server to the reducer
//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {
    item: [],
    loading: false
};   

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state    
            };
        case  DELETE_ITEMS:
            return {
                ...state,
                item: state.item.filter(item => item.id !== action.payload)      
            };
        case ADD_ITEMS:
            return {
                ...state,
                item: [action.payload, ...state.item]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
    