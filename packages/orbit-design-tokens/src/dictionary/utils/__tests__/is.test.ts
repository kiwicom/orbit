import {
  isColor,
  isInternal,
  isNotInternal,
  isBorderRadius,
  isZIndex,
  isBreakpoint,
  isSize,
  isSpacingWithTwoValues,
  isSpacingWithThreeValues,
  isSpacingWithFourValues,
  isBoxShadow,
  isModifier,
  isDuration,
} from "../is";

const tokenPlaceholder = ({ type, internal }) => ({
  type,
  value: "#FAEAEA",
  internal,
  original: { type: "color", value: "#FAEAEA", internal: true },
  name: "foundationPaletteRedLightDefault",
  attributes: {
    foundationName: "light",
    foundationType: "string",
    category: "palette",
    name: "red",
    type: "light",
  },
  path: ["foundation", "palette", "red", "light", "default"],
});

describe("is utils", () => {
  it("isColor should return expected", () => {
    expect(isColor(tokenPlaceholder({ type: "color", internal: true }))).toBe(true);
    expect(isColor(tokenPlaceholder({ type: "spacing", internal: true }))).toBe(false);
  });
  it("isBorderRadius should return expected", () => {
    expect(isBorderRadius(tokenPlaceholder({ type: "color", internal: true }))).toBe(false);
    expect(isBorderRadius(tokenPlaceholder({ type: "border-radius", internal: true }))).toBe(true);
  });
  it("isZIndex should return expected", () => {
    expect(isZIndex(tokenPlaceholder({ type: "color", internal: true }))).toBe(false);
    expect(isZIndex(tokenPlaceholder({ type: "z-index", internal: true }))).toBe(true);
  });
  it("isBreakpoint should return expected", () => {
    expect(isBreakpoint(tokenPlaceholder({ type: "color", internal: true }))).toBe(false);
    expect(isBreakpoint(tokenPlaceholder({ type: "breakpoint", internal: true }))).toBe(true);
  });
  it("isSize should return expected", () => {
    expect(isSize(tokenPlaceholder({ type: "color", internal: true }))).toBe(false);
    expect(isSize(tokenPlaceholder({ type: "size", internal: true }))).toBe(true);
  });
  it("isBoxShadow should return expected", () => {
    expect(isBoxShadow(tokenPlaceholder({ type: "color", internal: true }))).toEqual(false);
    expect(isBoxShadow(tokenPlaceholder({ type: "box-shadow", internal: true }))).toEqual(true);
  });
  it("isModifier should return expected", () => {
    expect(isModifier(tokenPlaceholder({ type: "box-shadow", internal: true }))).toEqual(false);
    expect(isModifier(tokenPlaceholder({ type: "modifier", internal: true }))).toEqual(true);
  });
  it("isDuration should return expected", () => {
    expect(isDuration(tokenPlaceholder({ type: "color", internal: true }))).toEqual(false);
    expect(isDuration(tokenPlaceholder({ type: "duration", internal: false }))).toEqual(true);
  });
  it("isInternal should return expected", () => {
    expect(isInternal(tokenPlaceholder({ type: "color", internal: true }))).toBe(true);
    expect(isInternal(tokenPlaceholder({ type: "color", internal: false }))).toBe(false);
  });
  it("isNotInternal should return expected", () => {
    expect(isNotInternal(tokenPlaceholder({ type: "color", internal: true }))).toBe(false);
    expect(isNotInternal(tokenPlaceholder({ type: "color", internal: false }))).toBe(true);
  });
  it("isSpacingWithTwoValues should return expected", () => {
    expect(isSpacingWithTwoValues(["top-bottom", "left-right"])).toBe(true);
    expect(isSpacingWithTwoValues(["left-right", "top-bottom"])).toBe(true);
    expect(isSpacingWithTwoValues(["left-right", "bottom-top"])).toBe(false);
    expect(isSpacingWithTwoValues(["right-left", "top-bottom"])).toBe(false);
    expect(isSpacingWithTwoValues(["top", "right", "bottom", "left"])).toBe(false);
    expect(isSpacingWithTwoValues(["top", "left-right", "bottom"])).toBe(false);
  });
  it("isSpacingWithThreeValues should return expected", () => {
    expect(isSpacingWithThreeValues(["top", "left-right", "bottom"])).toBe(true);
    expect(isSpacingWithThreeValues(["bottom", "left-right", "top"])).toBe(true);
    expect(isSpacingWithThreeValues(["left-right", "bottom", "top"])).toBe(true);
    expect(isSpacingWithThreeValues(["left", "bottom", "top"])).toBe(false);
    expect(isSpacingWithThreeValues(["right", "left", "bottom", "top"])).toBe(false);
    expect(isSpacingWithThreeValues(["top-bottom", "left-right"])).toBe(false);
  });
  it("isSpacingWithFourValues should return expected", () => {
    expect(isSpacingWithFourValues(["top", "right", "bottom", "left"])).toBe(true);
    expect(isSpacingWithFourValues(["top", "left", "bottom", "right"])).toBe(true);
    expect(isSpacingWithFourValues(["bottom", "left", "top", "right"])).toBe(true);
    expect(isSpacingWithFourValues(["top-bottom", "left-right"])).toBe(false);
    expect(isSpacingWithFourValues(["top", "left-right", "bottom"])).toBe(false);
  });
});
