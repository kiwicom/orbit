// @flow
import * as React from "react";
import tinykeys from "tinykeys";

export const KeyboardContext = React.createContext({
  isSearchOpened: false,
  setSearchOpened: {},
});

export const KeyboardContextProvider = ({ children }) => {
  const [isSearchOpened, setSearchOpened] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+KeyK": () => {
        setSearchOpened(prev => !prev);
      },
    });
    return () => unsubscribe();
  }, [setSearchOpened]);

  return (
    <KeyboardContext.Provider value={{ isSearchOpened, setSearchOpened }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => React.useContext(KeyboardContext);
