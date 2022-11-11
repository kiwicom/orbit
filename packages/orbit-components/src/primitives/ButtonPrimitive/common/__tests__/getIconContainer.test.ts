import getIconContainer from "../getIconContainer";
import theme from "../../../../defaultTheme";
import { SIZE_OPTIONS } from "../consts";

const iconForeground = {
  foreground: null,
  foregroundHover: null,
  foregroundActive: null,
};

describe("ButtonPrimitive: getIconContainer function", () => {
  it("should match when only icon", () => {
    expect(getIconContainer({ iconLeft: true, theme, iconForeground })).toMatchSnapshot();
  });
  it("should match snapshot", () => {
    Object.keys(SIZE_OPTIONS).forEach(key => {
      expect(
        getIconContainer({
          size: SIZE_OPTIONS[key],
          children: "Lorem ipsum",
          theme,
          iconForeground,
        }),
      ).toMatchSnapshot();
    });
  });
});
