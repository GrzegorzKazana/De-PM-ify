import React, { Component } from "react";
import styles from "./App.module.scss";
import Hero from "./components/Headers/Hero";
import Footer from "./components/Headers/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Hero />
        <SearchBar />
        <Results />
        <Footer />
      </div>
    );
  }
}

export default App;
