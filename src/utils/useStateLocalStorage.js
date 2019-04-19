import { useState } from "react";

const useStateLocalStorage = (keyName, initialState) => {
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
export default useStateLocalStorage;
