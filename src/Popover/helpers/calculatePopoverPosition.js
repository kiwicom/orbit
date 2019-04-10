// @flow

import type { Positions, Anchors } from "./calculatePopoverPosition.js.flow";
import type { AnchorsCore, PositionsCore } from "../index.js.flow";

const calculatePopoverPosition = (
  positions: Positions,
  anchors: Anchors,
  preferredPosition: Positions,
) => {
  const mappedPositions = Object.keys(positions).map<PositionsCore>(k => positions[k]);
  const mappedAnchors = Object.keys(anchors).map<AnchorsCore>(k => anchors[k]);

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
