import React from "react";
import styled, { css } from "styled-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

interface MasonryItemObject {
  gap?: number;
}

const MasonryItem = styled.div<MasonryItemObject>`
  margin-bottom: ${({ gap }) => gap}px;
`;

interface MasonryColumnObject extends MasonryItemObject {
  columnNumber: number;
}

const MasonryColumn = styled.div<MasonryColumnObject>`
  margin-left: ${({ columnNumber, gap }) => (columnNumber > 0 ? gap : 0)}px;
  flex: 1;
`;

interface Props extends MasonryItemObject {
  columns?: number;
  children: React.ReactNode;
}

const MasonryLayout = ({ columns = 2, gap = 24, children }: Props) => {
  const { isTablet } = useMediaQuery();
  const masonryColumns = isTablet ? columns : 1;

  const columnWrapper: Record<string, Array<React.ReactNode>> = {};
  React.Children.forEach(children, (child, index) => {
    const columnIndex = index % masonryColumns;
    if (!Object.prototype.hasOwnProperty.call(columnWrapper, `column${columnIndex}`)) {
      columnWrapper[`column${columnIndex}`] = [];
    }
    columnWrapper[`column${columnIndex}`].push(<MasonryItem gap={gap}>{child}</MasonryItem>);
  });

  const result = Object.keys(columnWrapper).map(columnName => {
    const columnNumber = parseInt(columnName.replace("column", ""), 10);
    return (
      <MasonryColumn key={columnName} gap={gap} columnNumber={columnNumber}>
        {columnWrapper[columnName]}
      </MasonryColumn>
    );
  });

  return (
    <div
      css={css`
        display: flex;
        margin-top: 1rem;
      `}
    >
      {result}
    </div>
  );
};

export default MasonryLayout;
