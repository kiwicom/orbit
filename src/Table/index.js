// @flow
import * as React from "react";
import styled from "styled-components";

import { StyledTableRow } from "./TableRow";
import { StyledTableCell } from "./TableCell";
import { StyledTableBody } from "./TableBody";
import defaultTokens from "../defaultTokens";

import type { Props, State } from "./index";

const StyledTableOuter = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

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
    background-image: linear-gradient(to right, transparent, rgba(186, 199, 213, 0.23));
    // TODO: create token
    // backgroundTableShadowRight
    right: 0;
  }

  &::before {
    opacity: ${({ showLeft }) => (showLeft ? "1" : "0")};
    left: 0;
    background-image: linear-gradient(to left, transparent, rgba(186, 199, 213, 0.23));
    // TODO: create token
    // backgroundTableShadowLeft
  }
`;

StyledTableOuter.defaultProps = {
  theme: defaultTokens,
};

const StyledTableInner = styled.div`
  width: 100%;
  overflow-x: ${({ showShadows }) => (showShadows ? "scroll" : "hidden")};
`;

const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;

  & ${StyledTableBody} > ${StyledTableRow} {
    border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
    // TODO: create token
    // borderColorTable
    &:nth-of-type(even) {
      background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
      // TODO: create token
      // backgroundTableEven
      transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    }
    &:last-child {
      border: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
      // TODO: create token
      // backgroundTableHover
    }
  }
  & ${StyledTableCell} {
    min-height: ${({ compact }) => (compact ? "24px" : "48px")};
    padding: ${({ theme, compact }) =>
      compact
        ? `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`
        : `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
    // TODO: create tokens
    // paddingTableCompact 8px 12px
    // paddingTable 12px 16px
  }
`;

StyledTable.defaultProps = {
  theme: defaultTokens,
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
