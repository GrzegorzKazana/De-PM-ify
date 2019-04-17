import React, { Component } from "react";
import styles from "./App.module.scss";
import Hero from "./components/Headers/Hero";
import Footer from "./components/Headers/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";

import { connect } from "react-redux";
import { fetchCountryData } from "./actions/CitiesActions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchCountryData_: () => dispatch(fetchCountryData("PL", -1))
});

class App extends Component {
  render() {
    return (
      <div className={styles.App} onClick={this.props.fetchCountryData_}>
        <Hero />
        <SearchBar loading={false} />
        <Results open={false} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
