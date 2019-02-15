// @flow
import { css } from "styled-components";

import { QUERIES } from "./consts";

import type { MediaQueries, GetBreakpointWidth } from ".";

export const getBreakpointWidth: GetBreakpointWidth = (name, pure) => ({ theme }) => {
  const tokens = {
    [QUERIES.MEDIUMMOBILE]: theme.orbit.widthMediaQueryMediumMobile,
    [QUERIES.LARGEMOBILE]: theme.orbit.widthMediaQueryLargeMobile,
    [QUERIES.TABLET]: theme.orbit.widthMediaQueryTablet,
    [QUERIES.DESKTOP]: theme.orbit.widthMediaQueryDesktop,
    [QUERIES.LARGEDESKTOP]: theme.orbit.widthMediaQueryLargeDesktop,
  };
  if (pure) {
    return tokens[name];
  }
  return `(min-width: ${tokens[name]}px)`;
};

const mediaQueries: MediaQueries = Object.keys(QUERIES).reduce(
  (o, name) => ({
    ...o,
    [QUERIES[name]]: style =>
      css`
        @media ${({ theme }) => getBreakpointWidth(QUERIES[name])({ theme })} {
          ${style};
        }
      `,
  }),
  {},
);

export default mediaQueries;
