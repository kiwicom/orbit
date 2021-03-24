import React from "react";
import styled, { css } from "styled-components";

export interface TocItemObject {
  title: string;
  url: string;
  items?: TocItemObject[];
}
enum Levels {
  First,
  Second,
  Third,
}

interface StyledAnchorProps {
  level: Levels;
}
const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ level, theme }) => css`
    color: ${level === 1 ? theme.orbit.paletteInkNormal : theme.orbit.paletteInkLight};
    font-size: ${level <= 2 ? theme.orbit.fontSizeTextNormal : theme.orbit.fontSizeTextSmall};
    text-indent: -${theme.orbit.spaceXLarge};
    padding-left: ${theme.orbit.spaceXLarge};
    display: inline-block;

    ::before {
      display: inline-block;
      content: "";
      border-top: 2px solid;
      width: ${level === 1 ? "4px" : level === 2 ? "8px" : "12px"};
      margin: 4px 12px;
      visibility: visible;
    }
  `}
`;

interface StyledTocListProps {
  alwaysVisible?: boolean;
}

const StyledTocList = styled.ul<StyledTocListProps>`
  max-height: 100vh;
  overflow-y: auto;
  ${({ alwaysVisible }) => css`
    ${!alwaysVisible &&
    `${StyledAnchor} {
    visibility: hidden;
  }`}

    :hover ${StyledAnchor},:focus ${StyledAnchor},:active ${StyledAnchor} {
      visibility: visible;
    }
  `}
`;

const getTocList = (array: TocItemObject[], level: Levels) => {
  const nextLevel: Levels = ++level;
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

interface TableOfContentsProps extends StyledTocListProps {
  items: TocItemObject[];
}

const TableOfContents = ({ alwaysVisible, items }: TableOfContentsProps) => {
  const TocContent = getTocList(items, Levels.First);
  if (TocContent.length === 0) {
    return null;
  }
  return (
    <nav>
      <StyledTocList alwaysVisible={alwaysVisible}>{TocContent}</StyledTocList>
    </nav>
  );
};

export default TableOfContents;
