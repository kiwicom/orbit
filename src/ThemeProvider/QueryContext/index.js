// @flow
import * as React from "react";

import type { QueryContextType } from ".";

const QueryContext: QueryContextType = React.createContext({
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
});
QueryContext.displayName = "QueryOrbitContext";

export default QueryContext;
