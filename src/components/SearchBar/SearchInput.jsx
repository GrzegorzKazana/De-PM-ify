import React, { useState } from "react";
import "./styles/ReactAutosuggestStyles.scss";
import "./styles/ReactSelectStyles.scss";
import styles from "./styles/SearchBar.module.scss";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import Select from "react-select";
import Spinner from "../Common/Spinner/Spinner";
import {
  useStateLocalStorage,
  useStateLocalStorageObject
} from "../../utils/useStateLocalStorage";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import {
  getSuggestions,
  getSuggestionValue,
  renderSuggestion,
  findChoosenCountry,
  shouldRenderSuggestions
} from "./SearchInputHelpers";
import AvailableParameters from "../../config/AvailableParameters";

const SearchInput = ({ loading, onSubmit }) => {
  const [value, setValue] = useStateLocalStorage("input_value", "");
  const [valueSelect, setValueSelect] = useStateLocalStorageObject(
    "select_value",
    AvailableParameters[0]
  );
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
    const choosenCountry = findChoosenCountry(value);
    choosenCountry
      ? onSubmit(choosenCountry.code, valueSelect.value)
      : setInputValid(false);
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
        shouldRenderSuggestions={shouldRenderSuggestions}
        highlightFirstSuggestion
      />
      <Select
        value={valueSelect}
        options={AvailableParameters}
        onChange={setValueSelect}
        placeholder="Parameter"
        className="react-select-container"
        classNamePrefix="react-select"
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
