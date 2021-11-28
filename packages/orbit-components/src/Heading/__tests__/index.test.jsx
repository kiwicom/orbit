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

  it("should ignore unsupported props", () => {
    render(
      // className has to be undefined to reproduce the error
      // $FlowExpectedError
      <Heading as="h1" type="display" className={undefined}>
        My lovely heading
      </Heading>,
    );
    expect(screen.getByRole("heading", { name: "My lovely heading" }));
  });
});

describe("Heading with every media query", () => {
  it("should have desktop styles", () => {
    const dataTest = `test`;

    render(
      <Heading
        dataTest={dataTest}
        type={TYPE_OPTIONS.TITLE5}
        mediumMobile={{ type: TYPE_OPTIONS.TITLE4 }}
        largeMobile={{ type: TYPE_OPTIONS.TITLE3 }}
        tablet={{ type: TYPE_OPTIONS.TITLE2 }}
        desktop={{ type: TYPE_OPTIONS.TITLE1 }}
        largeDesktop={{ type: TYPE_OPTIONS.DISPLAY }}
      >
        Heading
      </Heading>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle4,
      { media: getBreakpointWidth("mediumMobile", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle3,
      { media: getBreakpointWidth("largeMobile", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle2,
      { media: getBreakpointWidth("tablet", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingTitle1,
      { media: getBreakpointWidth("desktop", theme) },
    );

    expect(screen.getByTestId(dataTest)).toHaveStyleRule(
      "font-size",
      theme.orbit.fontSizeHeadingDisplay,
      { media: getBreakpointWidth("largeDesktop", theme) },
    );
  });
});
