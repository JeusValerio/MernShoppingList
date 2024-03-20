//get item to dispatch from the server to the reducer
//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    item: [
        { id: uuidv4(), name: 'Eggs' },
        { id: uuidv4(), name: 'Milk' },
        { id: uuidv4(), name: 'Steak' },
        { id: uuidv4(), name: 'Water' },
    ]
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
            }
        default:
            return state;
    }
}
    