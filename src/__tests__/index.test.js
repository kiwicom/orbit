// @flow
var tokens = require("../../lib/index");
var foundation = require("../../lib/foundation");

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
    expect(theme.colorTextLinkPrimary).toBe(brand.palette.product.normal);
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
    expect(theme.colorTextLinkPrimary).toBe(palette.productNormal);
    expect(theme.colorTextButtonPrimaryBordered).toBe(palette.productNormal);
    expect(theme.colorTextButtonPrimaryBorderedHover).toBe(palette.productNormalHover);
    expect(theme.colorTextButtonPrimaryBorderedActive).toBe(palette.productNormalActive);
  });
});
