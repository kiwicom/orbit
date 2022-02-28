// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledTileWrapper } from "../Tile/components/TileWrapper";
import defaultTheme from "../defaultTheme";
import { StyledSlide } from "../utils/Slide";

import type { Props } from ".";

const StyledTileGroup = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0;
    margin: 0;
    box-shadow: ${theme.orbit.boxShadowAction};
    border-radius: ${theme.orbit.borderRadiusNormal};
    ${StyledSlide} {
      background: ${theme.orbit.paletteWhite};
    }
    ${StyledTileWrapper} {
      border-radius: 0;
      :first-child {
        border-top-left-radius: ${theme.orbit.borderRadiusNormal};
        border-top-right-radius: ${theme.orbit.borderRadiusNormal};
      }
      :last-child {
        border-bottom-left-radius: ${theme.orbit.borderRadiusNormal};
        border-bottom-right-radius: ${theme.orbit.borderRadiusNormal};
      }
      :not(:last-child) {
        border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
      }
      box-shadow: none;
      transition: background ${theme.orbit.durationFast} ease-in-out,
        box-shadow ${theme.orbit.durationFast} ease-in-out,
        border-color ${theme.orbit.durationFast} ease-in-out;
      :hover,
      :focus {
        background: ${theme.orbit.paletteCloudNormal};
      }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileGroup.defaultProps = {
  theme: defaultTheme,
};

const TileGroup = ({ children, dataTest, as }: Props): React.Node => {
  return (
    <StyledTileGroup data-test={dataTest} as={as}>
      {children}
    </StyledTileGroup>
  );
};

export default TileGroup;
