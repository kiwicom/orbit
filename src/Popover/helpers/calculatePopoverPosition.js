// @flow

import type { CalculatePopoverPosition } from './calculatePopoverPosition.js.flow';
import { POSITIONS, ANCHORS } from '../consts';

const calculatePopoverPosition: CalculatePopoverPosition = preferredPosition => {
  const mappedPositions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
  const mappedAnchors = Object.keys(ANCHORS).map(k => ANCHORS[k]);

  return [
    [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
    mappedAnchors,
  ];
};

export default calculatePopoverPosition;
