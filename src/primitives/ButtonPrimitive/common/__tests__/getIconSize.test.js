// @flow
import getIconSize from "../getIconSize";
import { SIZE_OPTIONS } from "../consts";

describe("ButtonPrimitive: getIconSize function", () => {
  it("should match snapshot", () => {
    expect(getIconSize(SIZE_OPTIONS.SMALL)).toMatchSnapshot();
    expect(getIconSize(SIZE_OPTIONS.LARGE)).toMatchSnapshot();
    expect(getIconSize(SIZE_OPTIONS.NORMAL)).toMatchSnapshot();
  });
});
