import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  mediaQueries as mq,
} from "@kiwicom/orbit-components";
import { StyledTable } from "@kiwicom/orbit-components/lib/Table";
import { StyledTableCell } from "@kiwicom/orbit-components/lib/Table/TableCell";
import { StyledTableRow } from "@kiwicom/orbit-components/lib/Table/TableRow";
import { StyledTableBody } from "@kiwicom/orbit-components/lib/Table/TableBody";
import { StyledTableHead } from "@kiwicom/orbit-components/lib/Table/TableHead";

import { ArrowUp } from "./images/icons/ArrowUp.svg";
import { ArrowDown } from "./images/icons/ArrowDown.svg";
import { Sort } from "./images/icons/Sort.svg";

enum SORTING_ORDER {
  DEFAULT = 0,
  ASCENDING = 1,
  DESCENDING = 2,
}

type TableData = {
  [x: string]: ReactElement | string;
};

const SORTABLE_COLUMNS = ["Name"];

const sortingIcon = (sortingStatus: SORTING_ORDER) => {
  switch (sortingStatus) {
    case SORTING_ORDER.ASCENDING:
      return <ArrowUp />;
    case SORTING_ORDER.DESCENDING:
      return <ArrowDown />;
    case SORTING_ORDER.DEFAULT:
    default:
      return <Sort />;
  }
};

export const TableHeadCell = styled(StyledTableCell)`
  ${({ theme }) => css`
    background-color: ${theme.orbit.paletteCloudLight};
    text-align: left;
  `}
`;

const Table = styled(StyledTable)`
  ${({ theme }) => css`
    ${StyledTableHead} {
      box-shadow: 0 0 0 1px ${theme.orbit.borderColorTable};
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border: none;
    }

    ${TableHeadCell} {
      &:first-child {
        border-top-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
      }
    }

    ${StyledTableBody} {
      box-shadow: 0 0 0 1px ${theme.orbit.borderColorTable};
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border: none;

      > ${StyledTableRow} {
        transition: all ease-in-out ${theme.orbit.durationFast};

        &:hover {
          background-color: ${theme.orbit.paletteWhite};

          ${mq.desktop(css`
            border-radius: 6px;
            transform: scale(1.025);
            box-shadow: 0px 4px 8px 0px #252a311f, 0px 1px 4px 0px #252a3129,
              0 0 0 1px ${theme.orbit.borderColorTable};

            ${StyledTableCell} {
              &:first-child {
                border-radius: 6px 0 0 6px;
              }

              &:last-child {
                border-radius: 0 6px 6px 0;
              }
            }
          `)}
        }

        &:last-child {
          ${StyledTableCell} {
            &:first-child {
              border-bottom-left-radius: 6px;
            }

            &:last-child {
              border-bottom-right-radius: 6px;
            }
          }
        }
      }
    }
  `}
`;

