import { fetchCitiesOpenAq } from "../api/OpenAq";
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

export const fetchAllCityData = (
  countryCode,
  resultLimit,
  parameter
) => dispatch => {
  dispatch(fetchCities());
  fetchCitiesOpenAq(countryCode, resultLimit, parameter)
    .then(cities => {
      const citiesWrapped = cities.map((city, idx) => ({
        ...city,
        id: idx,
        data: {},
        dataFetching: false,
        dataLoaded: false
      }));
      dispatch(citiesWrapped ? loadedCities(citiesWrapped) : fetchCitiesFail());
      citiesWrapped.forEach(city => {
        dispatch(fetchCityData(city.id));
        fetchCityWikiData(city.city)
          .then(cityData => {
            dispatch(
              cityData
                ? loadedCityData(city.id, cityData)
                : fetchCityDataFail(city.id)
            );
          })
          .catch(err => {
            fetchCityDataFail(city.id);
            console.log("failed to fetch city data", err);
          });
      });
    })
    .catch(err => {
      fetchCitiesFail();
      console.log("failed to fetch cities", err);
    });
};
