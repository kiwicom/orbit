import React from "react";
import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";
import { StyledTable } from "@kiwicom/orbit-components/lib/Table";
import { StyledTableCell } from "@kiwicom/orbit-components/lib/Table/TableCell";
import { StyledTableRow } from "@kiwicom/orbit-components/lib/Table/TableRow";
import { StyledTableBody } from "@kiwicom/orbit-components/lib/Table/TableBody";
import { StyledTableHead } from "@kiwicom/orbit-components/lib/Table/TableHead";

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

const PropsTable = ({ children }) => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

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

  return (
    <StyledTableOuter ref={outer} showShadows={shadows} showLeft={left} showRight={right}>
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={shadows}>
        <Table ref={table}>{children}</Table>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export default PropsTable;
