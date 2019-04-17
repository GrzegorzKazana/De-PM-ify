import React from "react";
import PropTypes from "prop-types";
import styles from "./App.module.scss";
import Hero from "./components/Headers/Hero";
import Footer from "./components/Headers/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";

import { connect } from "react-redux";
import { fetchCountryData } from "./actions/CitiesActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchCountryCities: () => dispatch(fetchCountryData("PL", 10))
});

const App = props => (
  <div className={styles.App} onClick={props.fetchCountryCities}>
    <Hero />
    <SearchBar loading={false} />
    <Results open={false} />
    <Footer />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  fetchCountryCities: PropTypes.func.isRequired
};
