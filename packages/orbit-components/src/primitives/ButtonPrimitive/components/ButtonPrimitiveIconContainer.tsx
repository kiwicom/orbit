import styled, { css } from "styled-components";
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import transition from "../../../utils/transition";

interface Props {
  margin?: string | null;
  width?: string | null;
  height?: string | null;
}

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

StyledButtonPrimitiveIconContainer.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveIconContainer = ({
  margin,
  width,
  height,
  children,
}: React.PropsWithChildren<Props>) => (
  <StyledButtonPrimitiveIconContainer margin={margin} width={width} height={height}>
    {children}
  </StyledButtonPrimitiveIconContainer>
);

export default ButtonPrimitiveIconContainer;
