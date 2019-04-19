import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Results.module.scss";
import { ReactComponent as ArrowLogo } from "../../assets/arrow_down_icon.svg";
import { cityPropTypes } from "./CityDataCard";

const CityDataSummary = ({ city, requestCityData }) => {
  const requestCityDataFetch = () => {
    !city.dataLoaded && requestCityData(city);
  };

  return (
    <summary
      className={styles.CityDataCard__Summary}
      onClick={requestCityDataFetch}
    >
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
};
export default CityDataSummary;

CityDataSummary.propTypes = {
  ...cityPropTypes,
  requestCityData: PropTypes.func.isRequired
};
