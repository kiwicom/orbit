// @flow
import * as React from "react";
import { mount } from "enzyme";

import Airplane from "../../icons/Airplane";
import { DEVICES, QUERIES } from "../../utils/mediaQuery/consts";
import { getBreakpointWidth } from "../../utils/mediaQuery/index";
import theme from "../../defaultTheme";

import Hide from "..";

describe("Hide", () => {
  const on = ["smallMobile", "largeMobile", "largeDesktop"];
  const block = false;
  const component = mount(
    <Hide on={on} block={block}>
      <Airplane />
    </Hide>,
  );

  it("should have passed props", () => {
    expect(component.prop("on")).toBe(on);
    expect(component.prop("block")).toBe(block);
  });
  it("should contain children", () => {
    expect(component.find("Airplane").exists()).toBe(true);
  });
  it("should contain styles", () => {
    DEVICES.map(
      viewport =>
        viewport !== DEVICES[0] &&
        (on.indexOf(viewport) !== -1
          ? expect(component).toHaveStyleRule("display", "none", {
              media: getBreakpointWidth(viewport, theme),
            })
          : expect(component).toHaveStyleRule("display", "inline-block", {
              media: getBreakpointWidth(viewport, theme),
            })),
    );
    expect(component).toHaveStyleRule("display", "none");
  });
  it("should be displayed block", () => {
    component.setProps({ block: true, on: on[1] });
    expect(component).toHaveStyleRule("display", "block", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
  });
  it("should be none", () => {
    component.setProps({ block: true, on: on[1] });
    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });
  });
});
