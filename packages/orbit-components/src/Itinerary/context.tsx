import * as React from "react";

interface Context {
  setWidths: React.Dispatch<React.SetStateAction<number[]>>;
  calculatedWidth: number;
}

export const ItineraryContext = React.createContext({
  setWidths: () => {},
  calculatedWidth: 0,
});

export const ItineraryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement<Context> => {
  const [widths, setWidths] = React.useState([70]);
  const [calculatedWidth, setCalculatedWidth] = React.useState(0);

  React.useEffect(() => {
    setCalculatedWidth(Math.max(...widths));
  }, [widths]);

  return (
    <ItineraryContext.Provider
      value={{
        calculatedWidth,
        // @ts-expect-error FIXME
        setWidths,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};

export const useWidth = (): Context => React.useContext(ItineraryContext);
