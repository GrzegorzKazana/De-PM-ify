import { takeUntilChar } from "../utils/StringManipulation";
import AvailableParameters from "../config/AvailableParameters";
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

//filters out measurements older than 24h
export const filterOldMeasurements = cities =>
  cities.filter(
    city =>
      new Date(city.lastUpdated).getTime() >
      new Date().getTime() - 24 * 3600 * 1000
  );

//sorts result array by measurement in descending order
//(worse air quality first)
export const sortResultsByValue = results =>
  results.sort((resA, resB) => resB.value - resA.value);

//iterates the array and checks if current city has previous occurence with different measurement
//skips duplicates, leaving first occurence (if data is sorted by parameter value
//then it leaves occurence with worse aq, if sorted by date, leaves newer one),
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

//some cities have names in two languages,
//use only first translation
export const formatCityNames = cities =>
  cities.map(city => ({
    ...city,
    city: takeUntilChar(city.city, "/")
  }));

//adds id, empty data and fetch status to city objects
export const wrapCitiesWithIdEmptyData = cities =>
  cities.map(city => ({
    ...city,
    id: uuid.v4(),
    parameterLabel: AvailableParameters.find(
      param => param.value === city.parameter
    ).label,
    data: {},
    dataFetching: false,
    dataLoaded: false
  }));
