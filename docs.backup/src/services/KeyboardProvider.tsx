import * as React from "react";
import tinykeys from "tinykeys";

export const KeyboardContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

export const KeyboardContextProvider = ({ children }) => {
  const [isSearchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = tinykeys(window, {
      "$mod+Shift+KeyK": () => {
        setSearchOpen(prev => !prev);
      },
    });
    return () => unsubscribe();
  }, [setSearchOpen]);

  const value = React.useMemo<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(
    () => [isSearchOpen, setSearchOpen],
    [isSearchOpen, setSearchOpen],
  );

  return <KeyboardContext.Provider value={value}>{children}</KeyboardContext.Provider>;
};

export const useKeyboard = () => React.useContext(KeyboardContext);
