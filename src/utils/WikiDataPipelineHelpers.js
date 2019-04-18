import { cityKeywords } from "../config/CityKeywords";

//correct citydata is loaded successfully if articleSummary exists and is not falsy
const isDataCorrect = city => city.articleSummary;

//is wiki text summary contains "refer to", its most likely its from
//disambiguation page, not from valid city page
//also, if article does not contain any "city" or "province" synonym
//it is highly indicative, the result may not be about requested city
const isDataAmbigious = city =>
  city.articleSummary.includes("refer to") ||
  !cityKeywords
    .map(keyword => city.articleSummary.includes(keyword))
    .some(x => x);

//attatches to city information if its data is
//-correct
//-ambigious
//-invalid
//(only one of obove)
export const assessCityDataQuiality = city => {
  const isCorrect = isDataCorrect(city) && !isDataAmbigious(city);
  const isAmbigious = isDataCorrect(city) && isDataAmbigious(city);
  const isInvalid = !isCorrect && !isAmbigious;
  return {
    ...city,
    isCorrect,
    isAmbigious,
    isInvalid
  };
};
