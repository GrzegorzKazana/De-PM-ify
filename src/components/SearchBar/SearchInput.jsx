import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ReactAutosuggestStyles.scss";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Spinner from "../Common/Spinner/Spinner";
import Autosuggest from "react-autosuggest";
import AvailableCountries from "../../config/AvailableCountries";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : AvailableCountries.filter(
        country => country.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = country => country;

const renderSuggestion = suggestion => <div>{suggestion}</div>;

const SearchInput = ({ loading }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const onInputChange = (e, { newValue }) => setValue(newValue);
  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));
  const onSuggestionsClearRequested = () => setSuggestions([]);

  const inputProps = {
    placeholder: "Type country name",
    value,
    onChange: onInputChange
  };

  return (
    <form className={styles.SearchInput__Wrapper}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button className={styles.SearchInput__Button}>
        {loading ? <Spinner /> : <SearchIcon />}
      </button>
    </form>
  );
};
export default SearchInput;

SearchInput.propTypes = {
  loading: PropTypes.bool.isRequired
};
