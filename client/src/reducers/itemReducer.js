//get item to dispatch from the server to the reducer
//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    item: [],
    loading: false
};   

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false          
            };
        case  DELETE_ITEM:
            return {
                ...state,
                item: state.item.filter(item => item.id !== action.payload)      
            };      
        case ADD_ITEM:
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
    