import * as React from "react";

const RandomIdContext = React.createContext<() => string>(() => {
  throw new Error(
    "Orbit RandomIdProvider: Internal error - RandomIdContext used outside of Provider.",
  );
});

const RandomIdProvider = ({ children }: { children: React.ReactNode }) => {
  const generateId = React.useId;
  return <RandomIdContext.Provider value={generateId}>{children}</RandomIdContext.Provider>;
};

export const useRandomId = () => React.useContext(RandomIdContext);

export default RandomIdProvider;
