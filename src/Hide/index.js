// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mediaQueries from "../utils/mediaQuery";
import { DEVICES_WIDTH } from "../utils/mediaQuery/consts";

import type { Props } from "./index";

// it's need to be sorted for rendering other: from lowest to the highest
const sortedBreakpoints = Object.keys(DEVICES_WIDTH).sort(
  (a, b) => DEVICES_WIDTH[a] - DEVICES_WIDTH[b],
);

const getDisplay = () => ({ block }) => (block ? "block" : "inline-block");

const StyledHide = styled.span`
  ${({ on }) =>
    sortedBreakpoints.map(viewport =>
      viewport in mediaQueries
        ? css`
            ${mediaQueries[viewport](css`
              display: ${on.indexOf(viewport) !== -1 ? "none" : getDisplay()};
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

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} block={block}>
    {children}
  </StyledHide>
);

export default Hide;
