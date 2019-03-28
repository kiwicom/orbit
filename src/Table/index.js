// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledTableRow } from "./TableRow";
import { StyledTableCell } from "./TableCell";
import { StyledTableBody } from "./TableBody";
import defaultTheme from "../defaultTheme";

import type { Props, State } from "./index";

const StyledTableOuter = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;

  &::after,
  &::before {
    content: " ";
    display: ${({ showShadows }) => (showShadows ? "block" : "none")};
    position: absolute;
    width: 16px;
    height: 100%;
    top: 0;
    transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }

  &::after {
    opacity: ${({ showRight }) => (showRight ? "1" : "0")};
    background-image: ${({ theme }) => theme.orbit.backgroundTableShadowRight};
    right: 0;
  }

  &::before {
    opacity: ${({ showLeft }) => (showLeft ? "1" : "0")};
    left: 0;
    background-image: ${({ theme }) => theme.orbit.backgroundTableShadowLeft};
  }
`;

StyledTableOuter.defaultProps = {
  theme: defaultTheme,
};

const StyledTableInner = styled.div`
  width: 100%;
  ${({ showShadows }) =>
    showShadows &&
    css`
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    `};
`;

const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  white-space: nowrap;

  & ${StyledTableBody} > ${StyledTableRow} {
    background-color: ${({ theme }) => theme.orbit.backgroundTable};
    border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
    transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    &:nth-of-type(even) {
      background-color: ${({ theme }) => theme.orbit.backgroundTableEven};
    }
    &:last-child {
      border: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme.orbit.backgroundTableHover};
    }
  }
  & ${StyledTableCell} {
    min-height: ${({ compact }) => (compact ? "24px" : "48px")};
    padding: ${({ theme, compact }) =>
      compact ? theme.orbit.paddingTableCompact : theme.orbit.paddingTable};
  }
`;

StyledTable.defaultProps = {
  theme: defaultTheme,
};

class Table extends React.PureComponent<Props, State> {
  state = {
    showShadows: false,
    showRight: false,
    showLeft: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const { table, outer } = this;
    if (table && outer) {
      const showShadows = table.current?.clientWidth > outer.current?.clientWidth;
      this.setState({ showShadows, showRight: showShadows });
    }
  };

  handleScroll = () => {
    const { inner, table, outer } = this;
    const { showShadows } = this.state;
    if (showShadows && inner && table && outer) {
      this.setState({
        showLeft: inner.current?.scrollLeft >= 5,
        showRight:
          inner.current?.scrollLeft + outer.current?.clientWidth <= table.current?.clientWidth,
      });
    }
  };

  outer: { current: any | HTMLElement } = React.createRef();
  inner: { current: any | HTMLElement } = React.createRef();
  table: { current: any | HTMLElement } = React.createRef();

  render() {
    const { children, compact = false, dataTest } = this.props;
    const { showShadows, showLeft, showRight } = this.state;
    return (
      <StyledTableOuter
        ref={this.outer}
        showShadows={showShadows}
        showLeft={showLeft}
        showRight={showRight}
        data-test={dataTest}
      >
        <StyledTableInner ref={this.inner} onScroll={this.handleScroll} showShadows={showShadows}>
          <StyledTable compact={compact} ref={this.table}>
            {children}
          </StyledTable>
        </StyledTableInner>
      </StyledTableOuter>
    );
  }
}

export default Table;

export { default as TableHead } from "./TableHead";
export { default as TableBody } from "./TableBody";
export { default as TableRow } from "./TableRow";
export { default as TableCell } from "./TableCell";
