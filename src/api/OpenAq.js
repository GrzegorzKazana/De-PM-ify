import { stringifyRequest } from "./Common";

const baseUrl = "https://api.openaq.org/v1";
const latestEndpoint = "/latest";

//formats result array to simpler form
//discarding irrevelant data
export const formatResults = results =>
  results.map(res => ({
    country: res.country,
    city: res.city,
    location: res.location,
    parameter: res.measurements[0].parameter,
    value: res.measurements[0].value,
    unit: res.measurements[0].unit
  }));

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

export const fetchCitiesOpenAq = async (
  countryCode,
  limit = 10,
  parameter = "pm25"
) => {
  const params = {
    country: countryCode,
    parameter: parameter || "pm25",
    limit: 10000
  };
  const url = stringifyRequest(baseUrl + latestEndpoint, params);
  try {
    const latestResponse = await fetch(url);
    const latestJson = await latestResponse.json();
    const results = latestJson.results;
    const resultsFormatted = formatResults(results);
    const sortedResults = sortResults(resultsFormatted);
    const filteredResults = limitAndFilterCityDuplicates(sortedResults, limit);
    return filteredResults;
  } catch (err) {
    return [];
  }
};
