import { combineReducers } from "redux";
import CitiesReducer from "./CitiesReducer";
import { snackbarReducer } from "react-redux-snackbar";

export default combineReducers({
  cities: CitiesReducer,
  snackbar: snackbarReducer
});
