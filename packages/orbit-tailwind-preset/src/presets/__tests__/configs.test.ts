import resolveConfig from "tailwindcss/resolveConfig";

import orbitPreset from "../..";

describe("orbitPreset", () => {
  it("should match snapshot", () => {
    const cfg = resolveConfig(orbitPreset());
    expect(cfg).toMatchSnapshot();
    expect(cfg.corePlugins).not.toContain("preflight");
  });

  it("should have preflight enabled", () => {
    const config = resolveConfig(orbitPreset({ disablePreflight: false }));
    expect(config.corePlugins).toContain("preflight");
  });

  it("should have custom theme", () => {
    const config = resolveConfig(
      orbitPreset({
        foundation: {
          palette: {
            product: {
              light: "#B6FFFA",
              lightHover: "#98E4FF",
              lightActive: "#88c5db",
              normal: "#80B3FF",
              normalHover: "#6e9adb",
              normalActive: "#6389c2",
              dark: "#687EFF",
              darkActive: "#4e5faa",
              darkHover: "#5f78c2",
              darker: "#3F4A6B",
            },
          },
        },
      }),
    );

    expect(config.presets[0].theme.colors.product).toMatchInlineSnapshot(`
      {
        "dark": "var(--palette-product-dark, #687EFF)",
        "dark-active": "var(--palette-product-dark-active, #4e5faa)",
        "dark-hover": "var(--palette-product-dark-hover, #5f78c2)",
        "darker": "var(--palette-product-darker, #3F4A6B)",
        "light": "var(--palette-product-light, #B6FFFA)",
        "light-active": "var(--palette-product-light-active, #88c5db)",
        "light-hover": "var(--palette-product-light-hover, #98E4FF)",
        "normal": "var(--palette-product-normal, #80B3FF)",
        "normal-active": "var(--palette-product-normal-active, #6389c2)",
        "normal-hover": "var(--palette-product-normal-hover, #6e9adb)",
      }
    `);

    // @ts-expect-error TODO
    expect(config.theme.backgroundColor["button-primary-background"]).toEqual("#80B3FF");
  });
});
