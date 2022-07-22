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
      `top ${defaultTheme.orbit.durationFast} ease-in-out`,
    );
  });
  it("should return transition for more properties", () => {
    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme)).toMatch(
      `top ${defaultTheme.orbit.durationSlow} ease-in-out,box-shadow ${defaultTheme.orbit.durationSlow} ease-in-out`,
    );
  });
  it("returns transition when transitions is undefined or null", () => {
    const theme2 = {
      theme: {
        ...defaultTheme,
        rtl: false,
        transitions: undefined,
      },
    };

    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme2)).toMatch(
      `top ${defaultTheme.orbit.durationSlow} ease-in-out,box-shadow ${defaultTheme.orbit.durationSlow} ease-in-out`,
    );

    // @ts-expect-error TODO
    theme2.theme.transitions = null;
    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme2)).toMatch(
      `top ${defaultTheme.orbit.durationSlow} ease-in-out,box-shadow ${defaultTheme.orbit.durationSlow} ease-in-out`,
    );
  });

  it("returns null when transitions is set to false", () => {
    const theme2 = {
      theme: {
        ...defaultTheme,
        rtl: false,
        transitions: false,
      },
    };
    expect(transition(["top", "box-shadow"], "slow", "ease-in-out")(theme2)).toBeNull();
  });
});
