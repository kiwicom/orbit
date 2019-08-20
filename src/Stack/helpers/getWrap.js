// @flow

import isDefined from './isDefined';
import type { GetWrap } from './getWrap.js.flow';

const getWrap: GetWrap = wrap => isDefined(wrap) && (wrap ? 'wrap' : 'nowrap');

export default getWrap;
