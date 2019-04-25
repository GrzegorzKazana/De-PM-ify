import { stringifyUrlRequest } from "../utils/StringifyUrlRequest";
import {
  formatResults,
  filterOldMeasurements,
  limitAndFilterCityDuplicates,
  formatCityNames,
  wrapCitiesWithIdEmptyData
} from "../utils/OpenAqDataPipeHelpers";
import { openAqLatestApi } from "../config/Urls";
import { composeF } from "../utils/ComposeFunction";

export const fetchCitiesOpenAq = async (
  countryCode,
  limitTopResults = 10,
  parameter = "pm25"
) => {
  const params = {
    country: countryCode,
    order_by: "measurements[0]value",
    sort: "desc",
    parameter
  };
  const url = stringifyUrlRequest(openAqLatestApi, params);
  try {
    const latestResponse = await fetch(url);
    const latestJson = await latestResponse.json();
    const processedCities = composeF(
      x => x.results,
      formatResults,
      filterOldMeasurements,
      formatCityNames,
      x => limitAndFilterCityDuplicates(x, limitTopResults),
      wrapCitiesWithIdEmptyData
    )(latestJson);
    return processedCities;
  } catch (err) {
    const error = {
      err,
      message: "Failed to fetch city list."
    };
    throw error;
  }
};
