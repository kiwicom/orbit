// @flow

import type { CalculatePopoverPosition } from "./calculatePopoverPosition.js.flow";
import { POSITIONS, ALIGNS } from "../consts";

const calculatePopoverPosition: CalculatePopoverPosition = (
  preferredPosition,
  preferredHoriznotalPosition,
) => {
  const mappedPositions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
  const mappedAlignPositions = Object.keys(ALIGNS).map(k => ALIGNS[k]);

  return [
    [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
    [
      preferredHoriznotalPosition,
      ...mappedAlignPositions.filter(p => p !== preferredHoriznotalPosition),
    ],
  ];
};

export default calculatePopoverPosition;
