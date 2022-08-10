import { Interpolation, css, ThemeProps } from "styled-components";

import { Theme } from "../../defaultTheme";
import { QUERIES } from "./consts";

enum TOKEN {
  mediumMobile = "widthBreakpointMediumMobile",
  largeMobile = "widthBreakpointLargeMobile",
  tablet = "widthBreakpointTablet",
  desktop = "widthBreakpointDesktop",
  largeDesktop = "widthBreakpointLargeDesktop",
}

export const getBreakpointWidth = (
  name: keyof typeof TOKEN,
  theme: Theme,
  pure?: boolean,
): Interpolation<ThemeProps<keyof typeof TOKEN>> => {
  return pure ? theme.orbit[TOKEN[name]] : `(min-width: ${theme.orbit[TOKEN[name]]}px)`;
};

const devices = [...Object.values(QUERIES)];

const mediaQueries = devices.reduce((acc, device) => {
  acc[device] = (style: Interpolation<ThemeProps<any>>) => css`
    @media ${({ theme }) => getBreakpointWidth(device, theme)} {
      ${style};
    }
  `;

  return acc;
}, {});

export default mediaQueries;
