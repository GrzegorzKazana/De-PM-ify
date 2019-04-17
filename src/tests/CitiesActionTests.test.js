import {
  FETCHING_CITIES,
  LOADED_CITIES,
  FETCHING_CITIES_FAIL,
  FETCHING_CITY_DATA,
  LOADED_CITY_DATA,
  FETCHING_CITY_DATA_FAIL,
  fetchCities,
  loadedCities,
  fetchCitiesFail,
  fetchCityData,
  loadedCityData,
  fetchCityDataFail
} from "../actions/CitiesActions";

describe("testing city actions", () => {
  it("creates fetching cities action", () => {
    const expectedAction = {
      type: FETCHING_CITIES
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
      type: LOADED_CITIES,
      cities
    };
    expect(loadedCities(cities)).toEqual(expectedAction);
  });

  it("creates fetching cities fail action", () => {
    const expectedAction = {
      type: FETCHING_CITIES_FAIL
    };
    expect(fetchCitiesFail()).toEqual(expectedAction);
  });

  it("creates fetching city data action", () => {
    const cityId = 3;
    const expectedAction = {
      type: FETCHING_CITY_DATA,
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
      type: LOADED_CITY_DATA,
      cityId,
      cityData
    };
    expect(loadedCityData(cityId, cityData)).toEqual(expectedAction);
  });

  it("creates fetching city data fail action", () => {
    const cityId = 3;
    const expectedAction = {
      type: FETCHING_CITY_DATA_FAIL,
      cityId
    };
    expect(fetchCityDataFail(cityId)).toEqual(expectedAction);
  });
});
