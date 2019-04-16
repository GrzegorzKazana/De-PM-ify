import React from "react";
import styles from "./SearchBar.module.scss";
import SearchInput from "./SearchInput";

const SearchBar = () => (
  <nav className={styles.SearchBar__Wrapper}>
    <SearchInput />
  </nav>
);
export default SearchBar;
