// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Accommodation from "../../icons/Accommodation";
import { ICON_SIZES, ICON_COLORS } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("Icon", () => {
  it("should have expected DOM output", () => {
    render(
      <Accommodation
        size={ICON_SIZES.LARGE}
        color={ICON_COLORS.PRIMARY}
        dataTest="test"
        ariaHidden
        ariaLabel="Accommodation"
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const icon = screen.getByLabelText("Accommodation");
    expect(icon.tagName.toLowerCase()).toBe("svg");
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveStyle({ color: defaultTheme.orbit.colorIconPrimary });
  });

  it("should support passing custom color", () => {
    render(<Accommodation customColor="#FF0000" ariaLabel="Accommodation" />);
    expect(screen.getByLabelText("Accommodation")).toHaveStyle({ color: "#FF0000" });
  });
});
