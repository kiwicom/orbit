// @flow
import { css } from "styled-components";

import { QUERIES } from "./consts";

import type { MediaQueries } from "./index";

export const breakpoints = Object.keys(QUERIES).reduce(
  (o, name) => ({ ...o, [name]: QUERIES[name].min && `(min-width: ${QUERIES[name].min}px)` }),
  {},
);

const mediaQueries: MediaQueries = Object.keys(breakpoints).reduce(
  (o, name) => ({
    ...o,
    [name]: style =>
      css`
        @media ${breakpoints[name]} {
          ${style};
        }
      `,
  }),
  {},
);

export default mediaQueries;
