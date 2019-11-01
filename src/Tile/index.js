// @flow
import React from "react";
import styled from "styled-components";

import TileHeader, { StyledIconRight } from "./components/TileHeader";
import defaultTheme from "../defaultTheme";
import TileContent from "./components/TileContent";
import TileExpandable from "./components/TileExpandable";

import { type Props } from ".";

const StyledTile = styled.div`
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

  :hover {
    box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
    ${StyledIconRight} {
      color: ${({ theme }) => theme.orbit.paletteInkLightHover};
    }
  }
`;

StyledTile.defaultProps = {
  theme: defaultTheme,
};

const Tile = ({
  href,
  external = false,
  dataTest,
  icon,
  title,
  description,
  header,
  children,
  noPadding = false,
  expandable = false,
  initialExpanded = false,
  onClick,
}: Props) => {
  if (expandable) {
    return (
      <StyledTile data-test={dataTest}>
        <TileExpandable
          icon={icon}
          title={title}
          description={description}
          header={header}
          noPadding={noPadding}
          initialExpanded={initialExpanded}
          onClick={onClick}
        >
          {children}
        </TileExpandable>
      </StyledTile>
    );
  }
  const hasHeader = !!(title || description || icon || header);
  return (
    <StyledTile
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      href={href || undefined}
      data-test={dataTest}
      role={!href ? "button" : undefined}
      onClick={!hasHeader ? onClick : undefined}
      as={href ? "a" : "div"}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          onClick={onClick}
          expandable={expandable}
          tabIndex={!href ? "0" : undefined}
        />
      )}
      {children && (
        <TileContent noPadding={noPadding} withPointer withBorder={hasHeader}>
          {children}
        </TileContent>
      )}
    </StyledTile>
  );
};

export default Tile;
