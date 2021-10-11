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

const mediaQueries: MediaQueries = {};
// https://davidwalsh.name/flow-object-values
const devices: $Values<typeof QUERIES>[] = [...(Object.values(QUERIES): any)];

devices.forEach(device => {
  mediaQueries[device] = style => css`
    @media ${({ theme }) => getBreakpointWidth(device, theme)} {
      ${style};
    }
  `;
});

export default mediaQueries;
