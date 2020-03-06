// @flow
import { ALIGNS } from "../consts";
import type { AlignsCore } from "../index";
import type { CalculateHorizontalPosition } from "./calculateHorizontalPosition";

const isInside = (p: AlignsCore, canBe) => {
  if (p === ALIGNS.START && canBe[p]) {
    return ALIGNS.START;
  }
  if (p === ALIGNS.END && canBe[p]) {
    return ALIGNS.END;
  }
  if (p === ALIGNS.CENTER && canBe[p]) {
    return ALIGNS.CENTER;
  }
  return false;
};

const calculateHorizontalPosition: CalculateHorizontalPosition = (desiredAnchor, positions) => {
  const canBe = {
    [ALIGNS.START]: positions.containerLeft + positions.popoverWidth < positions.windowWidth,
    [ALIGNS.END]: positions.containerLeft + positions.containerWidth >= positions.popoverWidth,
    [ALIGNS.CENTER]:
      positions.containerLeft + positions.containerWidth / 2 - positions.popoverWidth / 2 > 0 &&
      positions.containerLeft + positions.containerWidth / 2 + positions.popoverWidth / 2 <
        positions.windowWidth,
  };

  const possibleAnchor = desiredAnchor
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === "string");
  const posAnchor = Object.values(ALIGNS).some(val => val === possibleAnchor[0]);
  if (typeof posAnchor === "string") {
    return posAnchor;
  }
  return null;
};

export default calculateHorizontalPosition;
