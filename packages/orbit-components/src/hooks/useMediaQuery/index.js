// @flow
import * as React from "react";

import useTheme from "../useTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import QueryContext, { initialValue } from "../../ThemeProvider/QueryContext";

import typeof UseMediaQuery from ".";
import type { QueryMap } from ".";

type Query = $Keys<QueryMap<any>>;

const QUERIES: Query[] = [
  "isMediumMobile",
  "isLargeMobile",
  "isTablet",
  "isDesktop",
  "isLargeDesktop",
  "prefersReducedMotion",
];

const useMediaQuery: UseMediaQuery = () => {
  const theme = useTheme();

  const contextValue = React.useContext(QueryContext);
  const [result, setResult] = React.useState<QueryMap<null | boolean>>(contextValue);

  // if context value is anything other than initial, it's available
  const hasContext = React.useMemo(
    () => QUERIES.some(query => contextValue[query] !== initialValue[query]),
    [contextValue],
  );

  React.useEffect(() => {
    let mqListMap: QueryMap<MediaQueryList>;

    const listenerMap = {};

    // if context is available, skip computing
    if (!hasContext && typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const createMqList = (query: Query, mediaQuery: string): MediaQueryList => {
        const mqList = window.matchMedia(mediaQuery);
        listenerMap[query] = ({ matches }) => {
          setResult(prev => {
            const next = { ...prev };
            next[query] = matches;
            return next;
          });
        };
        if (typeof mqList.addEventListener === "function") {
          mqList.addEventListener("change", listenerMap[query]);
        } else {
          // for browsers like Safari 13
          mqList.addListener(listenerMap[query]);
        }
        return mqList;
      };

      mqListMap = {
        isMediumMobile: createMqList("isMediumMobile", getBreakpointWidth("mediumMobile", theme)),
        isLargeMobile: createMqList("isLargeMobile", getBreakpointWidth("largeMobile", theme)),
        isTablet: createMqList("isTablet", getBreakpointWidth("tablet", theme)),
        isDesktop: createMqList("isDesktop", getBreakpointWidth("desktop", theme)),
        isLargeDesktop: createMqList("isLargeDesktop", getBreakpointWidth("largeDesktop", theme)),
        prefersReducedMotion: createMqList(
          "prefersReducedMotion",
          "(prefers-reduced-motion: reduce)",
        ),
      };

      // initialize
      setResult(prev => {
        const next = { ...prev };
        QUERIES.forEach(query => {
          next[query] = mqListMap[query].matches;
        });
        return QUERIES.every(query => next[query] === prev[query]) ? prev : next;
      });
    }

    return () => {
      if (mqListMap) {
        QUERIES.forEach(query => {
          if (typeof mqListMap[query].removeEventListener === "function") {
            mqListMap[query].removeEventListener("change", listenerMap[query]);
          } else {
            // for browsers like Safari 13
            mqListMap[query].removeListener(listenerMap[query]);
          }
        });
      }
    };
  }, [theme, hasContext]);

  // forward context if it's available
  return hasContext ? contextValue : result;
};

export default useMediaQuery;
