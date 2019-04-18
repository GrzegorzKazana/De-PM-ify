import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Results.module.scss";
import CityDataCard from "./CityDataCard";

const Results = ({ open, cities, inputRef }) => (
  <main className={styles.Resuls__Wrapper} ref={inputRef}>
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
  cities: PropTypes.array,
  inputRef: PropTypes.object
};
