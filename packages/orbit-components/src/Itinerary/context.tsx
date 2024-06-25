import * as React from "react";

interface Context {
  setWidth: (width: number) => void;
  calculatedWidth: number;
}

export const ItineraryContext = React.createContext<Context>({
  setWidth: () => {},
  calculatedWidth: 0,
});

export const ItineraryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement<Context> => {
  const [calculatedWidth, setCalculatedWidth] = React.useState(70);

  const setWidth = React.useCallback(
    (val: number) => {
      setCalculatedWidth(prev => Math.max(prev, val));
    },
    [setCalculatedWidth],
  );

  const value = React.useMemo(
    () => ({
      setWidth,
      calculatedWidth,
    }),
    [setWidth, calculatedWidth],
  );

  return <ItineraryContext.Provider value={value}>{children}</ItineraryContext.Provider>;
};

export const useWidth = (): Context => React.useContext(ItineraryContext);
