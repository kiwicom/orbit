import transformToCssVars from "../tokensToCssVars";

const tokens = {
  paletteProductNormal: "#ff0000",
  paletteProductNormalHover: "#e50000",
  paletteProductNormalActive: "#cc0000",
};

describe("transformToCssVars", () => {
  it("should convert object into css variables string", () => {
    expect(transformToCssVars({ tokens })).toMatchInlineSnapshot(
      `"--palette-product-normal:#ff0000;--palette-product-normal-hover:#e50000;--palette-product-normal-active:#cc0000;"`,
    );
  });

  it("should convert object into css variables as a class", () => {
    expect(transformToCssVars({ tokens })).toMatchInlineSnapshot(
      `"--palette-product-normal:#ff0000;--palette-product-normal-hover:#e50000;--palette-product-normal-active:#cc0000;"`,
    );
  });

  it("should convert nested object", () => {
    expect(
      transformToCssVars({
        tokens: { tokens, typography: { fontSize: "13px", fontWeight: "500" } },
      }),
    ).toMatchInlineSnapshot(
      `"--tokens-palette-product-normal:#ff0000;--tokens-palette-product-normal-hover:#e50000;--tokens-palette-product-normal-active:#cc0000;--typography-font-size:13px;--typography-font-weight:500;"`,
    );
  });
});
