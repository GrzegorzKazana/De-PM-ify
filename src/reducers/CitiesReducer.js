import { FETCHING_CITIES, LOADED_CITIES } from "../actions/CitiesActions";

const defaultState = {
  cities: [],
  citiesFetching: false,
  citiesLoaded: false
};

const CitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_CITIES:
      return {
        ...state,
        citiesFetching: true
      };
    case LOADED_CITIES:
      return {
        ...state,
        cities,
        citiesFetching: false,
        citiesLoaded: true
      };
    default:
      return state;
  }
};
export default CitiesReducer;
