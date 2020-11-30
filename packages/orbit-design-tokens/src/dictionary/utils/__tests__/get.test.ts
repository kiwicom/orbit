import {
  getFoundationSubVariantProperties,
  getFoundationVariantOnlyProperties,
  getFoundationNameValue,
  getValue,
} from "../get";

const propertiesWithSubVariant = [
  {
    type: "color",
    value: "#E8F4FD",
    internal: true,
    original: { type: "color", value: "#E8F4FD", internal: true },
    name: "foundationPaletteBlueLight",
    attributes: {
      namespace: "foundation",
      object: "palette",
      variant: "blue",
      subVariant: "light",
      foundationAlias: "light",
      foundationType: "string",
    },
    path: ["foundation", "palette", "blue", "light"],
  },
  {
    type: "color",
    value: "#FAEAEA",
    internal: true,
    original: { type: "color", value: "#FAEAEA", internal: true },
    name: "foundationPaletteRedLight",
    attributes: {
      namespace: "foundation",
      object: "palette",
      variant: "red",
      subVariant: "light",
      foundationAlias: "light",
      foundationType: "string",
    },
    path: ["foundation", "palette", "red", "light"],
  },
];

const propertiesWithVariantOnly = [
  {
    type: "border-radius",
    value: 2,
    internal: true,
    original: { type: "border-radius", value: 2, internal: true },
    name: "foundationBorderRadiusSmall",
    attributes: {
      namespace: "foundation",
      object: "border-radius",
      variant: "small",
      foundationAlias: "small",
      foundationType: "string",
    },
    path: ["foundation", "border-radius", "small"],
  },
  {
    type: "border-radius",
    value: 4,
    internal: true,
    original: { type: "border-radius", value: 4, internal: true },
    name: "foundationBorderRadiusNormal",
    attributes: {
      namespace: "foundation",
      object: "border-radius",
      variant: "normal",
      foundationAlias: "normal",
      foundationType: "string",
    },
    path: ["foundation", "border-radius", "normal"],
  },
];
describe("get utils", () => {
  it("getFoundationSubVariantProperties should return expected", () => {
    const expected = {
      palette: {
        blue: [{ name: "light", value: "#E8F4FD" }],
        red: [{ name: "light", value: "#FAEAEA" }],
      },
    };
    expect(
      getFoundationSubVariantProperties(
        propertiesWithSubVariant,
        getFoundationNameValue("javascript"),
      ),
    ).toEqual(expected);
  });
  it("getFoundationSubVariantProperties should return expected with selector", () => {
    const expected = {
      palette: {
        blue: [{ name: "light", value: "string" }],
        red: [{ name: "light", value: "string" }],
      },
    };
    expect(
      getFoundationSubVariantProperties(
        propertiesWithSubVariant,
        getFoundationNameValue("typescript"),
      ),
    ).toEqual(expected);
  });
  it("getFoundationVariantOnlyProperties should return expected", () => {
    const expected = {
      "border-radius": [
        { name: "small", value: 2 },
        { name: "normal", value: 4 },
      ],
    };
    expect(
      getFoundationVariantOnlyProperties(
        propertiesWithVariantOnly,
        getFoundationNameValue("javascript"),
      ),
    ).toEqual(expected);
  });
  it("getValue should return expected", () => {
    expect(getValue(5)).toEqual(5);
    expect(getValue("5px")).toEqual("5px");
    expect(getValue({ value: "5px", type: "font-size" })).toEqual("5px");
  });
});
