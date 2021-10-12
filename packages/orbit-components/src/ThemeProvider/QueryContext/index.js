// @flow
import * as React from "react";

import useTheme from "../../hooks/useTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery";

import typeof ContextType, { QueryContextProvider as ProviderType } from ".";

const initialValue = {
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
};

const QueryContext: ContextType = React.createContext(initialValue);
QueryContext.displayName = "QueryOrbitContext";

type Query = $Keys<typeof initialValue>;

const QUERIES: Query[] = Object.keys(initialValue);
const DEVICE = {
  isMediumMobile: "mediumMobile",
  isLargeMobile: "largeMobile",
  isTablet: "tablet",
  isDesktop: "desktop",
  isLargeDesktop: "largeDesktop",
};

export const QueryContextProvider: ProviderType = ({ children }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    const mqLists: Array<{|
      query: Query,
      mqList: MediaQueryList,
    |}> = [];

    const queryChangeHandler = () => {
      setValue(prev => {
        const result = { ...prev };
        mqLists.forEach(({ query, mqList }) => {
          result[query] = mqList.matches;
        });
        return result;
      });
    };

    if (window !== "undefined") {
      QUERIES.forEach(query => {
        const mqList = window.matchMedia(
          query === "prefersReducedMotion"
            ? `(prefers-reduced-motion: reduce)`
            : getBreakpointWidth(DEVICE[query], theme),
        );
        mqLists.push({ query, mqList });
        mqList.addListener(queryChangeHandler);
      });
    }

    // initialize
    queryChangeHandler();

    return () => {
      mqLists.forEach(({ mqList }) => mqList.removeListener(queryChangeHandler));
    };
  }, [theme]);

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryContext;
