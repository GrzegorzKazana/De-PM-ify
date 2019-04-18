import { stringifyRequest } from "./Common";

const baseUrl = "https://en.wikipedia.org/w/api.php";

const findArticleTitle = async title => {
  const params = {
    action: "opensearch",
    format: "json",
    origin: "*",

    search: title
  };
  const url = stringifyRequest(baseUrl, params);
  const titlesResponse = await fetch(url);
  const titlesJson = await titlesResponse.json();
  const firstAtricleTitle = titlesJson[1][0];
  const firstArticleUrl = titlesJson[3][0];
  return {
    articleTitle: firstAtricleTitle,
    articleUrl: firstArticleUrl
  };
};

const fetchArticleSummary = async title => {
  const params = {
    prop: ["extracts", "exintro", "explaintext"],
    redirects: 1,
    action: "query",
    format: "json",
    origin: "*",
    titles: title
  };
  const url = stringifyRequest(baseUrl, params);
  const summaryResponse = await fetch(url);
  const summaryJson = await summaryResponse.json();
  const pageId = Object.keys(summaryJson.query.pages)[0];
  const articleTitle = summaryJson.query.pages[pageId].title;
  const articleSummary = summaryJson.query.pages[pageId].extract;
  return {
    articleTitle: articleTitle,
    articleSummary: articleSummary
  };
};

export const fetchCityWikiData = async cityName => {
  const cityArticleTitleUrl = await findArticleTitle(cityName);
  const cityArticleTitle = cityArticleTitleUrl.articleTitle;
  const cityArticleTitleSummary = await fetchArticleSummary(cityArticleTitle);
  //merge cityArticleTitlesUrls with cityArticleTitlesSummaries
  //based on Title key
  const cityArticleTitleUrlSummary = {
    ...cityArticleTitleUrl,
    ...cityArticleTitleSummary
  };
  return cityArticleTitleUrlSummary;
};
