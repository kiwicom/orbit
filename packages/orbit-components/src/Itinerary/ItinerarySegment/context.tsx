import * as React from "react";

interface Context {
  isNextHidden: boolean;
  isPrevHidden: boolean;
  noElevation: boolean;
  isHidden: boolean;
  isBanner: boolean;
  index: number;
  opened: boolean;
  last: boolean;
  count: number;
}

export const ItinerarySegmentContext = React.createContext<Context>({
  isNextHidden: false,
  isPrevHidden: false,
  isBanner: false,
  isHidden: false,
  noElevation: false,
  opened: false,
  index: 0,
  count: 0,
  last: false,
});

export const usePart = (): Context => React.useContext(ItinerarySegmentContext);

export const ItinerarySegmentProvider = ({
  isNextHidden,
  isPrevHidden,
  noElevation,
  isHidden,
  isBanner,
  children,
  index,
  opened,
  last,
  count,
}: React.PropsWithChildren<Context>) => {
  const value = React.useMemo(
    () => ({
      isNextHidden,
      isPrevHidden,
      noElevation,
      isHidden,
      isBanner,
      index,
      opened,
      last,
      count,
    }),
    [isNextHidden, isPrevHidden, noElevation, isHidden, isBanner, index, opened, last, count],
  );
  return <ItinerarySegmentContext value={value}>{children}</ItinerarySegmentContext>;
};
