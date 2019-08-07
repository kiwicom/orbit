// @flow
import type { PositionsCore } from "../index";
import { POSITIONS } from "../consts";
import type { CalculateVerticalPosition } from "./calculateVerticalPosition";

const isInside = (p: PositionsCore, canBe) => {
  if (p === POSITIONS.TOP && canBe[p]) {
    return POSITIONS.TOP;
  }
  if (p === POSITIONS.BOTTOM && canBe[p]) {
    return POSITIONS.BOTTOM;
  }
  return false;
};

const calculateVerticalPosition: CalculateVerticalPosition = (desiredPositions, pos) => {
  const canBe = {
    [POSITIONS.TOP]: pos.containerTop - pos.popoverHeight > pos.windowScrollTop,
    [POSITIONS.BOTTOM]:
      pos.containerTop - pos.windowScrollTop + pos.containerHeight + pos.popoverHeight <
      pos.windowHeight,
  };
  const possiblePositions = desiredPositions
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === "string");

  // ordering in POSITIONS const is important
  const posPosition = possiblePositions[0];
  if (typeof posPosition === "string") {
    return posPosition;
  }
  return null;
};

export default calculateVerticalPosition;
