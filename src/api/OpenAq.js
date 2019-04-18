import { stringifyUrlRequest } from "../utils/StringifyUrlRequest";
import {
  formatResults,
  sortResults,
  limitAndFilterCityDuplicates,
  formatCityNames,
  wrapCitiesWithIdEmptyData
} from "../utils/OpenAqDataPipeHelpers";
import { openAqLatestApi } from "../config/Urls";

export const fetchCitiesOpenAq = async (
  countryCode,
  limit = 10,
  parameter = "pm25"
) => {
  const params = {
    country: countryCode,
    parameter: parameter,
    limit: 10000
  };
  const url = stringifyUrlRequest(openAqLatestApi, params);
  try {
    const latestResponse = await fetch(url);
    const latestJson = await latestResponse.json();
    const results = latestJson.results;
    const resultsFormatted = formatResults(results);
    const sortedResults = sortResults(resultsFormatted);
    const filteredResults = limitAndFilterCityDuplicates(sortedResults, limit);
    const citiesNameFormatted = formatCityNames(filteredResults);
    const wrappedResults = wrapCitiesWithIdEmptyData(citiesNameFormatted);
    return wrappedResults;
  } catch (err) {
    return [];
  }
};
