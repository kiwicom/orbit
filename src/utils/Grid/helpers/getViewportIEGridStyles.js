// @flow

import { css } from 'styled-components';

import getProperty from './getProperty';
import compatibleGridTemplate from './compatibleGridTemplate';
import autoPlacement from './autoPlacement';
import type { GetViewportIEGridStyles } from './getViewportIEGridStyles.js.flow';

const chooseGap = (specificGap, basicGap) =>
  specificGap && specificGap !== '0' ? specificGap : basicGap;

const getViewportIEGridStyles: GetViewportIEGridStyles = (
  mediaQuery,
  childrenCount,
  { index, devices },
  props,
) => {
  const rows = getProperty('rows', { index, devices }, props);
  const columns = getProperty('columns', { index, devices }, props);
  const gap = getProperty('gap', { index, devices }, props);
  const rowGap = chooseGap(getProperty('rowGap', { index, devices }, props), gap);
  const columnGap = chooseGap(getProperty('columnGap', { index, devices }, props), gap);
  const compatibleColumns = compatibleGridTemplate(columns, columnGap);
  const compatibleRows = compatibleGridTemplate(rows, rowGap);
  const childrenPlacement = autoPlacement(
    childrenCount,
    compatibleColumns,
    compatibleRows,
    columnGap,
    rowGap,
  );
  return css`
    -ms-grid-columns: ${compatibleColumns};
    -ms-grid-rows: ${compatibleRows};
    ${childrenPlacement};
  `;
};

export default getViewportIEGridStyles;
