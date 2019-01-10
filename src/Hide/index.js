// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";

import type { Props } from "./index";

// it's need to be sorted for rendering other: from lowest to the highest
const sortedBreakpoints = Object.keys(DEVICES).sort((a, b) => DEVICES[a] - DEVICES[b]);

const StyledHide = styled.span`
  ${({ on }) =>
    sortedBreakpoints.map(viewport =>
      viewport in mediaQueries
        ? css`
            ${mediaQueries[viewport](css`
              display: ${on.indexOf(viewport) !== -1 ? "none" : "inline-block"};
            `)};
          `
        : // "smallMobile" is not media query so we need to check it explicitly
          viewport === "smallMobile" &&
          on.indexOf(viewport) !== -1 &&
          css`
            display: none;
          `,
    )};
`;

const Hide = ({ on = [], children }: Props) => <StyledHide on={on}>{children}</StyledHide>;

export default Hide;
