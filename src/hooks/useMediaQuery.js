// @flow
import { useState, useEffect } from "react";

import type { UseMediaQuery } from "./useMediaQuery";
import useTheme from "./useTheme";

const useMediaQuery: UseMediaQuery = () => {
  const theme = useTheme().orbit;
  const [breakpointList, setBreakpointList] = useState([
    {
      media: `(min-width: ${theme.widthBreakpointLargeDesktop}px)`,
      mapping: "isLargeDesktop",
      matches: null,
    },
    {
      media: `(min-width: ${theme.widthBreakpointDesktop}px)`,
      mapping: "isDesktop",
      matches: null,
    },
    {
      media: `(min-width: ${theme.widthBreakpointLargeMobile}px)`,
      mapping: "isLargeMobile",
      matches: null,
    },
    {
      media: `(min-width: ${theme.widthBreakpointMediumMobile}px)`,
      mapping: "isMediumMobile",
      matches: null,
    },
    {
      media: `(min-width: ${theme.widthBreakpointTablet}px)`,
      mapping: "isTablet",
      matches: null,
    },
  ]);

  // TODO: Check if window exists
  const mediaList = breakpointList.map(breakpoint => window.matchMedia(breakpoint.media));

  const findMatch = (mediaToMatch, list) => {
    const res = list.filter(el => el.media === mediaToMatch);

    return res[0].matches;
  };

  const updateMatch = () => {
    setBreakpointList(
      breakpointList.map(breakpoint => {
        return {
          ...breakpoint,
          matches: findMatch(breakpoint.media, mediaList),
        };
      }),
    );
  };

  const updateListener = () => {
    updateMatch();
  };

  useEffect(() => {
    // Initial value
    updateMatch();

    // Tie listener to all MediaQueryList items
    mediaList.forEach(mediaListItem => mediaListItem.addListener(updateListener));

    return () => {
      // cleanup
      mediaList.forEach(mediaListItem => mediaListItem.removeListener(updateListener));
    };
  }, []);

  // Flatten to object and return
  const exportObj = Object.assign(
    {
      isDesktop: null,
      isLargeDesktop: null,
      isTablet: null,
      isLargeMobile: null,
      isMediumMobile: null,
    },
    ...breakpointList.map(item => ({ [item.mapping]: item.matches })),
  );
  return exportObj;
};

export default useMediaQuery;
