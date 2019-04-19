import {
  FETCHING_CITIES,
  LOADED_CITIES,
  FETCHING_CITIES_FAIL,
  FETCHING_CITY_DATA,
  LOADED_CITY_DATA,
  FETCHING_CITY_DATA_FAIL
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
        cities: action.cities,
        citiesFetching: false,
        citiesLoaded: true
      };
    case FETCHING_CITIES_FAIL:
      return {
        ...state,
        citiesFetching: false
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
                data: action.cityData,
                dataFetching: false,
                dataLoaded: true
              }
        )
      };

    case FETCHING_CITY_DATA_FAIL:
      return {
        ...state,
        cities: state.cities.map(city =>
          city.id !== action.cityId
            ? city
            : {
                ...city,
                dataFetching: false
              }
        )
      };
    default:
      return state;
  }
};
export default CitiesReducer;