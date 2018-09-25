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

    // if( action.type === "SET_EMAIL") {
    //     const newState = {...state};
    //     newState.person.email = action.email;
    //     return newState;    
    // }
    // if( action.type === "SET_CELL") {
    //     const newState = {...state};
    //     newState.person.cell = action.cell;
    //     return newState;    
    // }

    // return state;
};
const initialState = {person: user};

export const store = createStore(reducer, initialState);

