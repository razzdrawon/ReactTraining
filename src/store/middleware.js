import { actionTypes } from "./actions";

export const loggingMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())
  next(action);
  console.warn(action.type, getState())
}

export const fetchCityAndStateMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())

  if(action.type === actionTypes.FETCH_CITY_AND_STATE)
  {
    console.log(action.type);
  }
  next(action);
  console.warn(action.type, getState())
}