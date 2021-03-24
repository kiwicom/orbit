import React from "react";
import styled, { css } from "styled-components";

export interface TocItemObject {
  title: string;
  url: string;
  items?: TocItemObject[];
}

interface StyledAnchorProps {
  level: number;
}

const getWidth = (level: number) => {
  if (level === 0) return "4px";
  if (level === 1) return "8px";
  return "12px";
};

const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ level, theme }) => css`
    color: ${level === 0 ? theme.orbit.paletteInkNormal : theme.orbit.paletteInkLight};
    font-size: ${level <= 1 ? theme.orbit.fontSizeTextNormal : theme.orbit.fontSizeTextSmall};
    text-indent: -${theme.orbit.spaceXLarge};
    padding-left: ${theme.orbit.spaceXLarge};
    display: inline-block;

    ::before {
      display: inline-block;
      content: "";
      border-top: 2px solid;
      width: ${getWidth(level)};
      margin: 4px 12px;
    }
  `}
`;

const StyledTocList = styled.ul`
  max-height: 100vh;
  overflow-y: auto;
`;

const getTocList = (array: TocItemObject[], level = 0) => {
  const nextLevel = level + 1;
  if (typeof array === "undefined") {
    return [];
  }
  return array.map(item => (
    <li key={item.url}>
      <StyledAnchor level={level} href={item.url}>
        {item.title}
      </StyledAnchor>
      {item.items && <ul>{getTocList(item.items, nextLevel)}</ul>}
    </li>
  ));
};

interface Props {
  items: TocItemObject[];
}

const TableOfContents = ({ items }: Props) => {
  const TocContent = getTocList(items);
  if (TocContent.length === 0) {
    return null;
  }
  return (
    <nav>
      <StyledTocList>{TocContent}</StyledTocList>
    </nav>
  );
};

export default TableOfContents;
