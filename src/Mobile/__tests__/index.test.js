// @flow strict

import * as React from "react";

import Mobile from "..";

import { mount } from "enzyme";

import { getBreakpointWidth } from "../../utils/mediaQuery/index";
import { QUERIES } from "../../utils/mediaQuery/consts";
import theme from "../../defaultTheme";

describe("Mobile", () => {
  const component = mount(<Mobile>kek</Mobile>);

  it("should be visible on smallMobile, largeMobile and tablet", () => {
    expect(component).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });

    expect(component).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
  });

  it("should be hidden on desktop and largeDesktop", () => {
    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });

    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
  });
});
