// @flow
import * as React from "react";
import { mount } from "enzyme";

import Hide from "../";
import { breakpoints } from "../../utils/mediaQuery/index";
import Airplane from "../../icons/Airplane";
import { DEVICES } from "../../utils/mediaQuery/consts";

describe("Hide", () => {
  const on = ["smallMobile", "largeMobile", "largeDesktop"];
  const component = mount(
    <Hide on={on}>
      <Airplane />
    </Hide>,
  );

  it("should have passed props", () => {
    expect(component.prop("on")).toBe(on);
  });
  it("should contain children", () => {
    expect(component.find("Airplane").exists()).toBe(true);
  });
  it("should contain styles", () => {
    Object.keys(breakpoints).map(
      viewport =>
        viewport !== DEVICES.SMALLMOBILE &&
        (on.indexOf(viewport) !== -1
          ? expect(component).toHaveStyleRule("display", "none", {
              media: breakpoints[viewport],
            })
          : expect(component).toHaveStyleRule("display", "inline-block", {
              media: breakpoints[viewport],
            })),
    );
    expect(component).toHaveStyleRule("display", "none");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
