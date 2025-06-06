import React, { ReactElement } from "react";
import cx from "clsx";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components";

import ArrowUp from "../../images/icons/ArrowUp.svg";
import ArrowDown from "../../images/icons/ArrowDown.svg";
import Sort from "../../images/icons/Sort.svg";

enum SORTING_ORDER {
  DEFAULT = 0,
  ASCENDING = 1,
  DESCENDING = 2,
}

interface TableData {
  [x: string]: React.ReactNode;
}

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

const TableWrap = ({
  children,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) => (
  <div
    ref={ref}
    className={cx(
      // table styles
      "[&_table]:table",

      // table th styles
      "[&_table_th]:bg-cloud-light [&_table_th]:text-left",

      // table thead styles
      "[&_table_thead]:rounded-t-150 [&_table_thead]:border-none [&_table_thead]:shadow-[0_0_0_1px_var(--palette-cloud-dark)]",

      // table th first/last child
      "[&_table_th:first-child]:rounded-tl-150",
      "[&_table_th:last-child]:rounded-tr-150",

      // table tbody styles
      "[&_table_tbody]:rounded-b-150 [&_table_tbody]:border-none [&_table_tbody]:shadow-[0_0_0_1px_var(--palette-cloud-dark)]",

      // table tbody > tr styles
      "[&_table_tbody>tr]:duration-fast [&_table_tbody>tr]:transition-colors [&_table_tbody>tr]:ease-in-out",

      // table tbody > tr:hover styles
      "[&_table_tbody>tr:hover]:bg-cloud-light",
    )}
    {...props}
  >
    {children}
  </div>
);

interface TableElementProps {
  children: React.ReactNode;
}

function getChildString(element: ReactElement<TableElementProps> | string | null): string {
  if (typeof element === "string") return element;
  if (element === null) return "";
  if (!element?.props || !element?.props?.children) return "";

  const children = element?.props.children;
  if (Array.isArray(children)) {
    return children.map(child => getChildString(child)).join(" ");
  }

  return getChildString(children as ReactElement<TableElementProps> | string | null);
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
        const first = getChildString(
          a[property] as ReactElement<TableElementProps> | string | null,
        );
        const second = getChildString(
          b[property] as ReactElement<TableElementProps> | string | null,
        );
        return first.localeCompare(second) * (order === SORTING_ORDER.ASCENDING ? 1 : -1);
      });
}

function extractTableData({
  children,
  sortOrder,
  sortProperty,
}: {
  children: [ReactElement<TableElementProps>, ReactElement<TableElementProps>];
  sortOrder: SORTING_ORDER;
  sortProperty: string;
}) {
  const [tableHead, tableBody] = children;
  const tableHeadRow = React.Children.toArray(
    tableHead?.props?.children || [],
  ) as ReactElement<TableElementProps>[];
  const tableHeadCells = React.Children.toArray(
    tableHeadRow[0]?.props?.children || [],
  ) as ReactElement<TableElementProps>[];
  const tableHeaders = tableHeadCells.map(th => th?.props?.children);

  const tableRows = React.Children.toArray(
    tableBody?.props?.children || [],
  ) as ReactElement<TableElementProps>[];

  const tableData: Array<TableData> = tableRows.reduce((tmpData: Array<TableData>, row) => {
    const newData: TableData = {};
    const rowData = (
      React.Children.toArray(row?.props?.children || []) as ReactElement<TableElementProps>[]
    ).map(td => td?.props?.children);

    rowData.forEach((value, index) => {
      const header = getChildString(
        tableHeaders[index] as ReactElement<TableElementProps> | string | null,
      );
      newData[header] = value;
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
  const tableWrap = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (
      shadows &&
      inner &&
      tableWrap &&
      outer &&
      inner.current &&
      tableWrap.current &&
      outer.current
    ) {
      setLeft(inner.current.scrollLeft >= 5);
      setRight(
        inner.current.scrollLeft + outer.current.clientWidth < tableWrap.current.clientWidth,
      );
    }
  };

  const handleResize = React.useCallback(() => {
    if (tableWrap && outer && tableWrap.current && outer.current) {
      const showShadows = tableWrap.current?.clientWidth > outer.current?.clientWidth;
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
    <div
      ref={outer}
      className={cx(
        "relative w-full max-w-full",
        "after:content-[' '] after:duration-normal after:w-400 after:bg-table-shadow-right after:absolute after:right-0 after:top-0 after:h-full after:transition-opacity after:ease-in-out",
        "before:content-[' '] before:duration-normal before:w-400 before:bg-table-shadow-left before:absolute before:left-0 before:top-0 before:h-full before:transition-opacity before:ease-in-out",
        shadows ? "before:block after:block" : "before:hidden after:hidden",
        left ? "before:opacity-100" : "before:opacity-0",
        right ? "after:opacity-100" : "after:opacity-0",
      )}
    >
      <div
        ref={inner}
        onScroll={handleScroll}
        className={cx("w-full", shadows && "overflow-x-auto")}
      >
        <TableWrap ref={tableWrap}>
          <Table type="primary" striped={false}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((th: ReactElement | string) => {
                  const isSortable = typeof th === "string" && SORTABLE_COLUMNS.includes(th);

                  return (
                    <TableCell as="th">
                      {th}
                      {isSortable ? (
                        <button
                          type="button"
                          onClick={handleSortingChange}
                          style={{ padding: "2px" }}
                        >
                          {sortingIcon(sortOrder)}
                        </button>
                      ) : null}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
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
          </Table>
        </TableWrap>
      </div>
    </div>
  );
};

export default PropsTable;
