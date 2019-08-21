// @flow
import sortPositionsAndAligns from "../sortPositionsAndAligns";
import defaultTheme from "../../../defaultTheme";
import { POSITIONS, RTL_POSITIONS, ALIGNS } from "../../consts";

const positionsLTR = Object.values(POSITIONS);
const positionsRTL = Object.values(RTL_POSITIONS);
const aligns = Object.values(ALIGNS);

const themeRTL = { ...defaultTheme, rtl: true };

describe("sortPositionsAndAligns", () => {
  it("without preferred position in LTR", () => {
    expect(sortPositionsAndAligns(null, defaultTheme)).toEqual([positionsLTR, aligns]);
  });
  it("without preferred position in RTL", () => {
    expect(sortPositionsAndAligns(null, themeRTL)).toEqual([positionsRTL, aligns]);
  });
  it("with preferred position in LTR", () => {
    expect(sortPositionsAndAligns(POSITIONS.RIGHT, defaultTheme)).toEqual([positionsLTR, aligns]);
    expect(sortPositionsAndAligns(POSITIONS.LEFT, defaultTheme)).toEqual([
      [POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP, POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(POSITIONS.TOP, defaultTheme)).toEqual([
      [POSITIONS.TOP, POSITIONS.RIGHT, POSITIONS.LEFT, POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(POSITIONS.BOTTOM, defaultTheme)).toEqual([
      [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.LEFT, POSITIONS.TOP],
      aligns,
    ]);
  });
  it("with preferred position in RTL", () => {
    expect(sortPositionsAndAligns(RTL_POSITIONS.RIGHT, themeRTL)).toEqual([
      [RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.TOP, RTL_POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.LEFT, themeRTL)).toEqual([
      [RTL_POSITIONS.RIGHT, RTL_POSITIONS.LEFT, RTL_POSITIONS.TOP, RTL_POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.TOP, themeRTL)).toEqual([
      [RTL_POSITIONS.TOP, RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.BOTTOM, themeRTL)).toEqual([
      [RTL_POSITIONS.BOTTOM, RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.TOP],
      aligns,
    ]);
  });
});
