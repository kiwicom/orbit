import getTransitionAnimation from "../getTransitionAnimation";
import theme from "../../../defaultTheme";
import POSITIONS from "../../consts";

/*
  It's very hard to match returned values from function, that returns deeply nested interpolation.
  Instead of some evaluation hack, snapshots are quiet easy for maintainability of this function.
 */

describe("getTransitionAnimation on the right", () => {
  const width = "320px";
  const position = POSITIONS.RIGHT;
  it("shown, should match snapshot", () => {
    expect(getTransitionAnimation({ width, shown: true, position, theme })).toMatchSnapshot();
  });
  it("not shown, should match snapshot", () => {
    expect(getTransitionAnimation({ width, shown: false, position, theme })).toMatchSnapshot();
  });
});

describe("getTransitionAnimation on the left", () => {
  const width = "320px";
  const position = POSITIONS.LEFT;
  it("shown, should match snapshot", () => {
    expect(getTransitionAnimation({ width, shown: true, position, theme })).toMatchSnapshot();
  });
  it("not shown, should match snapshot", () => {
    expect(getTransitionAnimation({ width, shown: false, position, theme })).toMatchSnapshot();
  });
});

describe("getTransitionAnimation on the right in RTL", () => {
  const width = "320px";
  const position = POSITIONS.RIGHT;
  it("shown, should match snapshot", () => {
    expect(
      getTransitionAnimation({ width, shown: true, position, theme: { ...theme, rtl: true } }),
    ).toMatchSnapshot();
  });
  it("not shown, should match snapshot", () => {
    expect(
      getTransitionAnimation({ width, shown: false, position, theme: { ...theme, rtl: true } }),
    ).toMatchSnapshot();
  });
});

describe("getTransitionAnimation on the left in RTL", () => {
  const width = "320px";
  const position = POSITIONS.LEFT;
  it("shown, should match snapshot", () => {
    expect(
      getTransitionAnimation({ width, shown: true, position, theme: { ...theme, rtl: true } }),
    ).toMatchSnapshot();
  });
  it("not shown, should match snapshot", () => {
    expect(
      getTransitionAnimation({ width, shown: false, position, theme: { ...theme, rtl: true } }),
    ).toMatchSnapshot();
  });
});
