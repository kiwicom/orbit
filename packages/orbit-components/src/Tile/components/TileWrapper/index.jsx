// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../../utils/transition";
import { StyledIconRight } from "../TileHeader";
import defaultTheme from "../../../defaultTheme";
import { defaultFocus } from "../../../utils/common";

import type { Props } from ".";

export const StyledTileWrapper: any = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: ${theme.orbit.fontFamily};
    color: ${theme.orbit.paletteInkDark};
    text-decoration: none;
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadiusLarge};
    box-shadow: ${theme.orbit.boxShadowAction};
    transition: ${transition(["box-shadow"], "fast", "ease-in-out")};

    :hover {
      box-shadow: ${theme.orbit.boxShadowActionActive};
      ${StyledIconRight} {
        color: ${theme.orbit.paletteInkLightHover};
      }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTileAnchor = styled.a`
  ${({ theme }) => css`
    display: block;
    height: 100%;
    width: 100%;
    outline: none;
    text-decoration: none;
    color: ${theme.orbit.paletteInkDark};
    &:focus {
      ${defaultFocus}
      ${StyledIconRight} {
        color: ${theme.orbit.paletteInkLightHover};
      }
    }
    &:link,
    &:visited {
      color: ${theme.orbit.paletteInkDark};
      font-weight: ${theme.orbit.fontWeightLinks};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTileAnchor.defaultProps = {
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
  htmlTitle,
}: Props): React.Node => (
  <StyledTileWrapper
    data-test={dataTest}
    onClick={onClick}
    onKeyDown={onKeyDown}
    as={as}
    tabIndex={tabIndex}
    role={role}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    id={id}
  >
    {href ? (
      <StyledTileAnchor
        target={href && external ? "_blank" : undefined}
        rel={href && external ? "noopener" : undefined}
        href={href || undefined}
        title={htmlTitle}
      >
        {children}
      </StyledTileAnchor>
    ) : (
      children
    )}
  </StyledTileWrapper>
);

export default TileWrapper;
