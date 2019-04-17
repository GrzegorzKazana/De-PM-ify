export const FETCHING_CITIES = "FETCHING_CITIES";
export const fetchCities = () => ({
  type: FETCHING_CITIES
});

export const LOADED_CITIES = "LOADED_CITIES";
export const loadedCities = cities => ({
  type: LOADED_CITIES,
  cities
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
