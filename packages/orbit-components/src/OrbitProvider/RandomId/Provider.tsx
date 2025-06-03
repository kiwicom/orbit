import * as React from "react";

const RandomIdContext = React.createContext<() => string>(() => {
  throw new Error(
    "Orbit RandomIdProvider: Internal error - RandomIdContext used outside of Provider.",
  );
});

const RandomIdProvider = ({ children }: { children: React.ReactNode }) => {
  const generateId = React.useId;
  return <RandomIdContext value={generateId}>{children}</RandomIdContext>;
};

export const useRandomId = () => React.useContext(RandomIdContext);

export default RandomIdProvider;
