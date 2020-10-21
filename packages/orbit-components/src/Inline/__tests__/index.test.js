// @flow
import React from "react";
import { screen, render } from "@testing-library/react";

import theme from "../../defaultTheme";
import Inline from "..";

const dataTest = "test";

const tokens = {
  none: "",
  "xx-small": theme.orbit.spaceXXSmall,
  "x-small": theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  "x-large": theme.orbit.spaceXLarge,
  "xx-large": theme.orbit.spaceXLarge,
  "xxx-large": theme.orbit.spaceXLarge,
};

const Elements = () => (
  <>
    <div data-test="child-0">kek</div>
    <div>bur</div>
    <div>cheburek</div>
    <div>blin</div>
  </>
);

describe("#Inline", () => {
  it("should have props", () => {
    render(
      <Inline align="center" justify="start" dataTest={dataTest}>
        <Elements />
      </Inline>,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const styles = getComputedStyle(screen.getByTestId(dataTest));
    expect(styles).toHaveProperty("justify-content", "center");
    expect(styles).toHaveProperty("align-items", "start");
  });

  it("should have spacings", () => {
    const spacings = Object.keys(tokens).map(token => (
      <Inline key={token} align="start" justify="center" spacing={token} dataTest={dataTest}>
        <div data-test={token} style={{ marginLeft: tokens[token] }}>
          kek
        </div>
        <div>bur</div>
      </Inline>
    ));

    expect(getComputedStyle(render(spacings[0]).getByTestId("none"))).toHaveProperty(
      "margin-left",
      "",
    );

    expect(getComputedStyle(render(spacings[1]).getByTestId("xx-small"))).toHaveProperty(
      "margin-left",
      tokens["xx-small"],
    );

    expect(getComputedStyle(render(spacings[2]).getByTestId("x-small"))).toHaveProperty(
      "margin-left",
      tokens["x-small"],
    );

    expect(getComputedStyle(render(spacings[3]).getByTestId("small"))).toHaveProperty(
      "margin-left",
      tokens.small,
    );

    expect(getComputedStyle(render(spacings[4]).getByTestId("medium"))).toHaveProperty(
      "margin-left",
      tokens.medium,
    );

    expect(getComputedStyle(render(spacings[5]).getByTestId("large"))).toHaveProperty(
      "margin-left",
      tokens.large,
    );

    expect(getComputedStyle(render(spacings[6]).getByTestId("x-large"))).toHaveProperty(
      "margin-left",
      tokens["x-large"],
    );

    expect(getComputedStyle(render(spacings[7]).getByTestId("xx-large"))).toHaveProperty(
      "margin-left",
      tokens["xx-large"],
    );

    expect(getComputedStyle(render(spacings[8]).getByTestId("xxx-large"))).toHaveProperty(
      "margin-left",
      tokens["xxx-large"],
    );
  });
});
