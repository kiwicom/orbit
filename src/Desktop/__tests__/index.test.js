// @flow strict

import * as React from "react";

import Desktop from "..";

import { mount } from "enzyme";

import { getBreakpointWidth } from "../../utils/mediaQuery/index";
import { QUERIES } from "../../utils/mediaQuery/consts";
import theme from "../../defaultTheme";

describe("Desktop", () => {
  const component = mount(<Desktop>kek</Desktop>);

  it("should be visible on desktop and largeDesktop", () => {
    expect(component).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });

    expect(component).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
  });

  it("should be hidden on mediumMobile, largeMobile, tablet", () => {
    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
    });

    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });

    expect(component).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
  });
});
