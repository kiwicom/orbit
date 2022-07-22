import getProperty from "../getProperty";
import theme from "../../../defaultTheme";
import { Devices } from "../../../utils/mediaQuery/types";

const params = {
  index: 0,
  devices: ["smallMobile"] as Devices[],
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
