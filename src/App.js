import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.scss";
import Hero from "./components/Headers/Hero";
import Footer from "./components/Headers/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";

import { connect } from "react-redux";
import { fetchAllCityData } from "./actions/CitiesActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchCities: countryCode => dispatch(fetchAllCityData(countryCode, 10))
});

const App = props => {
  const resultBodyRef = React.createRef();
  const scrollToBody = () =>
    window.scrollTo({
      top: resultBodyRef.current.offsetTop,
      behavior: "smooth"
    });

  useEffect(() => {
    //scroll to results evey timenew cities are loaded
    props.citiesLoaded && !props.citiesFetching && scrollToBody();
  }, [props.citiesLoaded, props.citiesFetching]);

  return (
    <div className={styles.App}>
      <Hero />
      <SearchBar loading={props.citiesFetching} onSubmit={props.fetchCities} />
      <Results
        open={props.citiesLoaded}
        cities={props.cities}
        inputRef={resultBodyRef}
      />
      <Footer />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  fetchCities: PropTypes.func.isRequired
};
