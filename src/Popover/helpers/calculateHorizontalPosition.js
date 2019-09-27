// @flow
import { ALIGNS } from "../consts";
import type { AnchorsCore } from "../index";
import type { CalculateHorizontalPosition } from "./calculateHorizontalPosition";

const isInside = (p: AnchorsCore, canBe) => {
  if (p === ALIGNS.START && canBe[p]) {
    return ALIGNS.START;
  }
  if (p === ALIGNS.END && canBe[p]) {
    return ALIGNS.END;
  }
  return false;
};

const calculateHorizontalPosition: CalculateHorizontalPosition = (desiredAnchor, positions) => {
  const canBe = {
    [ALIGNS.START]: positions.containerLeft + positions.popoverWidth < positions.windowWidth,
    [ALIGNS.END]: positions.containerLeft + positions.containerWidth >= positions.popoverWidth,
  };

  const possibleAnchor = desiredAnchor
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === "string");

  const posAnchor = possibleAnchor[0];
  if (typeof posAnchor === "string") {
    return posAnchor;
  }
  return null;
};

export default calculateHorizontalPosition;
