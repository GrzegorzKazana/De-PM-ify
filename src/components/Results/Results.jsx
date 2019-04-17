import React from "react";
import PropTypes from "prop-types";
import styles from "./Results.module.scss";
import CityDataCard from "./CityDataCard";

const Results = ({ open, cities }) => (
  <main className={styles.Resuls__Wrapper}>
    <section
      className={`${styles.Results__Body} ${
        open ? styles.Results__BodyOpen : styles.Results__BodyClosed
      }`}
    >
      {cities.map(city => (
        <CityDataCard key={city.city} city={city} />
      ))}
    </section>
  </main>
);
export default Results;

Results.propTypes = {
  open: PropTypes.bool.isRequired,
  cities: PropTypes.array
};
