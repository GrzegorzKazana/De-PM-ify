import React from "react";
import styles from "./styles/CityDataCardContent.module.scss";
import { cityPropTypes } from "./CityDataCard";
import { TextButton } from "../Common/Buttons/Buttons";
import { cityKeywords } from "../../config/CityKeywords";

const isDataCorrect = city => city.dataLoaded && city.data.articleSummary;
const CityDataContentCardCorrect = ({ city }) => (
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
const CityDataContentCardAmbigious = ({ city }) => (
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
const CityDataContentCardFailed = ({ city }) => (
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

const CityDataCardContent = ({ city }) => {
  const content = isDataCorrect(city) ? (
    isDataAmbigious(city) ? (
      <CityDataContentCardAmbigious city={city} />
    ) : (
      <CityDataContentCardCorrect city={city} />
    )
  ) : (
    <CityDataContentCardFailed city={city} />
  );

  return <div className={styles.CityDataCard__Content}>{content}</div>;
};
export default CityDataCardContent;

CityDataCardContent.propTypes = {
  ...cityPropTypes
};

CityDataContentCardCorrect.propTypes = {
  ...cityPropTypes
};

CityDataContentCardAmbigious.propTypes = {
  ...cityPropTypes
};

CityDataContentCardFailed.propTypes = {
  ...cityPropTypes
};
