// @flow
import { ALIGNS, POSITIONS, RTL_POSITIONS } from "../consts";
import switchPreferredPosition from "./switchPreferredPosition";
import type { SortPositionsAndAligns } from "./sortPositionsAndAligns";

const sortPositionsAndAligns: SortPositionsAndAligns = (preferredPosition, theme) => {
  const positionsObject = theme.rtl ? RTL_POSITIONS : POSITIONS;
  const positions = Object.keys(positionsObject).map(k => positionsObject[k]);
  const aligns = Object.keys(ALIGNS).map(k => ALIGNS[k]);
  if (preferredPosition) {
    const realPreferredPosition = switchPreferredPosition(theme, preferredPosition);
    return [[realPreferredPosition, ...positions.filter(p => p !== realPreferredPosition)], aligns];
  }

  return [positions, aligns];
};

export default sortPositionsAndAligns;
