import React from "react";
import styles from "./styles/CityDataCardContent.module.scss";
import Spinner from "../Common/Spinner/Spinner";
import { openLink } from "../../utils/OpenLink";
import { wikiSearchUrl } from "../../config/Urls";
import { cityPropTypes } from "./CityDataCard";
import { TextButton } from "../Common/Buttons/Buttons";

const CityDataContentCardCorrect = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMain}>
      {city.dataLoaded && <p>{city.data.articleSummary}</p>}
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton text="more" onClick={() => openLink(city.data.articleUrl)} />
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
        onClick={() => openLink(city.data.articleUrl)}
      />
    </div>
  </>
);

const CityDataContentCardInvalid = ({ city }) => (
  <>
    <div className={styles.CityDataCard__ContentMainFailed}>
      <p>Oops! It seems we could not find data you are looking for...</p>
    </div>
    <div className={styles.CityDataCard__ContentFooter}>
      <TextButton
        text="let me handle that"
        onClick={() => openLink(wikiSearchUrl + city.city)}
      />
    </div>
  </>
);

const CityDataContentCardLoading = () => (
  <div className={styles.CityDataCard__ContentMainLoading}>
    <Spinner />
  </div>
);

const CityDataCardContent = ({ city }) => {
  return (
    <div className={styles.CityDataCard__Content}>
      {city.dataFetching ? (
        <CityDataContentCardLoading />
      ) : city.data.isInvalid === undefined || city.data.isInvalid ? (
        <CityDataContentCardInvalid city={city} />
      ) : city.data.isCorrect ? (
        <CityDataContentCardCorrect city={city} />
      ) : city.data.isAmbigious ? (
        <CityDataContentCardAmbigious city={city} />
      ) : null}
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

CityDataContentCardInvalid.propTypes = {
  ...cityPropTypes
};
