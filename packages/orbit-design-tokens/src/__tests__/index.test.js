// @flow
var tokens = require("../../lib/index");
var foundation = require("../../lib/foundation");
var convertHexToRgba = require("../../lib/convertHexToRgba");

var defaultTokens = tokens.defaultTokens;
var getTokens = tokens.getTokens;
var fromPlainObject = tokens.fromPlainObject;

describe("defaultTokens", () => {
  it("should match snapshot", () => {
    expect(defaultTokens).toMatchSnapshot();
  });
});

describe("getTokens should accept some palette and base foundation", () => {
  var brand = {
    palette: {
      product: {
        lightHover: "#222",
        lightActive: "#333",
        normal: "#444",
        normalHover: "#555",
        normalActive: "#666",
        dark: "#777",
      },
    },
    base: {
      fontSizeSm: "16px",
    },
  };
  var theme = getTokens(brand);
  it("should match snapshot", () => {
    expect(theme).toMatchSnapshot();
  });
  it("tokens should have those colors", () => {
    expect(theme.backgroundButtonPrimary).toBe(brand.palette.product.normal);
    expect(theme.colorTextLinkPrimary).toBe(brand.palette.product.dark);
    expect(theme.colorTextButtonPrimaryBordered).toBe(brand.palette.product.normal);
    expect(theme.colorTextButtonPrimaryBorderedHover).toBe(brand.palette.product.normalHover);
    expect(theme.colorTextButtonPrimaryBorderedActive).toBe(brand.palette.product.normalActive);
  });
  it("should deep merge", () => {
    expect(theme.paletteProductLight).toBe(foundation.palette.product.light);
    expect(theme.fontSizeTextNormal).toBe(foundation.base.fontSizeMd);
  });
});

describe("getTokens should accept some base", () => {
  var brand = {
    base: {
      sizeSm: "1px",
      sizeMd: "2px",
      sizeLg: "3px",
      sizeXl: "4px",
      size2xl: "5px",
    },
  };
  var theme = getTokens(brand);
  it("should match snapshot", () => {
    expect(theme).toMatchSnapshot();
  });
  it("tokens should have those colors", () => {
    expect(theme.widthIconSmall).toBe(brand.base.sizeSm);
    expect(theme.heightIconSmall).toBe(brand.base.sizeSm);
    expect(theme.widthIconMedium).toBe(brand.base.sizeMd);
    expect(theme.heightIconMedium).toBe(brand.base.sizeMd);
    expect(theme.widthIconLarge).toBe(brand.base.sizeLg);
    expect(theme.heightIconLarge).toBe(brand.base.sizeLg);
    expect(theme.heightInputNormal).toBe(brand.base.sizeXl);
    expect(theme.heightInputLarge).toBe(brand.base.size2xl);
    expect(theme.heightInputSmall).toBe(brand.base.sizeLg);
    expect(theme.heightButtonNormal).toBe(brand.base.sizeXl);
    expect(theme.heightButtonLarge).toBe(brand.base.size2xl);
    expect(theme.heightButtonSmall).toBe(brand.base.sizeLg);
  });
});

describe("fromPlainObject should create full theme", () => {
  var palette = {
    productLight: "#ff9999",
    productLightHover: "#ff7f7f",
    productLightActive: "#ff6666",
    productNormal: "#ff0000",
    productNormalHover: "#e50000",
    productNormalActive: "#cc0000",
    productDark: "#990000",
  };
  var theme = fromPlainObject(palette);
  it("should match snapshot", () => {
    expect(theme).toMatchSnapshot();
  });
  it("tokens should have those colors", () => {
    expect(theme.backgroundButtonPrimary).toBe(palette.productNormal);
    expect(theme.colorTextLinkPrimary).toBe(palette.productDark);
    expect(theme.colorTextButtonPrimaryBordered).toBe(palette.productNormal);
    expect(theme.colorTextButtonPrimaryBorderedHover).toBe(palette.productNormalHover);
    expect(theme.colorTextButtonPrimaryBorderedActive).toBe(palette.productNormalActive);
  });
});

describe("convertHexToRgba", () => {
  var colors = {
    lighter: "#bac7d5",
    lighterHover: "#a6b6c8",
    lighterActive: "#94a8be",
    light: "#7f91a8",
    whiteShort: "#fff",
    whiteLong: "#ffffff",
  };
  var finalColors = {
    lighter: "rgba(186, 199, 213, 0.6)",
    lighterHover: "rgba(166, 182, 200, 0.23)",
    lighterActive: "rgba(148, 168, 190, 1)",
    light: "rgba(127, 145, 168, 0)",
    whiteShort: "rgba(255, 255, 255, 0.1)",
    whiteLong: "rgba(255, 255, 255, 1)",
  };
  it("should converts to right RGBA colors", () => {
    expect(convertHexToRgba(colors.lighter, 60)).toBe(finalColors.lighter);
    expect(convertHexToRgba(colors.lighterHover, 23)).toBe(finalColors.lighterHover);
    expect(convertHexToRgba(colors.lighterActive, 100)).toBe(finalColors.lighterActive);
    expect(convertHexToRgba(colors.light, 0)).toBe(finalColors.light);
    expect(convertHexToRgba(colors.whiteShort, 10)).toBe(finalColors.whiteShort);
    expect(convertHexToRgba(colors.whiteLong, 100)).toBe(finalColors.whiteLong);
  });
});
