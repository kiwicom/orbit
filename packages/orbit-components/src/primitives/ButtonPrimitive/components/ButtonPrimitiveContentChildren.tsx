import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

interface Props {
  centered?: boolean;
  hasIcon: boolean;
  contentWidth?: string | null;
}

const StyledButtonPrimitiveContentChildren = styled.div<Props>`
  ${({ hasIcon, contentWidth, centered }) => css`
    display: inline-block;
    width: ${contentWidth};
    line-height: 1;
    text-align: ${hasIcon && !centered && left};
  `}
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({
  children,
  hasIcon,
  contentWidth,
  centered,
}: React.PropsWithChildren<Props>) => (
  <StyledButtonPrimitiveContentChildren
    hasIcon={hasIcon}
    contentWidth={contentWidth}
    centered={centered}
  >
    {children}
  </StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
