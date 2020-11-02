// @flow
import getProperty from "../getProperty";
import theme from "../../../defaultTheme";

const params = {
  index: 0,
  devices: ["smallMobile"],
};

const props = {
  children: " kek",
  smallMobile: {
    spacing: "XXSmall",
    direction: "column",
  },
  theme,
};

describe("#getProperty", () => {
  it("should get property spacing", () => {
    expect(getProperty("spacing", params, props)).toBe("XXSmall");
  });

  it("should get property direction", () => {
    expect(getProperty("direction", params, props)).toBe("column");
  });
});
