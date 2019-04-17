import {
  FETCHING_CITIES,
  LOADED_CITIES,
  FETCHING_CITY_DATA,
  LOADED_CITY_DATA,
  fetchCityData
} from "../actions/CitiesActions";

export const defaultState = {
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
    case FETCHING_CITY_DATA:
      return {
        ...state,
        cities: state.cities.map(city =>
          city.id !== action.cityId
            ? city
            : {
                ...city,
                dataFetching: true
              }
        )
      };
    case LOADED_CITY_DATA:
      return {
        ...state,
        cities: state.cities.map(city =>
          city.id !== action.cityId
            ? city
            : {
                ...city,
                data: fetchCityData,
                dataFetching: true,
                dataLoaded: true
              }
        )
      };
    default:
      return state;
  }
};
export default CitiesReducer;
