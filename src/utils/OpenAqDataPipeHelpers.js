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

//adds id, empty data and fetch status to city objects
export const wrapCitiesWithIdEmptyData = cities =>
  cities.map((city, idx) => ({
    ...city,
    id: idx,
    data: {},
    dataFetching: false,
    dataLoaded: false
  }));
