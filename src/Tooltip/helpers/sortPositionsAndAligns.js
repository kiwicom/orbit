// @flow
import { ALIGNS, POSITIONS, RTL_POSITIONS } from "../consts";
import switchPreferredPosition from "./switchPreferredPosition";

const sortPositionsAndAligns = (preferredPosition, theme) => {
  const positionsObject = theme.rtl ? RTL_POSITIONS : POSITIONS;
  const positions = Object.keys(positionsObject).map(k => positionsObject[k]);
  const aligns = Object.keys(ALIGNS).map(k => ALIGNS[k]);
  const realPreferredPosition = switchPreferredPosition(theme, preferredPosition);

  return [[realPreferredPosition, ...positions.filter(p => p !== realPreferredPosition)], aligns];
};

export default sortPositionsAndAligns;
