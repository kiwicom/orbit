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
});
