// @flow

import * as React from 'react';
import styled from 'styled-components';

import defaultTheme from '../defaultTheme';
import getViewportHideStyles from './helpers/getViewportHideStyles';
import getDisplay from './helpers/getDisplay';
import type { Props } from './index.js.flow';

const StyledHide = styled.span`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} block={block}>
    {children}
  </StyledHide>
);

export default Hide;
