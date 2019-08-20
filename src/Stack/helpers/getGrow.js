// @flow

import isDefined from './isDefined';
import type { GetGrow } from './getGrow.js.flow';

const getGrow: GetGrow = grow => isDefined(grow) && (grow ? '1' : '0');

export default getGrow;
