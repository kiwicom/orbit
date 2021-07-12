import React from "react";
import Scrollspy from "react-scrollspy";
import styled, { css } from "styled-components";

import { TableOfContentsItem, useTableOfContents } from "../services/table-of-contents";

interface StyledAnchorProps {
  level: number;
  active: boolean;
}

const getWidth = (level: number) => {
  if (level === 0) return "4px";
  if (level === 1) return "8px";
  return "12px";
};

const getColor = (active: boolean, level: number, theme) => {
  if (active) return theme.orbit.paletteProductNormal;
  if (level === 0) return theme.orbit.paletteInkNormal;
  return theme.orbit.paletteInkLight;
};

const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ active, level, theme }) => css`
    color: ${getColor(active, level, theme)};
    font-size: ${level === 0 ? "14px" : "12px"};
    font-weight: ${level <= 1 && "500"};
    text-indent: -${theme.orbit.spaceXLarge};
    margin-bottom: ${level === 0 && "8px"};
    padding-left: ${theme.orbit.spaceXLarge};
    display: inline-block;

    ::before {
      display: inline-block;
      content: "";
      height: 2px;
      border-radius: 1px;
      background: currentColor;
      width: ${getWidth(level)};
      margin: 4px 12px;
    }
  `}
`;

const StyledTocList = styled.ul`
  max-height: 100vh;
  overflow-y: auto;
`;

const StyledTocListItem = styled.li<{ level: number }>`
  ${({ level }) => `
    ${
      level === 0 &&
      `
      margin-bottom: 8px;
    `
    };
    ${
      level === 1 &&
      `
      margin-bottom: 4px;
    `
    };
  `};
`;

interface TableOfContentsTreeItem extends TableOfContentsItem {
  items: TableOfContentsTreeItem[];
}

const getTocContent = (tree: TableOfContentsTreeItem[], level = 0, activeScrollSpy: string) => {
  const nextLevel = level + 1;
  return tree.map(item => {
    const nestedContent = getTocContent(item.items, nextLevel, activeScrollSpy);
    return (
      <StyledTocListItem key={item.id} level={level}>
        <StyledAnchor level={level} href={`#${item.slug}`} active={activeScrollSpy === item.slug}>
          {item.title}
        </StyledAnchor>
        {item.items && React.Children.count(nestedContent) > 0 && <ul>{nestedContent}</ul>}
      </StyledTocListItem>
    );
  });
};

const TableOfContents = () => {
  const items = useTableOfContents();
  // Set scroll state
  const [activeScrollSpy, setActiveScrollSpy] = React.useState("");

  const handleScrollSpyUpdate = el => {
    if (el) {
      setActiveScrollSpy(el.getAttribute("id"));
    }
  };

  const tree = items
    .map<TableOfContentsTreeItem>(item => ({ ...item, items: [] }))
    .reduce<TableOfContentsTreeItem[]>((result, treeItem, index, treeItems) => {
      const fromIndex = index + 1;
      const toIndex = treeItems.findIndex((it, i) => i > index && it.level <= treeItem.level);
      // eslint-disable-next-line no-param-reassign
      treeItem.items = treeItems
        .slice(fromIndex, toIndex === -1 ? treeItems.length : toIndex)
        .filter(it => it.level === treeItem.level + 1);
      if (treeItem.level === 0) result.push(treeItem);
      return result;
    }, []);

  const tocContent = getTocContent(tree, 0, activeScrollSpy);

  if (React.Children.count(tocContent) === 0) {
    return null;
  }

  return (
    <Scrollspy
      componentTag="div"
      items={items.map(item => item.slug)}
      onUpdate={handleScrollSpyUpdate}
      currentClassName=""
    >
      <StyledTocList>{tocContent}</StyledTocList>
    </Scrollspy>
  );
};

export default TableOfContents;
