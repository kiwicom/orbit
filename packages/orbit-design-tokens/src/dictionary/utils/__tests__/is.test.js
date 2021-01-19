import { isColor, isSpacing, isInternal, isNotInternal } from "../is";

const typeColor = {
  type: "color",
  value: "#FAEAEA",
  internal: true,
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
};
const typeSpacing = {
  type: "spacing",
  value: 4,
  original: { type: "spacing", value: 4, internal: true },
  name: "foundationBaseSpace2Xs",
  attributes: {
    foundationName: "2Xs",
    foundationType: "string",
    category: "base",
    name: "space",
    type: "2xs",
  },
  path: ["foundation", "base", "space", "2xs"],
};

describe("is utils", () => {
  it("isColor should return expected", () => {
    expect(isColor(typeColor)).toEqual(true);
    expect(isColor(typeSpacing)).toEqual(false);
  });
  it("isSpacing should return expected", () => {
    expect(isSpacing(typeColor)).toEqual(false);
    expect(isSpacing(typeSpacing)).toEqual(true);
  });
  it("isInternal should return expected", () => {
    expect(isInternal(typeColor)).toEqual(true);
    expect(isInternal(typeSpacing)).toEqual(false);
  });
  it("isNotInternal should return expected", () => {
    expect(isNotInternal(typeColor)).toEqual(false);
    expect(isNotInternal(typeSpacing)).toEqual(true);
  });
});
