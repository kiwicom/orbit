// @flow strict

import * as React from "react";
import { render, screen } from "@testing-library/react";

import { getBreakpointWidth } from "../../utils/mediaQuery/index";
import { QUERIES } from "../../utils/mediaQuery/consts";
import theme from "../../defaultTheme";
import Mobile from "..";

describe("Mobile", () => {
  it("should be visible on smallMobile, largeMobile and tablet", () => {
    render(<Mobile>kek</Mobile>);

    expect(screen.getByText("kek")).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });

    expect(screen.getByText("kek")).toHaveStyleRule("display", "inline-block", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });

    expect(screen.getByText("kek")).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });

    expect(screen.getByText("kek")).toHaveStyleRule("display", "none", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
  });
});
