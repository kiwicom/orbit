// @flow

import { useState, useEffect } from "react";

import { ANCHORS } from "../consts";
import type { UseHorizontalPosition } from "./useHorizontalPosition.js.flow";
import type { AnchorsCore } from "../index.js.flow";

const useHorizontalPosition: UseHorizontalPosition = (desiredAnchor, positions) => {
  const [anchor, setAnchor] = useState<string>("start");

  useEffect(() => {
    const canBeAnchorLeft =
      positions.containerLeft + positions.popoverWidth < positions.windowWidth;
    const canBeAnchorRight =
      positions.containerLeft + positions.containerWidth >= positions.popoverWidth;
    // returns the position name if the position can be set

    const isInside = (p: AnchorsCore) => {
      if (p === ANCHORS.START && canBeAnchorLeft) {
        return ANCHORS.START;
      }
      if (p === ANCHORS.END && canBeAnchorRight) {
        return ANCHORS.END;
      }
      return false;
    };

    const possibleAnchor = desiredAnchor.map(p => isInside(p)).filter(p => typeof p === "string");

    const posAnchor = possibleAnchor[0];
    if (typeof posAnchor === "string") {
      setAnchor(posAnchor);
    }
  }, [
    positions.containerLeft,
    positions.popoverWidth,
    positions.windowWidth,
    positions.containerWidth,
    desiredAnchor,
  ]);

  return anchor;
};

export default useHorizontalPosition;
