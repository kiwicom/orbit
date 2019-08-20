// @flow

import { DIRECTIONS } from '../consts';
import type { GetDirectionSpacingTemplate } from './getDirectionSpacingTemplate.js.flow';

const getDirectionSpacingTemplate: GetDirectionSpacingTemplate = direction => {
  switch (direction) {
    case DIRECTIONS.COLUMN:
      return '0 0 __spacing__ 0';
    case DIRECTIONS.ROW:
      return '0 __spacing__ 0 0';
    case DIRECTIONS.COLUMNREVERSE:
      return '__spacing__ 0 0 0';
    case DIRECTIONS.ROWREVERSE:
      return '0 0 0 __spacing__';
    default:
      return '0 0 __spacing__ 0';
  }
};

export default getDirectionSpacingTemplate;
