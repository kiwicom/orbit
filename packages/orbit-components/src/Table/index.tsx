import * as React from "react";
import styled, { css } from "styled-components";

import { StyledTableRow } from "./TableRow";
import { StyledTableCell } from "./TableCell";
import { StyledTableBody } from "./TableBody";
import { TYPE_OPTIONS } from "./consts";
import defaultTheme from "../defaultTheme";
import { Props, Type } from "./types";

const StyledTableOuter = styled.div<{
  showShadows?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
}>`
  ${({ showShadows, showLeft, showRight, theme }) => css`
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

StyledTableOuter.defaultProps = {
  theme: defaultTheme,
};

const StyledTableInner = styled.div<{ showShadows?: boolean }>`
  ${({ showShadows }) => css`
    width: 100%;
    ${showShadows &&
    css`
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    `};
  `}
`;

const StyledTable = styled.table<{ type: Type; striped?: boolean; compact?: boolean }>`
  ${({ theme, type, striped, compact }) => css`
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    white-space: nowrap;

    & ${StyledTableBody} > ${StyledTableRow} {
      background-color: ${theme.orbit.backgroundTable};
      border-bottom: 1px solid ${theme.orbit.borderColorTable};
      transition: background-color ${theme.orbit.durationFast} ease-in-out;

      ${striped &&
      css`
        &:nth-of-type(even) {
          background-color: ${theme.orbit.backgroundTableEven};
        }
      `}

      &:last-child {
        border: 0;
      }
      &:hover {
        background-color: ${theme.orbit.backgroundTableHover};
      }
    }
    & ${StyledTableCell} {
      height: ${compact ? theme.orbit.spaceXLarge : theme.orbit.spaceXXLarge};
      padding: ${compact
        ? `6px ${theme.orbit.spaceSmall}`
        : `10px ${theme.orbit.spaceSmall}`}; /* TODO: remove 10px and 6px with new tokens */
      line-height: ${theme.orbit.lineHeightTextNormal};
      color: ${type === TYPE_OPTIONS.SECONDARY && theme.orbit.paletteInkLight};
    }
  `};
`;

StyledTable.defaultProps = {
  theme: defaultTheme,
};

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

  const outer = React.useRef<HTMLDivElement | null>(null);
  const inner = React.useRef<HTMLDivElement | null>(null);
  const table = React.useRef<HTMLTableElement | null>(null);

  const handleScroll = () => {
    if (shadows && inner.current && table.current && outer.current) {
      setLeft(inner.current.scrollLeft >= 5);
      setRight(inner.current.scrollLeft + outer.current.clientWidth <= table.current.clientWidth);
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
    <StyledTableOuter
      ref={outer}
      showShadows={shadows}
      showLeft={left}
      showRight={right}
      data-test={dataTest}
      id={id}
    >
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={shadows}>
        <StyledTable striped={striped} compact={compact} type={type} ref={table}>
          {children}
        </StyledTable>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export default Table;

export { default as TableHead } from "./TableHead";
export { default as TableBody } from "./TableBody";
export { default as TableFooter } from "./TableFooter";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
