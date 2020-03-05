// @flow
import defaultTheme from "../../../defaultTheme";

import transition from "..";

const theme = {
  theme: {
    ...defaultTheme,
    rtl: false,
  },
};
describe("transition", () => {
  it("should return transition for one property", () => {
    expect(transition(["top"], "fast", "ease-in-out")(theme)).toMatch(
      `top ${defaultTheme.orbit.durationFast} ease-in-out;`,
    );
  });
  it("should return transition for more properties", () => {
    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme)).toMatch(
      `top ${defaultTheme.orbit.durationSlow} ease-in-out,box-shadow ${defaultTheme.orbit.durationSlow} ease-in-out;`,
    );
  });
});
