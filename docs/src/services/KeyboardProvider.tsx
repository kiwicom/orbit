// @flow
import * as React from "react";
import tinykeys from "tinykeys";

export const KeyboardContext = React.createContext<[boolean, (val: boolean) => void]>([
  false,
  () => {},
]);

export const KeyboardContextProvider = ({ children }) => {
  const [isSearchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+KeyK": () => {
        setSearchOpen(prev => !prev);
      },
    });
    return () => unsubscribe();
  }, [setSearchOpen]);

  return (
    <KeyboardContext.Provider value={[isSearchOpen, setSearchOpen]}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => React.useContext(KeyboardContext);
