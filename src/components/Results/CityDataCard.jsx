import React from "react";
import styles from "./styles/Results.module.scss";
import PropTypes from "prop-types";
import CityDataCardSummary from "./CityDataCardSummary";
import CityDataCardContent from "./CityDataCardContent";

const CityDataCard = ({ requestCityData, ...cityProps }) => (
  <details className={styles.CityDataCard__Wrapper}>
    <CityDataCardSummary {...cityProps} requestCityData={requestCityData} />
    <CityDataCardContent {...cityProps} />
  </details>
);
export default CityDataCard;

export const cityPropTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    parameter: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }).isRequired
};

CityDataCard.propTypes = {
  ...cityPropTypes,
  requestCityData: PropTypes.func.isRequired
};
