// @flow
import React from "react";
import { screen, render } from "@testing-library/react";

import theme from "../../defaultTheme";
import Inline from "..";

const tokens = {
  none: "",
  XXXSmall: theme.orbit.spaceXXXSmall,
  XXSmall: theme.orbit.spaceXXSmall,
  XSmall: theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  XLarge: theme.orbit.spaceXLarge,
  XXLarge: theme.orbit.spaceXXLarge,
  XXXLarge: theme.orbit.spaceXXXLarge,
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
    const dataTest = "test";

    render(
      <Inline align="center" justify="start" dataTest={dataTest}>
        <Elements />
      </Inline>,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const container = screen.getByTestId(dataTest);
    expect(container).toHaveStyle({ alignItems: "center" });
    expect(container).toHaveStyle({ justifyContent: "flex-start" });
  });

  it.each(Object.entries(tokens))(
    'should have expected spacing for token "%s"',
    (token, spacing) => {
      render(
        <Inline align="start" justify="center" spacing={token}>
          <div data-test={token}>kek</div>
          <div>bur</div>
        </Inline>,
      );

      expect(screen.getByTestId(token)).toHaveStyle({ marginLeft: spacing });
    },
  );
});
