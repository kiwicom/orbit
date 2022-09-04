import * as React from "react";

export const initialValue = {
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
};

const QueryContext = React.createContext(initialValue);
QueryContext.displayName = "QueryOrbitContext";

export default QueryContext;
