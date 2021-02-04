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
    expect(isColor(tokenPlaceholder({ type: "color" }))).toEqual(true);
    expect(isColor(tokenPlaceholder({ type: "spacing" }))).toEqual(false);
  });
  it("isSpacing should return expected", () => {
    expect(isSpacing(tokenPlaceholder({ type: "color" }))).toEqual(false);
    expect(isSpacing(tokenPlaceholder({ type: "spacing" }))).toEqual(true);
  });
  it("isBorderRadius should return expected", () => {
    expect(isBorderRadius(tokenPlaceholder({ type: "color" }))).toEqual(false);
    expect(isBorderRadius(tokenPlaceholder({ type: "border-radius" }))).toEqual(true);
  });
  it("isInternal should return expected", () => {
    expect(isInternal(tokenPlaceholder({ internal: true }))).toEqual(true);
    expect(isInternal(tokenPlaceholder({ internal: false }))).toEqual(false);
  });
  it("isNotInternal should return expected", () => {
    expect(isNotInternal(tokenPlaceholder({ internal: true }))).toEqual(false);
    expect(isNotInternal(tokenPlaceholder({ internal: false }))).toEqual(true);
  });
});
