import React from "react";
import styles from "./styles/CityDataCardContent.module.scss";
import { cityPropTypes } from "./CityDataCard";
import { TextButton } from "../Common/Buttons/Buttons";
import { cityKeywords } from "../../config/CityKeywords";

const isDataCorrect = city => city.dataLoaded && city.data.articleSummary;
const CityDataContentCorrect = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMain}>
      {city.dataLoaded && <p>{city.data.articleSummary}</p>}
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton
        text="more"
        onClick={() => window.open(city.data.articleUrl, "_blank")}
      />
    </div>
  </>
);

//if wiki text contains "refer" or does not contain any of city keywords
//its marked as ambigious
const isDataAmbigious = city =>
  city.data.articleSummary.includes("refer") ||
  !cityKeywords
    .map(keyword => city.data.articleSummary.includes(keyword))
    .some(x => x);
const CityDataContentAmbigious = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMainAmbigious}>
      <p>{city.data.articleSummary}</p>
      <div>This seems a little ambigious, was it what you are looking for?</div>
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton
        text="let me clear this up"
        onClick={() => window.open(city.data.articleUrl, "_blank")}
      />
    </div>
  </>
);

const wikiSearchUrl = "https://en.wikipedia.org/w/index.php?search=";
const CityDataContentFailed = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMainFailed}>
      <p>Oops! It seems we could not find data you are looking for...</p>
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton
        text="let me handle that"
        onClick={() => window.open(wikiSearchUrl + city.city, "_blank")}
      />
    </div>
  </>
);

const CityDataContent = ({ city }) => (
  <div className={styles.CityDataCard__Content}>
    {isDataCorrect(city) ? (
      isDataAmbigious(city) ? (
        <CityDataContentAmbigious city={city} />
      ) : (
        <CityDataContentCorrect city={city} />
      )
    ) : (
      <CityDataContentFailed city={city} />
    )}
  </div>
);
export default CityDataContent;

CityDataContent.propTypes = {
  ...cityPropTypes
};

CityDataContentCorrect.propTypes = {
  ...cityPropTypes
};

CityDataContentAmbigious.propTypes = {
  ...cityPropTypes
};

CityDataContentFailed.propTypes = {
  ...cityPropTypes
};
