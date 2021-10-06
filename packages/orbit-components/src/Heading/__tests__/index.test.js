// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import theme from "../../defaultTheme";
import Heading from "..";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "../consts";
import { getBreakpointWidth } from "../../utils/mediaQuery";

describe("Heading", () => {
  it("should have expected DOM output", () => {
    render(
      <Heading
        as={ELEMENT_OPTIONS.H2}
        type={TYPE_OPTIONS.TITLE1}
        inverted={false}
        dataTest="test"
        id="id"
      >
        My lovely heading
      </Heading>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const heading = screen.getByRole("heading", { name: "My lovely heading" });
    expect(heading.tagName.toLowerCase()).toBe("h2");
    expect(heading).toHaveAttribute("id", "id");
  });
});

describe("Heading with every media query", () => {
  it("should have desktop styles", () => {
    const dataTest = `test`;

    render(
      <Heading
        dataTest={dataTest}
        mediumMobile={{ type: TYPE_OPTIONS.TITLE1 }}
        largeMobile={{ type: TYPE_OPTIONS.TITLE4 }}
        tablet={{ type: TYPE_OPTIONS.TITLE2 }}
        desktop={{ type: TYPE_OPTIONS.TITLE3 }}
        largeDesktop={{ type: TYPE_OPTIONS.DISPLAY }}
      >
        Heading
      </Heading>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle1,
      { media: getBreakpointWidth("mediumMobile", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle4,
      { media: getBreakpointWidth("largeMobile", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle2,
      { media: getBreakpointWidth("tablet", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle3,
      { media: getBreakpointWidth("desktop", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingDisplay,
      { media: getBreakpointWidth("largeDesktop", theme) },
    );
  });
});
