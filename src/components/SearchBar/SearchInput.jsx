import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ReactAutosuggestStyles.scss";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Spinner from "../Common/Spinner/Spinner";
import useStateLocalStorage from "../../utils/useStateLocalStorage";
import Autosuggest from "react-autosuggest";
import AvailableCountries from "../../config/AvailableCountries";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? AvailableCountries
    : AvailableCountries.filter(
        country =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = country => country.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const SearchInput = ({ loading, onSubmit }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useStateLocalStorage("input_value", "");
  const [inputValid, setInputValid] = useState(true);

  const onInputChange = (e, { newValue }) => {
    setInputValid(true);
    setValue(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));
  const onSuggestionsClearRequested = () => setSuggestions([]);
  const handleSubmit = e => {
    const choosenCountry = AvailableCountries.find(
      country => country.name.toLowerCase() === value.trim().toLowerCase()
    );
    if (choosenCountry) {
      onSubmit(choosenCountry.code);
    } else {
      setInputValid(false);
    }
    e.preventDefault();
  };

  const inputProps = {
    placeholder: "Type country name",
    value,
    onChange: onInputChange,
    className: `react-autosuggest__input${
      inputValid ? "" : " react-autosuggest__input--error"
    }`
  };

  return (
    <form className={styles.SearchInput__Wrapper} onSubmit={handleSubmit}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        alwaysRenderSuggestions
        highlightFirstSuggestion
      />
      <button className={styles.SearchInput__Button}>
        {loading ? <Spinner /> : <SearchIcon />}
      </button>
    </form>
  );
};
export default SearchInput;

SearchInput.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};
