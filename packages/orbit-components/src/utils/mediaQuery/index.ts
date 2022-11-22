import { css } from "styled-components";

import type { Theme } from "../../defaultTheme";
import { QUERIES } from "./consts";
import type { MediaQueries } from "./types";

export const TOKEN = {
  mediumMobile: "widthBreakpointMediumMobile",
  largeMobile: "widthBreakpointLargeMobile",
  tablet: "widthBreakpointTablet",
  desktop: "widthBreakpointDesktop",
  largeDesktop: "widthBreakpointLargeDesktop",
};

export const getBreakpointWidth = (
  name: keyof typeof TOKEN,
  theme: Theme,
  pure?: boolean,
): string => {
  return pure ? theme.orbit[TOKEN[name]] : `(min-width: ${theme.orbit[TOKEN[name]]}px)`;
};

const mediaQueries = Object.values(QUERIES).reduce<MediaQueries>(
  (acc: MediaQueries, device: keyof typeof TOKEN) => {
    acc[device] = style => css`
      @media ${({ theme }) => getBreakpointWidth(device, theme)} {
        ${style};
      }
    `;

    return acc;
  },
  { mediumMobile: {}, largeMobile: {}, tablet: {}, desktop: {}, largeDesktop: {} } as MediaQueries,
);

export default mediaQueries;
