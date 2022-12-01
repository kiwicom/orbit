import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

interface Props {
  hasIcon: boolean;
  contentWidth?: string | null;
}

const StyledButtonPrimitiveContentChildren = styled.div<Props>`
  ${({ hasIcon, contentWidth }) => css`
    display: inline-block;
    width: ${contentWidth};
    text-align: ${hasIcon && left};
    line-height: 1;
  `}
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({
  children,
  hasIcon,
  contentWidth,
}: React.PropsWithChildren<Props>) => (
  <StyledButtonPrimitiveContentChildren hasIcon={hasIcon} contentWidth={contentWidth}>
    {children}
  </StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
