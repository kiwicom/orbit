// @flow
import { useState, useEffect } from "react";

import useTheme from "../useTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery/index";

import type { UseMediaQuery } from ".";

const debounce = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback(...args);
    }, time);
  };
};

const useMediaQuery: UseMediaQuery = () => {
  const theme = useTheme();
  const [breakpointList, setBreakpointList] = useState(() => [
    {
      media: getBreakpointWidth("largeDesktop", theme),
      mapping: "isLargeDesktop",
      matches: null,
    },
    {
      media: getBreakpointWidth("desktop", theme),
      mapping: "isDesktop",
      matches: null,
    },
    {
      media: getBreakpointWidth("largeMobile", theme),
      mapping: "isLargeMobile",
      matches: null,
    },
    {
      media: getBreakpointWidth("mediumMobile", theme),
      mapping: "isMediumMobile",
      matches: null,
    },
    {
      media: getBreakpointWidth("tablet", theme),
      mapping: "isTablet",
      matches: null,
    },
  ]);
  let mediaList = [];

  if (typeof window !== "undefined") {
    // Tie listener to all MediaQueryList items
    mediaList = breakpointList.map(breakpoint => window.matchMedia(breakpoint.media));
  }

  const findMatch = (mediaToMatch, list) => {
    const regex = /\d+/;
    // $FlowFixMe
    const res = list.find(el => el.media.match(regex)[0] === mediaToMatch.match(regex)[0]);
    if (res) {
      return res.matches;
    }
    return null;
  };

  const updateMatch = debounce(() => {
    setBreakpointList(
      breakpointList.map(breakpoint => {
        return {
          ...breakpoint,
          matches: findMatch(breakpoint.media, mediaList),
        };
      }),
    );
  }, 150);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial value
      updateMatch();
      // Tie listener to all MediaQueryList items
      mediaList.forEach(mediaListItem => mediaListItem.addListener(updateMatch));
    }

    return () => {
      if (typeof window !== "undefined") {
        // cleanup
        mediaList.forEach(mediaListItem => mediaListItem.removeListener(updateMatch));
      }
    };
    // can't have dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Flatten to object and return
  return Object.assign(
    {
      isDesktop: null,
      isLargeDesktop: null,
      isTablet: null,
      isLargeMobile: null,
      isMediumMobile: null,
    },
    /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
     * v0.115.0. To view the error, delete this comment and run Flow. */
    ...breakpointList.map(item => ({ [item.mapping]: item.matches })),
  );
};

export default useMediaQuery;
