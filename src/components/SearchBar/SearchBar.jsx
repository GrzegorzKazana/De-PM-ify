import React from "react";
import styles from "./SearchBar.module.scss";
import SearchInput from "./SearchInput";

const SearchBar = props => (
  <nav className={styles.SearchBar__Wrapper}>
    <SearchInput {...props} />
  </nav>
);
export default SearchBar;
