// @flow

import * as React from 'react';
import styled from 'styled-components';

import defaultTheme from '../../defaultTheme';
import { StyledTableCell } from '../TableCell/index';
import type { Props } from './index.js.flow';

const StyledTableHead = styled(({ children, className }) => (
  <thead className={className}>{children}</thead>
))`
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTableHead};
  width: 100%;
  white-space: nowrap;
  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightTableHead};
  }
`;

StyledTableHead.defaultProps = {
  theme: defaultTheme,
};
const TableHead = (props: Props) => <StyledTableHead>{props.children}</StyledTableHead>;

export default TableHead;
