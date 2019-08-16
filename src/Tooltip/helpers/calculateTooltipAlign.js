// @flow
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import { isHorizontal, isVertical } from "./isPosition";
import { ALIGNS, TOOLTIP_TOTAL_PADDING } from "../consts";
import type { CalculateTooltipAlign } from "./calculateTooltipAlign";

const ALIGNS_COMBINATION = {
  VERTICAL_START: "verticalStart",
  VERTICAL_CENTER: "verticalCenter",
  VERTICAL_END: "verticalEnd",
  HORIZONTAL_START: "horizontalStart",
  HORIZONTAL_CENTER: "horizontalCenter",
  HORIZONTAL_END: "horizontalEnd",
};

const isInside = (p, a, canBe) => {
  if (isVertical(p)) {
    if (isAlignStart(a) && canBe[ALIGNS_COMBINATION.VERTICAL_START]) {
      return ALIGNS.START;
    }
    if (isAlignCenter(a) && canBe[ALIGNS_COMBINATION.VERTICAL_CENTER]) {
      return ALIGNS.CENTER;
    }
    if (isAlignEnd(a) && canBe[ALIGNS_COMBINATION.VERTICAL_END]) {
      return ALIGNS.END;
    }
  } else if (isHorizontal(p)) {
    if (isAlignStart(a) && canBe[ALIGNS_COMBINATION.HORIZONTAL_START]) {
      return ALIGNS.START;
    }
    if (isAlignCenter(a) && canBe[ALIGNS_COMBINATION.HORIZONTAL_CENTER]) {
      return ALIGNS.CENTER;
    }
    if (isAlignEnd(a) && canBe[ALIGNS_COMBINATION.HORIZONTAL_END]) {
      return ALIGNS.END;
    }
  }
  return false;
};

const getAlign = (p, aligns, canBe) =>
  aligns.map(a => isInside(p, a, canBe)).find(a => typeof a === "string");

const calculateTooltipAlign: CalculateTooltipAlign = (position, aligns, dimensions) => {
  if (!position) {
    return null;
  }
  const {
    containerLeft,
    containerTop,
    containerHeight,
    containerWidth,
    tooltipWidth,
    tooltipHeight,
    windowWidth,
    windowHeight,
  } = dimensions;

  const canBe = {
    [ALIGNS_COMBINATION.VERTICAL_START]:
      containerLeft + containerWidth / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerLeft + containerWidth / 2 - TOOLTIP_TOTAL_PADDING + tooltipWidth < windowWidth,
    [ALIGNS_COMBINATION.VERTICAL_CENTER]:
      containerLeft + containerWidth / 2 - tooltipWidth / 2 > 0 &&
      containerLeft + containerWidth / 2 + tooltipWidth / 2 < windowWidth,
    [ALIGNS_COMBINATION.VERTICAL_END]:
      containerLeft + containerWidth + TOOLTIP_TOTAL_PADDING < windowWidth &&
      containerLeft + containerWidth / 2 + TOOLTIP_TOTAL_PADDING - tooltipWidth > 0,
    [ALIGNS_COMBINATION.HORIZONTAL_START]:
      containerTop + containerHeight / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerTop + containerHeight / 2 + (tooltipHeight - TOOLTIP_TOTAL_PADDING) < windowHeight,
    [ALIGNS_COMBINATION.HORIZONTAL_CENTER]:
      containerTop + containerHeight / 2 - tooltipHeight / 2 > 0 &&
      containerTop + containerHeight / 2 + tooltipHeight / 2 < windowHeight,
    [ALIGNS_COMBINATION.HORIZONTAL_END]:
      containerTop + containerHeight + TOOLTIP_TOTAL_PADDING - tooltipHeight > 0 &&
      containerTop + containerHeight / 2 + TOOLTIP_TOTAL_PADDING < windowHeight,
  };

  const possibleAligns = getAlign(position, aligns, canBe);
  if (possibleAligns) {
    return possibleAligns;
  }
  return null;
};

export default calculateTooltipAlign;
