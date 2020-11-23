// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import transition from "../../../utils/transition";
import type { Props } from "./ButtonPrimitiveIconContainer";

export const StyledButtonPrimitiveIconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  ${({ margin, width, height }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${margin};
    color: currentColor;
    transition: ${transition(["background", "box-shadow", "color"], "fast", "ease-in-out")};
    > svg {
      width: ${width};
      height: ${height};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonPrimitiveIconContainer.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveIconContainer = ({ margin, width, height, children }: Props) => (
  <StyledButtonPrimitiveIconContainer margin={margin} width={width} height={height}>
    {children}
  </StyledButtonPrimitiveIconContainer>
);

export default ButtonPrimitiveIconContainer;
