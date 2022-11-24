import * as React from "react";

import type { QueryMap } from "../../hooks/useMediaQuery/types";

export const initialValue = {
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
};

const QueryContext = React.createContext<QueryMap<null | boolean>>(initialValue);
QueryContext.displayName = "QueryOrbitContext";

export default QueryContext;
