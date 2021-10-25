// @flow
import { css } from "styled-components";

import { QUERIES, type Devices } from "./consts";

import typeof MediaQueries, { getBreakpointWidth as GetBreakpointWidth } from ".";

type BreakpointToken =
  | "widthBreakpointMediumMobile"
  | "widthBreakpointLargeMobile"
  | "widthBreakpointTablet"
  | "widthBreakpointDesktop"
  | "widthBreakpointLargeDesktop";

const TOKEN: { [key: Devices]: BreakpointToken } = {
  mediumMobile: "widthBreakpointMediumMobile",
  largeMobile: "widthBreakpointLargeMobile",
  tablet: "widthBreakpointTablet",
  desktop: "widthBreakpointDesktop",
  largeDesktop: "widthBreakpointLargeDesktop",
};

export const getBreakpointWidth: GetBreakpointWidth = (name, theme, pure) => {
  // $FlowFixMe not sure how to solve this aspect of overloading functions 🤷‍♂️
  return pure ? theme.orbit[TOKEN[name]] : `(min-width: ${theme.orbit[TOKEN[name]]}px)`;
};

// https://davidwalsh.name/flow-object-values
const devices: $Values<typeof QUERIES>[] = [...(Object.values(QUERIES): any)];

const mediaQueries: MediaQueries = devices.reduce((acc, device) => {
  acc[device] = style => css`
    @media ${({ theme }) => getBreakpointWidth(device, theme)} {
      ${style};
    }
  `;
  return acc;
}, {});

export default mediaQueries;
