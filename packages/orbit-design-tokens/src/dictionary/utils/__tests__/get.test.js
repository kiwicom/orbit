// @flow
import {
  getAllPaletteNames,
  getAllCategories,
  getFoundationProperties,
  getFoundationNameValue,
} from "../get";

const properties = [
  {
    type: "spacing",
    value: 4,
    internal: true,
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
  },
  {
    type: "color",
    value: "#E8F4FD",
    internal: true,
    original: { type: "color", value: "#E8F4FD", internal: true },
    name: "foundationPaletteBlueLightDefault",
    attributes: {
      foundationName: "light",
      foundationType: "string",
      category: "palette",
      name: "blue",
      type: "light",
    },
    path: ["foundation", "palette", "blue", "light", "default"],
  },
  {
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
  },
];

describe("get utils", () => {
  it("getAllPaletteNames should return expected", () => {
    const expected = ["blue", "red"];
    expect(getAllPaletteNames(properties)).toEqual(expected);
  });
  it("getAllCategories should return expected", () => {
    const expected = ["base", "palette"];
    expect(getAllCategories(properties)).toEqual(expected);
  });
  it("getFoundationProperties should return expected", () => {
    const expected = {
      base: {
        space: [{ name: "2Xs", value: 4 }],
      },
      palette: {
        blue: [{ name: "light", value: "#E8F4FD" }],
        red: [{ name: "light", value: "#FAEAEA" }],
      },
    };
    expect(getFoundationProperties(properties, getFoundationNameValue("javascript"))).toEqual(
      expected,
    );
  });
  it("getFoundationProperties should return expected with selector", () => {
    const expected = {
      base: {
        space: [{ name: "2Xs", value: "string" }],
      },
      palette: {
        blue: [{ name: "light", value: "string" }],
        red: [{ name: "light", value: "string" }],
      },
    };
    expect(getFoundationProperties(properties, getFoundationNameValue("typescript"))).toEqual(
      expected,
    );
  });
});
