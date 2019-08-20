// @flow

import isDefined from './isDefined';
import type { GetShrink } from './getShrink.js.flow';

const getShrink: GetShrink = shrink => isDefined(shrink) && (shrink ? '1' : '0');

export default getShrink;
