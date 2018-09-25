import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers';
import { loggingMiddleware, fetchCityAndStateMiddleware } from './middleware';
import * as user from '../user.json';

const enhancers = applyMiddleware(loggingMiddleware, fetchCityAndStateMiddleware);

const initialState = { person: user };
export const store = createStore(reducer, initialState, enhancers);