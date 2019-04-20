import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.scss";
import Header from "./components/Headers/Header";
import Footer from "./components/Headers/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import { Snackbar } from "react-redux-snackbar";

import { connect } from "react-redux";
import { fetchCityList, fetchCityWikiData } from "./actions/CitiesActions";

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
      <Header />
      <SearchBar loading={props.citiesFetching} onSubmit={props.fetchCities} />
      <Results
        open={props.citiesLoaded}
        cities={props.cities}
        inputRef={resultBodyRef}
        requestCityData={props.fetchCityData}
      />
      <Footer />
      <Snackbar />
    </div>
  );
};

const mapStateToProps = state => state.cities;

const mapDispatchToProps = dispatch => ({
  fetchCities: (countryCode, parameter) =>
    dispatch(fetchCityList(countryCode, 10, parameter)),
  fetchCityData: city => dispatch(fetchCityWikiData(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired
};
