import { stringifyRequest } from "./Common";
import {
  formatResults,
  sortResults,
  limitAndFilterCityDuplicates,
  wrapCitiesWithIdEmptyData
} from "../utils/OpenAqDataPipeHelpers";

const baseUrl = "https://api.openaq.org/v1";
const latestEndpoint = "/latest";

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
  const url = stringifyRequest(baseUrl + latestEndpoint, params);
  try {
    const latestResponse = await fetch(url);
    const latestJson = await latestResponse.json();
    const results = latestJson.results;
    const resultsFormatted = formatResults(results);
    const sortedResults = sortResults(resultsFormatted);
    const filteredResults = limitAndFilterCityDuplicates(sortedResults, limit);
    const wrappedResults = wrapCitiesWithIdEmptyData(filteredResults);
    return wrappedResults;
  } catch (err) {
    return [];
  }
};
