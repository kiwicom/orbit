// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

const getDisplay = () => ({ block }) => (block ? "block" : "inline-block");

const StyledHide = styled.span`
  ${({ on }) =>
    DEVICES.map(viewport =>
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

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} block={block}>
    {children}
  </StyledHide>
);

export default Hide;
