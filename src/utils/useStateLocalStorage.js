import { useState, useEffect } from "react";

const useStateLocalStorage = (keyName, initialState) => {
  const [state, setState] = useState(initialState);

  //run on mount
  useEffect(() => {
    const localData = localStorage.getItem(keyName) || initialState;
    setState(localData);
  }, []);

  //wrap setState
  const setStateAndWriteLocal = newState => {
    localStorage.setItem(keyName, newState);
    setState(newState);
  };

  return [state, setStateAndWriteLocal];
};
export default useStateLocalStorage;
