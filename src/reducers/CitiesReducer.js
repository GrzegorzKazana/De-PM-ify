import {
  FETCH_CITIES,
  LOAD_CITIES,
  FETCH_CITIES_ERROR,
  FETCH_CITY_DATA,
  LOAD_CITY_DATA,
  FETCH_CITY_DATA_ERROR
} from "../actions/CitiesActions";

export const defaultState = {
  cities: [],
  citiesFetching: false,
  citiesLoaded: false
};

const CitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        citiesFetching: true
      };
    case LOAD_CITIES:
      return {
        ...state,
        cities: action.cities,
        citiesFetching: false,
        citiesLoaded: true
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        citiesFetching: false
      };
    case FETCH_CITY_DATA:
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
    case LOAD_CITY_DATA:
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

    case FETCH_CITY_DATA_ERROR:
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
