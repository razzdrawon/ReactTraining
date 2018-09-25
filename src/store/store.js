import { createStore } from 'redux';
import * as user from '../user.json';

const reducer = (state, action) => {
    console.log(action);

    if( action.type === "SET_EMAIL") {
        const newState = {...state};
        newState.person.email = action.email;
        return newState;    
    }
    if( action.type === "SET_CELL") {
        const newState = {...state};
        newState.person.cell = action.cell;
        return newState;    
    }

    return state;
};
const initialState = {person: user};

export const store = createStore(reducer, initialState);

