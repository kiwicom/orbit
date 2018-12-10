// @flow
import transition from "../";
import defaultTokens from "../../../defaultTokens";

const theme = {
  theme: {
    ...defaultTokens,
    rtl: false,
  },
};
describe("transition", () => {
  it("should return transition for one property", () => {
    expect(transition(["top"], "fast", "ease-in-out")(theme)).toMatch(
      `top ${defaultTokens.orbit.durationFast} ease-in-out;`,
    );
  });
  it("should return transition for more properties", () => {
    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme)).toMatch(
      `top ${defaultTokens.orbit.durationSlow} ease-in-out,box-shadow ${
        defaultTokens.orbit.durationSlow
      } ease-in-out;`,
    );
  });
});
