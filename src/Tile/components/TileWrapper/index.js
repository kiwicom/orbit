// @flow
import * as React from "react";
import styled from "styled-components";

import { StyledIconRight } from "../TileHeader/index";
import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

export const StyledTileWrapper = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  background: ${({ theme }) => theme.orbit.paletteWhite}; //TODO Create token backgroundColorTile
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowAction};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  :hover,
  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
    ${StyledIconRight} {
      color: ${({ theme }) => theme.orbit.paletteInkLightHover};
    }
  }
`;

StyledTileWrapper.defaultProps = {
  theme: defaultTheme,
};

const TileWrapper = ({
  href,
  external,
  dataTest,
  onClick,
  onKeyDown,
  children,
  as,
  tabIndex,
  role,
  ariaExpanded,
  ariaControls,
  id,
}: Props) => (
  <StyledTileWrapper
    target={href && external ? "_blank" : undefined}
    rel={href && external ? "noopener noreferrer" : undefined}
    href={href || undefined}
    data-test={dataTest}
    onClick={onClick}
    onKeyDown={onKeyDown}
    as={as}
    tabIndex={tabIndex}
    role={role}
    ariaExpanded={ariaExpanded}
    ariaControls={ariaControls}
    id={id}
  >
    {children}
  </StyledTileWrapper>
);

export default TileWrapper;
