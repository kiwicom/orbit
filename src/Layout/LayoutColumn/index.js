// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mq from "../../utils/mediaQuery/index";
import { DEVICES } from "../../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledColumn = styled.div`
  ${({ hideOn }) =>
    !!hideOn &&
    DEVICES.map(viewport =>
      viewport in mq
        ? css`
            ${mq[viewport](css`
              display: ${hideOn.indexOf(viewport) !== -1 ? "none" : "block"};
            `)};
          `
        : // "smallMobile" is not media query so we need to check it explicitly
          viewport === "smallMobile" &&
          hideOn.indexOf(viewport) !== -1 &&
          css`
            display: none;
          `,
    )};
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn }: Props) => (
  <StyledColumn hideOn={hideOn}>{children}</StyledColumn>
);

export default LayoutColumn;
