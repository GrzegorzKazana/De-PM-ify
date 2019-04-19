import React from "react";
import styles from "./styles/Results.module.scss";
import PropTypes from "prop-types";
import CityDataCardSummary from "./CityDataCardSummary";
import CityDataCardContent from "./CityDataCardContent";

const CityDataCard = props => (
  <details
    className={styles.CityDataCard__Wrapper}
    onClick={() => props.requestCityData(props.city)}
  >
    <CityDataCardSummary {...props} />
    <CityDataCardContent {...props} />
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
  ...cityPropTypes
};
