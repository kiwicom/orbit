// @flow
import * as React from "react";

import typeof ContextType from ".";

export const initialValue = {
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
};

const QueryContext: ContextType = React.createContext(initialValue);
QueryContext.displayName = "QueryOrbitContext";

export default QueryContext;
