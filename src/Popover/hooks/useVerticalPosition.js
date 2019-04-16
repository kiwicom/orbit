// @flow
import { useState, useEffect } from "react";

import { POSITIONS } from "../consts";
import type { UseVerticalPosition, Positions } from "./useVerticalPosition.js.flow";

const useVerticalPosition: UseVerticalPosition = (desiredPositions, pos) => {
  const [positionDirection, setPositionDirection] = useState<string>("bottom");

  useEffect(() => {
    const canBePositionTop = pos.containerTop - pos.popoverHeight > 0;
    const canBePositionBottom =
      pos.containerTop + pos.containerHeight + pos.popoverHeight < pos.windowHeight;

    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (p === POSITIONS.TOP && canBePositionTop) {
        return POSITIONS.TOP;
      }
      if (p === POSITIONS.BOTTOM && canBePositionBottom) {
        return POSITIONS.BOTTOM;
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === "string");

    // set the first valid position
    // ordering in POSITIONS const is important
    const posPosition = possiblePositions[0];
    if (typeof posPosition === "string") {
      setPositionDirection(posPosition);
    }
  });

  return positionDirection;
};

export default useVerticalPosition;
