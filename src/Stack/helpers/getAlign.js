// @flow

import { ALIGNS } from '../consts';
import type { GetAlign } from './getAlign.js.flow';

const getAlign: GetAlign = align => {
  const tokens = {
    [ALIGNS.START]: 'flex-start',
    [ALIGNS.END]: 'flex-end',
    [ALIGNS.CENTER]: 'center',
  };
  return align && tokens[align];
};

export default getAlign;
