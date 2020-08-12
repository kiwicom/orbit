// @flow
import { css } from "styled-components";

import type { OnlyIE } from ".";

const onlyIE: OnlyIE = (style, breakpoint = "all") => css`
  @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${style};
  }
`;

export default onlyIE;
