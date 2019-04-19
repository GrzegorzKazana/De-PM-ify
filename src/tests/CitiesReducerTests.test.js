import CitiesReducer, { defaultState } from "../reducers/CitiesReducer";
import {
  fetchCities,
  loadCities,
  fetchCitiesError,
  fetchCityData,
  loadCityData,
  fetchCityDataError
} from "../actions/CitiesActions";

describe("testing city reducer", () => {
  const cities = [
    {
      id: 0,
      name: "Gliwice"
    },
    { id: 1, name: "Katowice" }
  ];

  it("handles initialization", () => {
    const expectedState = defaultState;
    console.log(expectedState);
    expect(CitiesReducer(undefined, {})).toEqual(expectedState);
  });

  it("handles fetchCity action", () => {
    const initialState = defaultState;
    const expectedState = {
      cities: [],
      citiesFetching: true,
      citiesLoaded: false
    };
    const action = fetchCities();
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles loadedCities action", () => {
    const initialState = defaultState;
    const expectedState = {
      cities,
      citiesFetching: false,
      citiesLoaded: true
    };
    const action = loadCities(cities);
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles fetchCityFail action", () => {
    const initialState = defaultState;
    const expectedState = {
      cities: [],
      citiesFetching: false,
      citiesLoaded: false
    };
    const action = fetchCitiesError();
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles fetchCityData action", () => {
    const initialState = {
      cities,
      citiesFetching: false,
      citiesLoaded: true
    };
    const cityId = 0;
    const expectedState = {
      cities: [
        {
          id: 0,
          name: "Gliwice",
          dataFetching: true
        },
        { id: 1, name: "Katowice" }
      ],
      citiesFetching: false,
      citiesLoaded: true
    };
    const action = fetchCityData(cityId);
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles loadedCityData action", () => {
    const initialState = {
      cities,
      citiesFetching: false,
      citiesLoaded: true
    };
    const cityId = 0;
    const cityData = {
      population: 1000
    };
    const expectedState = {
      cities: [
        {
          id: 0,
          name: "Gliwice",
          dataFetching: false,
          dataLoaded: true,
          data: cityData
        },
        { id: 1, name: "Katowice" }
      ],
      citiesFetching: false,
      citiesLoaded: true
    };
    const action = loadCityData(cityId, cityData);
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles fetchCityDataFail action", () => {
    const initialState = {
      cities,
      citiesFetching: false,
      citiesLoaded: true
    };
    const cityId = 0;
    const expectedState = {
      cities: [
        {
          id: 0,
          name: "Gliwice",
          dataFetching: false
        },
        { id: 1, name: "Katowice" }
      ],
      citiesFetching: false,
      citiesLoaded: true
    };
    const action = fetchCityDataError(cityId);
    expect(CitiesReducer(initialState, action)).toEqual(expectedState);
  });
});
