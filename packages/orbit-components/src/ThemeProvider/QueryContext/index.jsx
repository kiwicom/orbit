// @flow
import * as React from "react";

import useTheme from "../../hooks/useTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery";

import typeof ContextType, { QueryContextProvider as ProviderType } from ".";
import type { QueryMap, Context } from ".";

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

type Query = $Keys<Context>;

const QUERIES: Query[] = Object.keys(initialValue);

export const QueryContextProvider: ProviderType = ({ children }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    let mqListMap: QueryMap<MediaQueryList>;

    const listener = () => {
      setValue(prev => {
        const result = { ...prev };
        QUERIES.forEach(query => {
          result[query] = mqListMap[query].matches;
        });
        return result;
      });
    };

    if (window !== "undefined") {
      const createMqList = (mediaQuery: string): MediaQueryList => {
        const mqList = window.matchMedia(mediaQuery);
        mqList.addEventListener("change", listener);
        return mqList;
      };

      mqListMap = {
        isMediumMobile: createMqList(getBreakpointWidth("mediumMobile", theme)),
        isLargeMobile: createMqList(getBreakpointWidth("largeMobile", theme)),
        isTablet: createMqList(getBreakpointWidth("tablet", theme)),
        isDesktop: createMqList(getBreakpointWidth("desktop", theme)),
        isLargeDesktop: createMqList(getBreakpointWidth("largeDesktop", theme)),
        prefersReducedMotion: createMqList("(prefers-reduced-motion: reduce)"),
      };

      // initialize
      listener();
    }

    return () => {
      QUERIES.forEach(query => {
        mqListMap[query].removeListener(listener);
      });
    };
  }, [theme]);

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryContext;
