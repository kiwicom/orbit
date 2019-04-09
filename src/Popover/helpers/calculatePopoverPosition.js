// @flow

import type { Positions, Anchors } from "./calculatePopoverPosition.js.flow";

const calculatePopoverPosition = (
  positions: Positions,
  anchors: Anchors,
  preferredPosition: Positions,
) => {
  const mappedPositions = Object.keys(positions).map(k => positions[k]);
  const mappedAnchors = Object.keys(anchors).map(k => anchors[k]);

  if (preferredPosition) {
    return [
      [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
      mappedAnchors,
    ];
  }
  return [
    [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
    mappedAnchors,
  ];
};

export default calculatePopoverPosition;
