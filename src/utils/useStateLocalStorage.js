import { useState } from "react";

export const useStateLocalStorage = (keyName, initialState) => {
  const [state, setState] = useState(
    localStorage.getItem(keyName) || initialState
  );

  //wrap setState
  const setStateAndWriteLocal = newState => {
    localStorage.setItem(keyName, newState);
    setState(newState);
  };

  return [state, setStateAndWriteLocal];
};

export const useStateLocalStorageObject = (keyName, initialState) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(keyName)) || initialState
  );

  //wrap setState
  const setStateAndWriteLocal = newState => {
    localStorage.setItem(keyName, JSON.stringify(newState));
    setState(newState);
  };

  return [state, setStateAndWriteLocal];
};
