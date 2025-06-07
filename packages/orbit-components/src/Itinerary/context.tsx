import * as React from "react";

interface Context {
  setItinerarySegmentMinimalColumnWidth: (width: number) => void;
  itinerarySegmentMinimalColumnWidth: number;
}

export const ItineraryContext = React.createContext<Context>({
  setItinerarySegmentMinimalColumnWidth: () => {},
  itinerarySegmentMinimalColumnWidth: 0,
});

export const ItineraryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement<Context> => {
  const [minWidth, setMinWidth] = React.useState(70);

  const setItinerarySegmentMinimalColumnWidth = React.useCallback(
    (val: number) => {
      setMinWidth(prev => Math.max(prev, val));
    },
    [setMinWidth],
  );

  const value = React.useMemo(
    () => ({
      setItinerarySegmentMinimalColumnWidth,
      itinerarySegmentMinimalColumnWidth: minWidth,
    }),
    [setItinerarySegmentMinimalColumnWidth, minWidth],
  );

  return <ItineraryContext value={value}>{children}</ItineraryContext>;
};

export const useItinerarySegmentMinimalColumnWidth = (): Context =>
  React.useContext(ItineraryContext);
