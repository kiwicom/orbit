// @flow

import type { GetDisplay } from './getDisplay.js.flow';

const getDisplay: GetDisplay = () => ({ block }) => (block ? 'block' : 'inline-block');

export default getDisplay;
