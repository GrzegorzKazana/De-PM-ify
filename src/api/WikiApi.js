import { stringifyUrlRequest } from "../utils/StringifyUrlRequest";
import {
  assessCityDataQuiality,
  removeSummaryStopWords
} from "../utils/WikiDataPipelineHelpers";
import { takeFirstSentences } from "../utils/StringManipulation";
import { composeF } from "../utils/ComposeFunction";
import { wikiOpenSearchApi, wikiArticleByPageId } from "../config/Urls";

const defaultError = err => ({
  ...err,
  message: "Failed to fetch city data."
});

export const fetchCityWikiData = async title => {
  const params = {
    action: "query",
    format: "json",
    prop: ["extracts", "exintro", "explaintext", "redirects"],
    origin: "*",
    titles: title
  };
  const url = stringifyUrlRequest(wikiOpenSearchApi, params);
  try {
    const cityDataResponse = await fetch(url);
    const cityDataJson = await cityDataResponse.json();
    const cityData = composeF(
      x => x.query.pages,
      x => x[Object.keys(x)[0]],
      x => ({
        articeTitle: x.title,
        articleSummary: takeFirstSentences(x.extract || "", 1),
        articleUrl: wikiArticleByPageId + x.pageid
      }),
      assessCityDataQuiality,
      removeSummaryStopWords
    )(cityDataJson);
    return cityData;
  } catch (err) {
    throw defaultError(err);
  }
};
