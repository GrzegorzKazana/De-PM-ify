import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Results.module.scss";
import CityDataCard from "./CityDataCard";

const Results = ({ open, cities, inputRef, requestCityData }) => {
  const bodyClassName = `${styles.Results__Body} ${
    open ? styles.Results__BodyOpen : styles.Results__BodyClosed
  }`;

  return (
    <main className={styles.Resuls__Wrapper} ref={inputRef}>
      <section className={bodyClassName}>
        {cities.map(city => (
          <CityDataCard
            key={city.city}
            city={city}
            requestCityData={requestCityData}
          />
        ))}
      </section>
    </main>
  );
};
export default Results;

Results.propTypes = {
  open: PropTypes.bool.isRequired,
  cities: PropTypes.array,
  inputRef: PropTypes.object
};
