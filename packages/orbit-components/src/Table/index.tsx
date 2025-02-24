"use client";

import * as React from "react";
import cx from "clsx";

import { TYPE_OPTIONS } from "./consts";
import type { Props } from "./types";

const Table = ({
  children,
  striped = true,
  compact = false,
  dataTest,
  id,
  type = TYPE_OPTIONS.PRIMARY,
}: Props) => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

  const outer = React.useRef<HTMLDivElement>(null);
  const inner = React.useRef<HTMLDivElement>(null);
  const table = React.useRef<HTMLTableElement>(null);

  const handleScroll = () => {
    if (shadows && inner.current && table.current && outer.current) {
      setLeft(inner.current?.scrollLeft >= 5);
      setRight(inner.current.scrollLeft + outer.current.clientWidth < table.current.clientWidth);
    }
  };

  const handleResize = React.useCallback(() => {
    if (table.current && outer.current) {
      const showShadows = table.current.clientWidth > outer.current.clientWidth;
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

  return (
    <div
      className={cx(
        "relative w-full max-w-full",
        "before:duration-normal before:bg-table-shadow-left before:w-400 before:absolute before:left-0 before:top-0 before:h-full before:transition-opacity before:ease-in-out",
        !left && "before:opacity-0",
        "after:duration-normal after:bg-table-shadow-right after:w-400 after:absolute after:right-0 after:top-0 after:h-full after:transition-opacity after:ease-in-out",
        !right && "after:opacity-0",
        shadows ? "before:block after:block" : "before:hidden after:hidden",
      )}
      data-test={dataTest}
      id={id}
      ref={outer}
    >
      <div
        className={cx("w-full", shadows && "overflow-x-auto")}
        onScroll={handleScroll}
        ref={inner}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={shadows ? 0 : undefined}
      >
        <table
          className={cx(
            "w-full border-collapse border-spacing-0 whitespace-nowrap",
            "[&_tbody>tr]:bg-white-normal hover:[&_tbody>tr]:bg-cloud-light [&_tbody>tr]:border-b-cloud-normal [&_tbody>tr]:duration-fast [&_tbody>tr]:border-b [&_tbody>tr]:transition-colors [&_tbody>tr]:ease-in-out last:[&_tbody>tr]:border-b-0",
            striped === true && "type-even:[&_tbody>tr]:bg-cloud-normal",
            "[&_td]:px-300 [&_th]:px-300 [&_td]:leading-normal [&_th]:leading-normal",
            compact === true
              ? // TODO: remove 10px and 6px with new tokens
                "[&_th]:h-800 [&_td]:h-800 [&_td]:py-150 [&_th]:py-150"
              : "[&_th]:h-1000 [&_td]:h-1000 [&_td]:py-[10px] [&_th]:py-[10px]",
            type === TYPE_OPTIONS.SECONDARY && "[&_td]:text-ink-normal [&_th]:text-ink-normal",
          )}
          ref={table}
        >
          {children}
        </table>
      </div>
    </div>
  );
};

export default Table;

export { default as TableHead } from "./TableHead";
export { default as TableBody } from "./TableBody";
export { default as TableFooter } from "./TableFooter";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
