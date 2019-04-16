// @flow

import type { functionType } from "./calculatePopoverPosition.js.flow";
import { POSITIONS, ANCHORS } from "../consts";

const calculatePopoverPosition: functionType = preferredPosition => {
  const mappedPositions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
  const mappedAnchors = Object.keys(ANCHORS).map(k => ANCHORS[k]);

  return [
    [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
    mappedAnchors,
  ];
};

export default calculatePopoverPosition;
