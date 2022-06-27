// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Divider from "./Divider";
import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const StyledInner = styled.div`
  ${({ theme }) => css`
    &:before,
    &:after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      width: 50%;
      height: 1px;
      background: ${theme.orbit.paletteCloudDark};
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInner.defaultProps = {
  theme: defaultTheme,
};

const StyledWord = styled.div`
  ${({ theme }) => css`
    background: ${theme.orbit.paletteWhite};
    padding: 0 2px;
    z-index: 2;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWord.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySeparator = ({ children }: Props): React.Node => {
  if (children)
    return (
      <StyledWrapper>
        <StyledInner>
          <StyledWord>{children}</StyledWord>
        </StyledInner>
      </StyledWrapper>
    );

  return <Divider />;
};

export default ItinerarySeparator;
