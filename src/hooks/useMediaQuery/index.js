// @flow
import * as React from "react";

import useTheme from "../useTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery/index";

import type { UseMediaQuery } from ".";

const createBreakpoints = theme => ({
  isDesktop: getBreakpointWidth("desktop", theme),
  isLargeDesktop: getBreakpointWidth("largeDesktop", theme),
  isTablet: getBreakpointWidth("tablet", theme),
  isLargeMobile: getBreakpointWidth("largeMobile", theme),
  isMediumMobile: getBreakpointWidth("mediumMobile", theme),
});

const useMediaQuery: UseMediaQuery = () => {
  const theme = useTheme();
  const breakpoints = React.useMemo(() => createBreakpoints(theme), [theme]);
  const mediaQueryLists = Object.assign(
    {
      isDesktop: {},
      isLargeDesktop: {},
      isTablet: {},
      isLargeMobile: {},
      isMediumMobile: {},
    },
    /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
     * v0.115.0. To view the error, delete this comment and run Flow. */
    ...Object.keys(breakpoints).map(q => {
      if (typeof window !== "undefined") {
        return { [q]: window.matchMedia(breakpoints[q]) };
      }
      return {};
    }),
  );
  const timeoutRef = React.useRef(null);
  const getValue = React.useCallback(() => {
    return Object.assign(
      {
        isDesktop: false,
        isLargeDesktop: false,
        isTablet: false,
        isLargeMobile: false,
        isMediumMobile: false,
      },
      /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
       * v0.115.0. To view the error, delete this comment and run Flow. */
      ...Object.keys(mediaQueryLists).map(q => ({ [q]: mediaQueryLists[q].matches })),
    );
  }, [mediaQueryLists]);

  const [value, setValue] = React.useState(getValue);

  React.useEffect(() => {
    setValue(getValue);
    const handler = () => {
      if (typeof setTimeout === "function" && typeof clearTimeout === "function") {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          setValue(getValue);
        }, 150);
      }
    };
    Object.keys(mediaQueryLists).forEach(mql => {
      mediaQueryLists[mql].addListener(handler);
    });
    return () => {
      Object.keys(mediaQueryLists).forEach(mql => mediaQueryLists[mql].addListener(handler));
      if (timeoutRef.current !== null && typeof clearTimeout === "function") {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [getValue, mediaQueryLists]);
  return value;
};

export default useMediaQuery;
