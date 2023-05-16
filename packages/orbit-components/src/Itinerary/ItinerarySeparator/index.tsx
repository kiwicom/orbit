import * as React from "react";
import styled, { css } from "styled-components";

import Divider from "./Divider";
import defaultTheme from "../../defaultTheme";
import type { Props } from "./types";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const StyledInner = styled.div<{ $type: Props["type"]; $color: Props["color"] }>`
  ${({ theme, $type, $color }) => css`
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      z-index: 10;
      width: 50%;
      height: ${!$type && theme.orbit.heightSeparator};
      background: ${theme.orbit.backgroundSeparator};
      border-width: ${$type && "1px"};
      border-color: ${$color && theme.orbit[$color]};
      border-style: ${$type};
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  `}
`;

StyledInner.defaultProps = {
  theme: defaultTheme,
};

const StyledWord = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0 2px;
    background: ${theme.orbit.paletteWhite};
    z-index: 11;
  `};
`;

StyledWord.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySeparator = ({ children, type, color }: Props) => {
  if (children || type)
    return (
      <StyledWrapper>
        <StyledInner $type={type} $color={color}>
          <StyledWord>{children}</StyledWord>
        </StyledInner>
      </StyledWrapper>
    );

  return <Divider />;
};

export default ItinerarySeparator;
