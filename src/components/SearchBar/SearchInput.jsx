import React from "react";
import styles from "./SearchBar.module.scss";

const SearchInput = () => (
  <form className={styles.SearchInput__Wrapper}>
    <input type="text" className={styles.SearchInput__Input} />
    <button className={styles.SearchInput__Button}>Search</button>
  </form>
);
export default SearchInput;
