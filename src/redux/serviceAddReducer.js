import { nanoid } from 'nanoid';
import { CHANGE_SERVICE_FIELD, ADD_SERVICE, REMOVE_SERVICE } from './actionTypes'
const initialState = { name: '', price: '', };

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            // alert("serviceAddReducer");
            return {...state, [name]: value };
        default:
            return state;
    }
}