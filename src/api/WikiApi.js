import { stringifyUrlRequest } from "../utils/StringifyUrlRequest";
import { assessCityDataQuiality } from "../utils/WikiDataPipelineHelpers";
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

    const assessedCityData = assessCityDataQuiality(cityData);
    return assessedCityData;
  } catch (err) {
    return undefined;
  }
};
