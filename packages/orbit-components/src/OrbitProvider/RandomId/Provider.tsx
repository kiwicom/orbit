import * as React from "react";

const RandomIdContext = React.createContext<() => string>(() => {
  throw new Error(
    "Orbit RandomIdProvider: useId is undefined; please provide React.useId or `react-uid`'s useUID.",
  );
});

const RandomIdProvider = ({
  children,
  useId,
}: {
  children: React.ReactNode;
  useId: () => string;
}) => {
  return <RandomIdContext.Provider value={useId}>{children}</RandomIdContext.Provider>;
};

export const useRandomId = () => React.useContext(RandomIdContext);

export default RandomIdProvider;
