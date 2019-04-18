import { stringifyRequest } from "./Common";

const baseUrl = "https://en.wikipedia.org/w/api.php";

export const fetchCityWikiData = async title => {
  const params = {
    action: "opensearch",
    format: "json",
    origin: "*",
    search: title
  };
  const url = stringifyRequest(baseUrl, params);
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
    return {
      articleTitle: firstAtricleTitle,
      articleSummary: firstArticleSummary,
      articleUrl: firstArticleUrl
    };
  } catch (err) {
    return undefined;
  }
};
