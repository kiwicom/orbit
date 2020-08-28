// @flow
import { POSITIONS, TOOLTIP_ARROW_SIZE } from "../consts";
import type { CalculateTooltipPosition } from "./calculateTooltipPosition";

const getPossiblePositions = ({
  containerTopPure,
  containerLeftPure,
  containerHeight,
  containerWidth,
  tooltipWidth,
  tooltipHeight,
  windowWidth,
  windowHeight,
}) => ({
  [POSITIONS.LEFT]: containerLeftPure - tooltipWidth - TOOLTIP_ARROW_SIZE > 0,
  [POSITIONS.RIGHT]:
    containerLeftPure + containerWidth + tooltipWidth + TOOLTIP_ARROW_SIZE < windowWidth,
  [POSITIONS.TOP]: containerTopPure - tooltipHeight > 0,
  [POSITIONS.BOTTOM]: containerTopPure + containerHeight + tooltipHeight < windowHeight,
});

const calculateTooltipPosition: CalculateTooltipPosition = (positions, dimensions) => {
  const possiblePositions = getPossiblePositions(dimensions);
  const position = positions.find(p => possiblePositions[p]);
  if (typeof position === "string") {
    return position;
  }
  return null;
};

export default calculateTooltipPosition;
