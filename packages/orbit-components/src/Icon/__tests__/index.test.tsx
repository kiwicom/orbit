import * as React from "react";

import { render, screen } from "../../test-utils";
import Accommodation from "../../icons/Accommodation";

describe("Icon", () => {
  it("should have expected DOM output", () => {
    render(<Accommodation dataTest="test" ariaHidden />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
    const icon = screen.getByTestId("test");
    expect(icon.tagName.toLowerCase()).toBe("svg");
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });

  it("should support passing custom color", () => {
    render(<Accommodation customColor="#FF0000" ariaLabel="Accommodation" />);
    expect(screen.getByLabelText("Accommodation")).toHaveStyle({ color: "#FF0000" });
  });
});
