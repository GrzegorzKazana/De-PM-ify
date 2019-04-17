import React from "react";
import PropTypes from "prop-types";
import styles from "./Results.module.scss";

const CityDataSummary = () => <summary>nazwa miasta itp</summary>;

const CityDataContent = () => <p>Informacje szczegółowe na dany temat.</p>;

const CityDataCard = ({ city }) => (
  <details>
    <CityDataSummary />
    <CityDataContent />
  </details>
);
export default CityDataCard;

CityDataCard.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    parameter: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  })
};
