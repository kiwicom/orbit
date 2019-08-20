// @flow

import { css } from 'styled-components';

import isDefined from '../../../Stack/helpers/isDefined';
import type { GetDisplay } from './getDisplay.js.flow';

const getDisplay: GetDisplay = (inline, force) =>
  css`
    display: ${(isDefined(inline) || force) && (inline ? 'inline-grid' : 'grid')};
    display: ${(isDefined(inline) || force) && (inline ? '-ms-inline-grid' : '-ms-grid')};
  `;

export default getDisplay;
