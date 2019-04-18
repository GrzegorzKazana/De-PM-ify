import React from "react";
import styles from "./styles/CityDataCardContent.module.scss";
import { cityPropTypes } from "./CityDataCard";
import { TextButton } from "../Common/Buttons/Buttons";

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
  return (
    <div className={styles.CityDataCard__Content}>
      {city.data.isCorrect && <CityDataContentCardCorrect city={city} />}
      {city.data.isAmbigious && <CityDataContentCardAmbigious city={city} />}
      {(city.data.isInvalid === undefined || city.data.isInvalid) && (
        <CityDataContentCardFailed city={city} />
      )}
    </div>
  );
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
