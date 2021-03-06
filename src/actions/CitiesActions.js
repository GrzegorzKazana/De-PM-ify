import { fetchCitiesOpenAq } from "../api/OpenAq";
import { displaySnackbarMessage } from "./SnackbarActions";
import { fetchCityWikiData as fetchCityWikiDataApiCall } from "../api/WikiApi";

export const FETCH_CITIES = "FETCH_CITIES";
export const fetchCities = () => ({
  type: FETCH_CITIES
});

export const LOAD_CITIES = "LOAD_CITIES";
export const loadCities = cities => ({
  type: LOAD_CITIES,
  cities
});

export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";
export const fetchCitiesError = () => ({
  type: FETCH_CITIES_ERROR
});

export const FETCH_CITY_DATA = "FETCH_CITY_DATA";
export const fetchCityData = cityId => ({
  type: FETCH_CITY_DATA,
  cityId
});

export const LOAD_CITY_DATA = "LOAD_CITY_DATA";
export const loadCityData = (cityId, cityData) => ({
  type: LOAD_CITY_DATA,
  cityId,
  cityData
});

export const FETCH_CITY_DATA_ERROR = "FETCH_CITY_DATA_ERROR";
export const fetchCityDataError = cityId => ({
  type: FETCH_CITY_DATA_ERROR,
  cityId
});

export const fetchCityList = (
  countryCode,
  resultLimit,
  parameter
) => dispatch => {
  dispatch(fetchCities());
  fetchCitiesOpenAq(countryCode, resultLimit, parameter)
    .then(cities => dispatch(loadCities(cities)))
    .catch(err => {
      dispatch(fetchCitiesError());
      dispatch(displaySnackbarMessage(err.message));
      console.error(err);
    });
};

export const fetchCityWikiData = city => dispatch => {
  dispatch(fetchCityData(city.id));
  fetchCityWikiDataApiCall(city.city)
    .then(cityData => dispatch(loadCityData(city.id, cityData)))
    .catch(err => {
      dispatch(fetchCityDataError(city.id));
      dispatch(displaySnackbarMessage(err.message));
      console.error(err);
    });
};
