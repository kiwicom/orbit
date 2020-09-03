// @flow
import getProperty from "../getProperty";

const params = {
  index: 0,
  devices: ["smallMobile"],
};

const props = {
  children: " kek",
  smallMobile: {
    spacing: "tight",
    direction: "column",
  },
};

describe("#getProperty", () => {
  it("should get property spacing", () => {
    expect(getProperty("spacing", params, props)).toBe("tight");
  });

  it("should get property direction", () => {
    expect(getProperty("direction", params, props)).toBe("column");
  });
});