const PropsTableHead = ({ tableHeaders, handleSortingChange, sortOrder }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((th: ReactElement | string) => {
          const isSortable = typeof th === "string" && SORTABLE_COLUMNS.includes(th);

          return (
            <TableHeadCell element="th">
              {th}
              {isSortable ? (
                <button type="button" onClick={handleSortingChange} style={{ padding: "2px" }}>
                  {sortingIcon(sortOrder)}
                </button>
              ) : null}
            </TableHeadCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

const PropsTableBody = ({ tableHeaders, tableData }) => {
  return (
    <TableBody>
      {tableData.map((row: { [header: string]: ReactElement }) => {
        return (
          <TableRow>
            {tableHeaders.map((header: string) => {
              return <TableCell whiteSpace="normal">{row[header]}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const StyledTableOuter = styled.div<{
  showShadows: boolean;
  showRight: boolean;
  showLeft: boolean;
}>`
  ${({ theme, showShadows, showLeft, showRight }) => css`
    max-width: 100%;
    width: 100%;
    position: relative;

    &::after,
    &::before {
      content: " ";
      display: ${showShadows ? "block" : "none"};
      position: absolute;
      width: 16px;
      height: 100%;
      top: 0;
      transition: opacity ${theme.orbit.durationNormal} ease-in-out;
    }

    &::after {
      opacity: ${showRight ? "1" : "0"};
      background-image: ${theme.orbit.backgroundTableShadowRight};
      right: 0;
    }

    &::before {
      opacity: ${showLeft ? "1" : "0"};
      left: 0;
      background-image: ${theme.orbit.backgroundTableShadowLeft};
    }
  `}
`;

const StyledTableInner = styled.div<{ showShadows: boolean }>`
  ${({ showShadows }) =>
    css`
      width: 100%;
      ${showShadows &&
      `overflow-x: auto;
      -webkit-overflow-scrolling: touch;`}
    `};
`;

function getChildString(element: ReactElement | string): string {
  if (typeof element === "string") return element;
  if (element === null) return "";
  return getChildString(element.props.children);
}

function sortTableData({
  data,
  order,
  property,
}: {
  data: Array<TableData>;
  order: SORTING_ORDER;
  property: string;
}): Array<TableData> {
  return order === SORTING_ORDER.DEFAULT
    ? data
    : data.sort((a, b) => {
        const first = getChildString(a[property]);
        const second = getChildString(b[property]);

        return first.localeCompare(second) * (order === SORTING_ORDER.ASCENDING ? 1 : -1);
      });
}

function extractTableData({
  children,
  sortOrder,
  sortProperty,
}: {
  children: [ReactElement, ReactElement];
  sortOrder: SORTING_ORDER;
  sortProperty: string;
}) {
  const [tableHead, tableBody] = children;
  const tableHeadRow = React.Children.toArray(tableHead.props.children) as ReactElement[];
  const tableHeadCells = React.Children.toArray(tableHeadRow[0].props.children) as ReactElement[];
  const tableHeaders = tableHeadCells.map(th => th.props.children);

  const tableRows = React.Children.toArray(tableBody.props.children) as ReactElement[];

  const tableData: Array<TableData> = tableRows.reduce((tmpData: Array<TableData>, row) => {
    const newData = {};
    const rowData = (React.Children.toArray(row.props.children) as ReactElement[]).map(
      td => td.props.children,
    );

    rowData.forEach((value, index) => {
      newData[tableHeaders[index]] = value;
    });

    return [...tmpData, newData];
  }, []);

  let sortedTableData: typeof tableData;

  switch (sortOrder) {
    case SORTING_ORDER.ASCENDING:
    case SORTING_ORDER.DESCENDING:
      sortedTableData = sortTableData({
        data: tableData,
        order: sortOrder,
        property: sortProperty,
      });
      break;
    case SORTING_ORDER.DEFAULT:
    default:
      sortedTableData = tableData;
      break;
  }

  return { tableHeaders, tableData: sortedTableData };
}

const PropsTable = ({ children }) => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState(SORTING_ORDER.DEFAULT);
  const sortProperty = "Name"; // While we don't have more sorting columns, this can be a constant here

  const handleSortingChange = () => {
    setSortOrder((sortOrder + 1) % 3);
  };

  const outer = React.useRef<HTMLDivElement>(null);
  const inner = React.useRef<HTMLDivElement>(null);
  const table = React.useRef<HTMLTableElement>(null);

  const handleScroll = () => {
    if (shadows && inner && table && outer && inner.current && table.current && outer.current) {
      setLeft(inner.current.scrollLeft >= 5);
      setRight(inner.current.scrollLeft + outer.current.clientWidth < table.current.clientWidth);
    }
  };

  const handleResize = React.useCallback(() => {
    if (table && outer && table.current && outer.current) {
      const showShadows = table.current?.clientWidth > outer.current?.clientWidth;
      setShadows(showShadows);
      setRight(showShadows);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const { tableHeaders, tableData } = extractTableData({
    children,
    sortOrder,
    sortProperty,
  });

  return (
    <StyledTableOuter ref={outer} showShadows={shadows} showLeft={left} showRight={right}>
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={shadows}>
        <Table ref={table}>
          <PropsTableHead
            tableHeaders={tableHeaders}
            handleSortingChange={handleSortingChange}
            sortOrder={sortOrder}
          />
          <PropsTableBody tableHeaders={tableHeaders} tableData={tableData} />
        </Table>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export default PropsTable;
