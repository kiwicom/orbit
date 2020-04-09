// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import transition from "../../../utils/transition";

export const StyledButtonPrimitiveIconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  ${({ spacing, foreground, width, height }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${spacing};
    color: ${foreground};
    transition: ${transition[("background", "box-shadow", "fast", "ease-in-out")]};
    > svg {
      width: ${width};
      height: ${height};
    }
  `}
`;

StyledButtonPrimitiveIconContainer.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveIconContainer = ({ spacing, foreground, width, height, children }) => (
  <StyledButtonPrimitiveIconContainer
    spacing={spacing}
    foreground={foreground}
    width={width}
    height={height}
  >
    {children}
  </StyledButtonPrimitiveIconContainer>
);

export default ButtonPrimitiveIconContainer;
