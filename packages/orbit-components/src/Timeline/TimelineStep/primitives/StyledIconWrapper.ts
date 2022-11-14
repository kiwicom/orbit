import styled, { css, keyframes } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import defaultTheme from "../../../defaultTheme";
import { renderStatus } from "./helpers";
import type { Type } from "../types";

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.01);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.01);
  }
`;

const StyledIconWrapper = styled.div<{ mobile?: boolean; status?: Type; active?: boolean }>`
  ${({ theme, mobile, status, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${mobile && theme.orbit.spaceLarge};
    z-index: 1;
    text-align: center;
    position: relative;
    height: 20px;
    line-height: ${theme.orbit.lineHeightText};
    &:after {
      position: absolute;
      top: 0px;
      left: ${mobile ? "2px" : "-2px"};
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 100%;
      ${active &&
      css`
        animation: ${pulseAnimation} 2.5s ease-in-out infinite;
      `};
      background: ${status && convertHexToRgba(renderStatus(status, theme), 10)};
    }
  `};
`;

StyledIconWrapper.defaultProps = {
  theme: defaultTheme,
};

export default StyledIconWrapper;
