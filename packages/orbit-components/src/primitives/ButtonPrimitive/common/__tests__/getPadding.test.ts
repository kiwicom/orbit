import getPadding from "../getPadding";
import { SIZE_OPTIONS } from "../consts";
import theme from "../../../../defaultTheme";

describe("ButtonPrimitive: getPadding function", () => {
  it("with both icons, should match snapshot", () => {
    const onlyIcon = false;
    const iconRight = true;
    const iconLeft = true;
    const size = SIZE_OPTIONS.SMALL;
    expect(getPadding(onlyIcon, iconRight, iconLeft, size, theme)).toMatchSnapshot();
  });
  it("with left icon, should match snapshot", () => {
    const onlyIcon = false;
    const iconRight = false;
    const iconLeft = true;
    const size = SIZE_OPTIONS.LARGE;
    expect(getPadding(onlyIcon, iconRight, iconLeft, size, theme)).toMatchSnapshot();
  });
  it("with right icon, should match snapshot", () => {
    const onlyIcon = false;
    const iconRight = true;
    const iconLeft = false;
    const size = SIZE_OPTIONS.NORMAL;
    expect(getPadding(onlyIcon, iconRight, iconLeft, size, theme)).toMatchSnapshot();
  });
  it("with only icon, should match snapshot", () => {
    const onlyIcon = true;
    const iconRight = false;
    const iconLeft = false;
    const size = SIZE_OPTIONS.NORMAL;
    expect(getPadding(onlyIcon, iconRight, iconLeft, size, theme)).toMatchSnapshot();
  });
});
