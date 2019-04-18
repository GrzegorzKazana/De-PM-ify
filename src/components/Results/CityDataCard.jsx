import React from "react";
import styles from "./Results.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as ArrowLogo } from "../../assets/arrow_down_icon.svg";
import { TextButton } from "../Common/Buttons/Buttons";

const CityDataSummary = ({ city }) => (
  <summary className={styles.CityDataCard__Summary}>
    <ArrowLogo />
    <div className={styles.CityDataCard__Header}>
      <span className={styles.CityDataCard__Cityname}>{city.city}</span>
      <div>
        <span className={styles.CityDataCard__Parameter}>
          {city.parameter}:&nbsp;
        </span>
        <span className={styles.CityDataCard__Value}>
          {Math.round(city.value)}
        </span>
        <span className={styles.CityDataCard__Unit}>{city.unit}</span>
      </div>
    </div>
  </summary>
);

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

const CityDataContentFailed = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMainFailed}>
      <p>Oops! It seems we could not find data you are looking for...</p>
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton
        text="let me handle that"
        onClick={() => window.open(city.data.articleUrl, "_blank")}
      />
    </div>
  </>
);

const CityDataContent = ({ city }) => (
  <div className={styles.CityDataCard__Content}>
    {city.dataLoaded ? (
      city.data.articleSummary.includes("refer") ? (
        <CityDataContentAmbigious city={city} />
      ) : (
        <CityDataContentCorrect city={city} />
      )
    ) : (
      <CityDataContentFailed city={city} />
    )}
  </div>
);

const CityDataCard = ({ city }) => (
  <details className={styles.CityDataCard__Wrapper}>
    <CityDataSummary city={city} />
    <CityDataContent city={city} />
  </details>
);
export default CityDataCard;

const cityPropTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    parameter: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }).isRequired
};

CityDataSummary.propTypes = {
  ...cityPropTypes
};

CityDataContent.propTypes = {
  ...cityPropTypes
};

CityDataCard.propTypes = {
  ...cityPropTypes
};
