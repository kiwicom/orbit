import * as React from "react";

interface Context {
  isNextHidden: boolean;
  isPrevHidden: boolean;
  noElevation: boolean;
  isHidden: boolean;
  isBanner: boolean;
  index: number;
  opened: boolean;
  toggleOpened: () => void;
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
  toggleOpened: () => {},
  index: 0,
  count: 0,
  last: false,
});

export const usePart = (): Context => React.useContext(ItinerarySegmentContext);
