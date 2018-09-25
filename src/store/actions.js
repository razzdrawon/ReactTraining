
export const actionTypes = {
  
  //Name section
  SET_TITLE: "SET_TITLE",
  SET_FIRST_NAME: "SET_FIRST_NAME",
  SET_LAST_NAME: "SET_LAST_NAME",

  //Location section
  SET_STREET: "SET_STREET",
  SET_CITY: "SET_CITY",
  SET_STATE: "SET_STATE",
  SET_POSTCODE: "SET_POSTCODE",
  
  //Contact Information section
  SET_EMAIL: "SET_EMAIL",
  SET_CELL: "SET_CELL",

  //async
  FETCH_CITY_AND_STATE: "FETCH_CITY_AND_STATE"

};


const setTitle = title => ({type:actionTypes.SET_TITLE, title});
const setFirstName = firstName => ({type:actionTypes.SET_FIRST_NAME, firstName});
const setLastName = lastName => ({type:actionTypes.SET_LAST_NAME, lastName});

const setStreet = street => ({type:actionTypes.SET_STREET, street});
const setCity = city => ({type:actionTypes.SET_CITY, city});
const setState = state => ({type:actionTypes.SET_STATE, state});
const setPostCode = postCode => ({type:actionTypes.SET_POSTCODE, postCode});

const setEmail = email => ({type:actionTypes.SET_EMAIL, email});
const setCell = cell => ({type:actionTypes.SET_CELL, cell});


const fetchCityAndState = postCode => ({type:actionTypes.FETCH_CITY_AND_STATE, postCode});

export const actions = {
  setTitle,
  setFirstName,
  setLastName,
  setStreet,
  setCity,
  setState,
  setPostCode,
  setEmail,
  setCell,
  fetchCityAndState
}