import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from './actionTypes';

const initialState = [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const { name, price } = action.payload;
            // alert("serviceListReducer");
            //  alert("ADD_SERVICE");
            return [...state, { id: nanoid(), name, price: Number(price) }];
        case REMOVE_SERVICE:
            const { id } = action.payload;
            // alert("serviceListReducer");
            return state.filter(service => service.id !== id);
        default:
            return state;
    }
}