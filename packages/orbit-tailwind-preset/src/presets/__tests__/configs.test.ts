import resolveConfig from "tailwindcss/resolveConfig";

import orbitPreset from "../..";

describe("orbitPreset", () => {
  it("should have preflight disabled", () => {
    const cfg = resolveConfig(orbitPreset({ disablePreflight: true }));
    expect(cfg).toMatchSnapshot();
    expect(cfg.corePlugins).not.toContain("preflight");
  });

  it("should have preflight enabled", () => {
    const config = resolveConfig(orbitPreset({ disablePreflight: false }));
    expect(config.corePlugins).toContain("preflight");
  });

  it("should have enabled by default", () => {
    const config = resolveConfig(orbitPreset());
    expect(config.corePlugins).toContain("preflight");
  });
});
