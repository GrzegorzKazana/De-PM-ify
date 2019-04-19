import {
  FETCH_CITIES,
  LOAD_CITIES,
  FETCH_CITIES_ERROR,
  FETCH_CITY_DATA,
  LOAD_CITY_DATA,
  FETCH_CITY_DATA_ERROR,
  fetchCities,
  loadCities,
  fetchCitiesError,
  fetchCityData,
  loadCityData,
  fetchCityDataError
} from "../actions/CitiesActions";

describe("testing city actions", () => {
  it("creates fetching cities action", () => {
    const expectedAction = {
      type: FETCH_CITIES
    };
    expect(fetchCities()).toEqual(expectedAction);
  });

  it("creates loaded cities action", () => {
    const cities = [
      {
        name: "Gliwice"
      },
      { name: "Katowice" }
    ];
    const expectedAction = {
      type: LOAD_CITIES,
      cities
    };
    expect(loadCities(cities)).toEqual(expectedAction);
  });

  it("creates fetching cities fail action", () => {
    const expectedAction = {
      type: FETCH_CITIES_ERROR
    };
    expect(fetchCitiesError()).toEqual(expectedAction);
  });

  it("creates fetching city data action", () => {
    const cityId = 3;
    const expectedAction = {
      type: FETCH_CITY_DATA,
      cityId
    };
    expect(fetchCityData(cityId)).toEqual(expectedAction);
  });

  it("creates loaded city data action", () => {
    const cityId = 3;
    const cityData = {
      population: 1000
    };
    const expectedAction = {
      type: LOAD_CITY_DATA,
      cityId,
      cityData
    };
    expect(loadCityData(cityId, cityData)).toEqual(expectedAction);
  });

  it("creates fetching city data fail action", () => {
    const cityId = 3;
    const expectedAction = {
      type: FETCH_CITY_DATA_ERROR,
      cityId
    };
    expect(fetchCityDataError(cityId)).toEqual(expectedAction);
  });
});
