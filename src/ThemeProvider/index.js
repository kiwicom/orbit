// @flow

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Dictionary from '../Dictionary';
import type { Props } from './index.js.flow';

const ThemeProvider = ({ theme, dictionary, children }: Props) => (
  <StyledThemeProvider theme={theme}>
    {dictionary ? (
      <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
    ) : (
      React.Children.only(children)
    )}
  </StyledThemeProvider>
);

export default ThemeProvider;
