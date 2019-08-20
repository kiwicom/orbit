// @flow

import isDefined from './isDefined';
import type { GetWidth } from './getWidth.js.flow';

const getWidth: GetWidth = inline => isDefined(inline) && (!inline && '100%');

export default getWidth;
