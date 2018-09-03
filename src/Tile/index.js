// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import Heading from "../Heading";
import ChevronRight from "../icons/ChevronRight";
import NewWindow from "../icons/NewWindow";

import type { Props } from "./index";

const StyledTile = styled(({ theme, icon, title, external, ...props }) => {
  const Component = props.href ? "a" : "div";
  return <Component {...props}>{props.children}</Component>;
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceMedium}; //TODO Create token paddingTile
  background: ${({ theme }) => theme.orbit.paletteWhite}; //TODO Create token backgroundColorTile
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal}; //TODO Create token borderWidthTile, borderColorTile
  box-shadow: 0 2px 4px 0 rgba(23, 27, 30, 0.1); //TODO Create token boxShadowTile
  box-sizing: border-box;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.1); //TODO Create token boxShadowTileHover
  }
`;

StyledTile.defaultProps = {
  theme: defaultTokens,
};

const StyledTileContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTileHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `0 0 ${theme.orbit.spaceXXSmall} 0`};
  &:last-child {
    margin: 0;
  }
`;
StyledTileHeadingWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledTileChildren = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin: ${({ theme, icon, title }) => icon && title && `0 0 0 ${theme.orbit.spaceXLarge}`};
`;

StyledTileChildren.defaultProps = {
  theme: defaultTokens,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `0 ${theme.orbit.spaceXSmall} 0 0`};
`;

StyledIcon.defaultProps = {
  theme: defaultTokens,
};

const StyledIconRight = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: ${({ theme }) => `0 0 0 ${theme.orbit.spaceMedium}`};
`;

StyledIconRight.defaultProps = {
  theme: defaultTokens,
};

const StyledNewWindow = styled(NewWindow)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.orbit.paletteInkLightHover};
  }
`;

StyledNewWindow.defaultProps = {
  theme: defaultTokens,
};

const StyledChevron = styled(ChevronRight)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.orbit.paletteInkLightHover};
  }
`;

StyledChevron.defaultProps = {
  theme: defaultTokens,
};

const Icon = ({ icon }: Props) => <StyledIcon>{icon}</StyledIcon>;

const Tile = ({ children, external = false, href, icon, title, onClick }: Props) => (
  <StyledTile target={href && external ? "_blank" : undefined} href={href} onClick={onClick}>
    <StyledTileContent>
      {title && (
        <StyledTileHeadingWrapper>
          {icon && <Icon icon={icon} />}
          <Heading type="title3" element="h3">
            {title}
          </Heading>
        </StyledTileHeadingWrapper>
      )}
      {children && (
        <StyledTileChildren title={title} icon={icon}>
          {children}
        </StyledTileChildren>
      )}
    </StyledTileContent>
    <StyledIconRight>
      {external ? (
        <StyledNewWindow size="medium" color="secondary" />
      ) : (
        <StyledChevron size="medium" color="secondary" />
      )}
    </StyledIconRight>
  </StyledTile>
);

export default Tile;
