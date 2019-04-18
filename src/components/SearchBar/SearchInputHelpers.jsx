import React from "react";
import AvailableCountries from "../../config/AvailableCountries";

export const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? AvailableCountries
    : AvailableCountries.filter(
        country =>
          country.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

export const getSuggestionValue = country => country.name;

export const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

export const shouldRenderSuggestions = () => true;

export const findChoosenCountry = input =>
  AvailableCountries.find(
    country => country.name.toLowerCase() === input.trim().toLowerCase()
  );
