// @flow
import sortPositionsAndAligns from "../sortPositionsAndAligns";
import defaultTheme from "../../../defaultTheme";
import { POSITIONS, RTL_POSITIONS, ALIGNS } from "../../consts";

const positionsLTR = Object.values(POSITIONS);
const positionsRTL = Object.values(RTL_POSITIONS);
const aligns = Object.values(ALIGNS);

const themeRTL = { ...defaultTheme, rtl: true };

describe("sortPositionsAndAligns", () => {
  it("without preferred in LTR", () => {
    expect(sortPositionsAndAligns(null, null, defaultTheme)).toEqual([positionsLTR, aligns]);
  });
  it("without preferred in RTL", () => {
    expect(sortPositionsAndAligns(null, null, themeRTL)).toEqual([positionsRTL, aligns]);
  });
  it("with preferred position in LTR", () => {
    expect(sortPositionsAndAligns(POSITIONS.RIGHT, null, defaultTheme)).toEqual([
      positionsLTR,
      aligns,
    ]);
    expect(sortPositionsAndAligns(POSITIONS.LEFT, null, defaultTheme)).toEqual([
      [POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP, POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(POSITIONS.TOP, null, defaultTheme)).toEqual([
      [POSITIONS.TOP, POSITIONS.RIGHT, POSITIONS.LEFT, POSITIONS.BOTTOM],
      aligns,
    ]);
    expect(sortPositionsAndAligns(POSITIONS.BOTTOM, null, defaultTheme)).toEqual([
      [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.LEFT, POSITIONS.TOP],
      aligns,
    ]);
  });
  it("with preferred position in RTL", () => {
    expect(sortPositionsAndAligns(RTL_POSITIONS.RIGHT, null, themeRTL)).toEqual([
      [RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.TOP, RTL_POSITIONS.BOTTOM],
      [ALIGNS.CENTER, ALIGNS.START, ALIGNS.END],
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.LEFT, ALIGNS.END, themeRTL)).toEqual([
      [RTL_POSITIONS.RIGHT, RTL_POSITIONS.LEFT, RTL_POSITIONS.TOP, RTL_POSITIONS.BOTTOM],
      [ALIGNS.END, ALIGNS.CENTER, ALIGNS.START],
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.TOP, ALIGNS.START, themeRTL)).toEqual([
      [RTL_POSITIONS.TOP, RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.BOTTOM],
      [ALIGNS.START, ALIGNS.CENTER, ALIGNS.END],
    ]);
    expect(sortPositionsAndAligns(RTL_POSITIONS.BOTTOM, null, themeRTL)).toEqual([
      [RTL_POSITIONS.BOTTOM, RTL_POSITIONS.LEFT, RTL_POSITIONS.RIGHT, RTL_POSITIONS.TOP],
      aligns,
    ]);
  });
});
