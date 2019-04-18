import { collectCities } from "../api/OpenAq";
import { fetchCityWikiData } from "../api/WikiApi";

export const FETCHING_CITIES = "FETCHING_CITIES";
export const fetchCities = () => ({
  type: FETCHING_CITIES
});

export const LOADED_CITIES = "LOADED_CITIES";
export const loadedCities = cities => ({
  type: LOADED_CITIES,
  cities
});

export const FETCHING_CITIES_FAIL = "FETCHING_CITIES_FAIL";
export const fetchCitiesFail = () => ({
  type: FETCHING_CITIES_FAIL
});

export const FETCHING_CITY_DATA = "FETCHING_CITY_DATA";
export const fetchCityData = cityId => ({
  type: FETCHING_CITY_DATA,
  cityId
});

export const LOADED_CITY_DATA = "LOADED_CITY_DATA";
export const loadedCityData = (cityId, cityData) => ({
  type: LOADED_CITY_DATA,
  cityId,
  cityData
});

export const FETCHING_CITY_DATA_FAIL = "FETCHING_CITY_DATA_FAIL";
export const fetchCityDataFail = cityId => ({
  type: FETCHING_CITY_DATA_FAIL,
  cityId
});

const combinedCityDataFetch = async (
  dispatch,
  countryCode,
  resultLimit,
  parameter
) => {
  const cities = await collectCities(countryCode, resultLimit, parameter);
  const citiesWrapped = cities.map((city, idx) => ({
    ...city,
    id: idx,
    data: {},
    dataFetching: false,
    dataLoaded: false
  }));
  dispatch(loadedCities(citiesWrapped));
  citiesWrapped.forEach(async city => {
    dispatch(fetchCityData(city.id));
    const cityData = await fetchCityWikiData(city.city);
    dispatch(loadedCityData(city.id, cityData));
  });
};

export const fetchCountryData = (
  countryCode,
  resultLimit,
  parameter
) => dispatch => {
  dispatch(fetchCities());
  combinedCityDataFetch(dispatch, countryCode, resultLimit, parameter).catch(
    err => console.log(err)
  );
};
