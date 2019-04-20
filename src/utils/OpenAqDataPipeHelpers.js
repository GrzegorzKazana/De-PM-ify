import {
  removeOccurencesInString,
  fixCapitalization,
  takeUntilChar
} from "../utils/StringManipulation";
import { redundantCityPrefixes } from "../config/RedundantCityPrefixes";
import uuid from "uuid";

//formats result array to simpler form
//discarding irrevelant data
export const formatResults = results =>
  results.map(res => ({
    country: res.country,
    city: res.city,
    location: res.location,
    parameter: res.measurements[0].parameter,
    value: res.measurements[0].value,
    unit: res.measurements[0].unit,
    lastUpdated: res.measurements[0].lastUpdated
  }));

//filters out measurements older than month
export const filterOldMeasurements = cities =>
  cities.filter(city => {
    const measurementDate = new Date(city.lastUpdated);
    const today = new Date();
    const monthAgo = new Date().setDate(today.getDate() - 30);
    return measurementDate > monthAgo;
  });

//sorts result array by measurement in descending order
//(worse air quality first)
export const sortResults = results =>
  results.sort((resA, resB) => resB.value - resA.value);

//iterates the array and checks if current city has previous occurence with different measurement
//skips duplicates, leaving occurence with worse params
//assumes data is sorted by air quality
//also, iteration ends if collected enough cities (reached limit)
export const limitAndFilterCityDuplicates = (results, limit) => {
  const filteredResults = [];
  const resultsCities = results.map(res => res.city);
  for (
    let i = 0;
    i < results.length && (limit < 0 || filteredResults.length < limit);
    i++
  ) {
    const city = results[i].city;
    if (resultsCities.indexOf(city) >= i) {
      //since preeceding city does not exist in sorted list, it means current occurence has worst aq
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
};

export const formatCityNames = cities =>
  cities.map(city => ({
    ...city,
    city: takeUntilChar(
      removeOccurencesInString(
        fixCapitalization(city.city),
        redundantCityPrefixes
      ),
      "/"
    )
  }));

//adds id, empty data and fetch status to city objects
export const wrapCitiesWithIdEmptyData = cities =>
  cities.map(city => ({
    ...city,
    id: uuid.v4(),
    data: {},
    dataFetching: false,
    dataLoaded: false
  }));
