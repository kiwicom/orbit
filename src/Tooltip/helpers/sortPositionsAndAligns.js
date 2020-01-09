// @flow
import { ALIGNS, POSITIONS, RTL_POSITIONS } from "../consts";
import switchPreferredPosition from "./switchPreferredPosition";
import type { SortPositionsAndAligns } from "./sortPositionsAndAligns";

const getPosition = (positionsObject, preferredPosition, theme) => {
  const positions = Object.keys(positionsObject).map(k => positionsObject[k]);
  if (!preferredPosition) return positions;
  const realPreferredPosition = switchPreferredPosition(theme, preferredPosition);
  return [realPreferredPosition, ...positions.filter(p => p !== realPreferredPosition)];
};

const getAlign = preferredAlign => {
  const aligns = Object.keys(ALIGNS).map(k => ALIGNS[k]);
  if (!preferredAlign) return aligns;
  return [preferredAlign, ...aligns.filter(p => p !== preferredAlign)];
};

const sortPositionsAndAligns: SortPositionsAndAligns = (
  preferredPosition,
  preferredAlign,
  theme,
) => {
  const positionsObject = theme.rtl ? RTL_POSITIONS : POSITIONS;
  const positions = getPosition(positionsObject, preferredPosition, theme);
  const aligns = getAlign(preferredAlign);
  return [positions, aligns];
};

export default sortPositionsAndAligns;
