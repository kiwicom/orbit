import getSizeToken from "../getSizeToken";
import { SIZE_OPTIONS } from "../consts";
import theme from "../../../../defaultTheme";

describe("ButtonPrimitive: getSizeToken function", () => {
  it("small size, should match snapshot", () => {
    const size = SIZE_OPTIONS.SMALL;
    expect(getSizeToken(size, theme)).toMatchSnapshot();
  });
  it("normal size, should match snapshot", () => {
    const size = SIZE_OPTIONS.NORMAL;
    expect(getSizeToken(size, theme)).toMatchSnapshot();
  });
  it("large size, should match snapshot", () => {
    const size = SIZE_OPTIONS.LARGE;
    expect(getSizeToken(size, theme)).toMatchSnapshot();
  });
});
