// @flow
import tooltipPadding from "../tooltipPadding";
import defaultTheme from "../../../defaultTheme";

const dimensions = {
  windowHeight: 789,
  windowWidth: 743,
  tooltipHeight: 32,
  tooltipWidth: 132,
  containerHeight: 24,
  containerWidth: 24,
  containerLeft: 28,
  containerTop: 150,
};

const params = contentHeight => ({ ...dimensions, contentHeight, theme: defaultTheme });

describe("tooltipPadding", () => {
  it("one line", () => {
    expect(tooltipPadding(params(10))).toEqual(
      `${defaultTheme.orbit.spaceXSmall} ${defaultTheme.orbit.spaceSmall}`,
    );
  });
  it("more than one line", () => {
    expect(tooltipPadding(params(50))).toEqual(defaultTheme.orbit.spaceSmall);
  });
});
