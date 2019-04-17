const baseUrl = "https://api.openaq.org/v1";
const latestEndpoint = "/latest";

const esc = encodeURIComponent;
const stringifyRequest = (url, params) =>
  `${url}?${Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&")}`;

export const collectCities = async (
  countryCode,
  limit = 10,
  parameter = "pm25"
) => {
  const params = {
    country: countryCode,
    parameter: parameter || "pm25",
    limit: 10000
  };
  //   const url = `https://api.openaq.org/v1/latest?country=${countryCode}&parameter=pm25&limit=1000`;
  const url = stringifyRequest(baseUrl + latestEndpoint, params);
  const latestResponse = await fetch(url);
  const latestJson = await latestResponse.json();
  const results = latestJson.results;
  //format to given parameter
  const resultsFormatted = results.map(res => ({
    country: res.country,
    city: res.city,
    location: res.location,
    measurement: res.measurements[0].value,
    unit: res.measurements[0].unit
  }));
  //sort by measurement, descending order (most polluted cities first)
  const sortedResults = resultsFormatted.sort(
    (resA, resB) => resB.measurement - resA.measurement
  );

  //remove duplicates (if city has more locations), save occurence with worst air quality
  const filteredResults = [];
  const sortedResultsCities = sortedResults.map(res => res.city);
  for (
    let i = 0;
    i < sortedResults.length && (limit < 0 || filteredResults.length < limit);
    i++
  ) {
    const city = sortedResults[i].city;
    if (sortedResultsCities.indexOf(city) >= i) {
      //since preeceding city does not exist in sorted list, it means current occurence has worst aq
      filteredResults.push(sortedResults[i]);
    }
  }

  return filteredResults;
};
