import { isColor, isSpacing, isInternal, isNotInternal, isBorderRadius } from "../is";

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
    expect(isColor(tokenPlaceholder({ type: "color", internal: true }))).toEqual(true);
    expect(isColor(tokenPlaceholder({ type: "spacing", internal: true }))).toEqual(false);
  });
  it("isSpacing should return expected", () => {
    expect(isSpacing(tokenPlaceholder({ type: "color", internal: true }))).toEqual(false);
    expect(isSpacing(tokenPlaceholder({ type: "spacing", internal: true }))).toEqual(true);
  });
  it("isBorderRadius should return expected", () => {
    expect(isBorderRadius(tokenPlaceholder({ type: "color", internal: true }))).toEqual(false);
    expect(isBorderRadius(tokenPlaceholder({ type: "border-radius", internal: true }))).toEqual(
      true,
    );
  });
  it("isInternal should return expected", () => {
    expect(isInternal(tokenPlaceholder({ type: "color", internal: true }))).toEqual(true);
    expect(isInternal(tokenPlaceholder({ type: "color", internal: false }))).toEqual(false);
  });
  it("isNotInternal should return expected", () => {
    expect(isNotInternal(tokenPlaceholder({ type: "color", internal: true }))).toEqual(false);
    expect(isNotInternal(tokenPlaceholder({ type: "color", internal: false }))).toEqual(true);
  });
});
