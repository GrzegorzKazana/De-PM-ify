import React, { useState } from "react";
import "./styles/ReactAutosuggestStyles.scss";
import styles from "./styles/SearchBar.module.scss";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import Spinner from "../Common/Spinner/Spinner";
import useStateLocalStorage from "../../utils/useStateLocalStorage";
import AvailableCountries from "../../config/AvailableCountries";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

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
  const [value, setValue] = useStateLocalStorage("input_value", "");
  const [suggestions, setSuggestions] = useState([]);
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
    choosenCountry ? onSubmit(choosenCountry.code) : setInputValid(false);
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
