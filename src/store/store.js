import { createStore } from 'redux';
import * as user from '../user.json';

const reducer = (state, action) => {
    console.log(action);

    if(!action) return state;

    switch (action.type) {
        case "SET_EMAIL":
            return {...state, person: {...state.person, email: action.emal}};
        case "SET_CELL":
            return {...state, person: {...state.person, cell: action.emacelll}};
        default:
            return state;
    }

};
const initialState = {person: user};

export const store = createStore(reducer, initialState);

