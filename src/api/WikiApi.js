import { stringifyUrlRequest } from "../utils/StringifyUrlRequest";
import {
  assessCityDataQuiality,
  removeSummaryStopWords
} from "../utils/WikiDataPipelineHelpers";
import { composeF } from "../utils/ComposeFunction";
import { wikiOpenSearchApi } from "../config/Urls";

export const fetchCityWikiData = async title => {
  const params = {
    action: "opensearch",
    format: "json",
    origin: "*",
    search: title
  };
  const url = stringifyUrlRequest(wikiOpenSearchApi, params);
  try {
    const titlesResponse = await fetch(url);
    const titlesJson = await titlesResponse.json();
    const firstAtricleTitle = titlesJson[1][0];
    const firstArticleSummary = titlesJson[2][0];
    const firstArticleUrl = titlesJson[3][0];
    if (
      [firstAtricleTitle, firstArticleSummary, firstArticleUrl].some(
        res => res === undefined
      )
    ) {
      return undefined;
    }
    const cityData = {
      articleTitle: firstAtricleTitle,
      articleSummary: firstArticleSummary,
      articleUrl: firstArticleUrl
    };
    return composeF(assessCityDataQuiality, removeSummaryStopWords)(cityData);
  } catch (err) {
    return undefined;
  }
};
