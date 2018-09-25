import { actions, actionTypes } from "./actions";



export const loggingMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())
  next(action);
  console.warn(action.type, getState())
}

export const fetchCityAndStateMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())
  const url = `http://api.zippopotam.us/mx/${action.postCode}`;

  if(action.type === actionTypes.FETCH_CITY_AND_STATE)
  {
    console.log(action.type);
    console.log(action.postCode);
    fetch(url)
    .then(res => res.json())
    .then(postCodeObj => {
      console.log(postCodeObj);

      dispatch(actions.setState(postCodeObj.places[0].state));
      dispatch(actions.setCity(postCodeObj.places[0]['place name']));
    })

  }
  next(action);
  console.warn(action.type, getState())
}