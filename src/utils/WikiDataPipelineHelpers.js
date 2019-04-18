import { cityKeywords } from "../config/CityKeywords";

//correct citydata is loaded successfully if articleSummary exists and is not falsy
const isDataCorrect = city => city.data && city.data.articleSummary;

//is wiki text summary contains "refer to", its most likely its from
//disambiguation page, not from valid city page
//also, if article does not contain any "city" or "province" synonym
//it is highly indicative, the result may not be about requested city
const isDataAmbigious = city =>
  city.data.articleSummary.includes("refer to") ||
  !cityKeywords
    .map(keyword => city.data.articleSummary.includes(keyword))
    .some(x => x);

//attatches to city information if its data is
//-correct
//-ambigious
//-invalid
//(only one of obove)
export const assessCityDataQuiality = city => {
  const isCorrect = isDataCorrect(city);
  const isInvalid = !isCorrect;
  const isAmbigious = isCorrect && isDataAmbigious(city);
  return {
    ...city,
    isCorrect: isCorrect && !isAmbigious,
    isInvalid,
    isAmbigious
  };
};
