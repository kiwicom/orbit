import React from "react";
import Scrollspy from "react-scrollspy";
import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";

import { TableOfContentsItem, useTableOfContents } from "../services/table-of-contents";

interface StyledAnchorProps {
  level: number;
  active: boolean;
}

const getColor = (active: boolean, level: number, theme) => {
  if (active) return theme.orbit.paletteProductNormal;
  if (level === 0) return theme.orbit.paletteInkNormal;
  return theme.orbit.paletteInkNormal;
};

const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ active, level, theme }) => css`
    color: ${getColor(active, level, theme)};
    font-size: 14px;
    display: inline-block;
    font-weight: ${level === 0 ? "450" : "400"};
    margin-bottom: ${level === 0 && "8px"};
  `};
`;

const StyledTocList = styled.ul`
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const StyledTocListItem = styled.li<{ level: number; active?: boolean }>`
  ${({ theme, active }) => css`
    margin-left: ${theme.orbit.spaceMedium};
    margin-bottom: ${theme.orbit.spaceXSmall};

    ${mq.desktop(css`
      &:before {
        position: absolute;
        left: 0;
        content: "";
        width: 2px;
        height: 100%;
        background: ${active ? theme.orbit.paletteProductNormal : theme.orbit.paletteCloudNormal};
      }
    `)}
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
      <StyledTocListItem key={item.id} level={level} active={activeScrollSpy === item.slug}>
        <StyledAnchor level={level} href={`#${item.slug}`} active={activeScrollSpy === item.slug}>
          {item.title}
        </StyledAnchor>
        {item.items && React.Children.count(nestedContent) > 0 && <ul>{nestedContent}</ul>}
      </StyledTocListItem>
    );
  });
};

const TableOfContents = () => {
  const [tableOfContents, setTableOfContents] = useTableOfContents();
  // Set scroll state
  const [activeScrollSpy, setActiveScrollSpy] = React.useState("");

  const handleScrollSpyUpdate = el => {
    if (el) {
      setActiveScrollSpy(el.getAttribute("id"));
    }
  };

  const tree = tableOfContents
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

  React.useEffect(() => {
    return () => {
      setTableOfContents([]);
    };
  }, [setTableOfContents]);

  if (React.Children.count(tocContent) === 0) {
    return null;
  }

  return (
    <Scrollspy
      componentTag="div"
      items={tableOfContents.map(item => item.slug)}
      onUpdate={handleScrollSpyUpdate}
      currentClassName=""
    >
      <StyledTocList>{tocContent}</StyledTocList>
    </Scrollspy>
  );
};

export default TableOfContents;
