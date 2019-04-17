import { stringifyRequest } from "./Common";

const baseUrl = "https://en.wikipedia.org/w/api.php";

const findArticleTitle = async title => {
  const params = {
    action: "opensearch",
    format: "json",
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

const fetchArticlesSummary = async articleTitles => {
  const params = {
    prop: "extracts&exintro&explaintext",
    redirects: 1,
    action: "query",
    format: "json",
    titles: articleTitles.join("|")
  };
  const url = stringifyRequest(baseUrl, params);
  const summaryResponse = await fetch(url);
  const summaryJson = await summaryResponse.json();
  const pageIds = Object.keys(summaryJson.query.pages);
  const articleTitles = pageIds.map(id => summaryJson.query.pages[id].title);
  const articleSummaries = pageIds.map(
    id => summaryJson.query.pages[id].extract
  );
  return articleTitles.map((title, idx) => ({
    articleTitle: title,
    articleSummary: articleSummaries[idx]
  }));
};

const fetchCitiesData = async cities => {
  const cityArticleTitlesUrls = cities.map(
    async city => await findArticleTitle(city)
  );
  const cityArticleTitles = cityArticleTitlesUrls.map(
    cityAT => cityAT.articleTitle
  );
  const cityArticleTitlesSummaries = await fetchArticlesSummary(
    cityArticleTitles
  );
  //merge cityArticleTitlesUrls with cityArticleTitlesSummaries
  //based on Title key
  const cityArticleTitlesUrlsSummaries = cityArticleTitlesUrls.map(cityATU => ({
    ...cityATU,
    ...cityArticleTitlesSummaries.find(
      cityATS => cityATS.articleTitle === cityATU.articleTitle
    )
  }));
  return cityArticleTitlesUrlsSummaries;
};
