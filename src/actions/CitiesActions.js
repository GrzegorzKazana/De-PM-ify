export const FETCHING_CITIES = "FETCHING_CITIES";
export const fetchCities = () => ({
  type: FETCHING_CITIES
});

export const LOADED_CITIES = "LOADED_CITIES";
export const loadedCities = cities => ({
  type: LOADED_CITIES,
  cities
});
