import React, { Component } from "react";
import styles from "./App.module.scss";
import Hero from "./components/Headers/Hero";
import Footer from "./components/Headers/Footer";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
