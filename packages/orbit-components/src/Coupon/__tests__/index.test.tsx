import React from "react";

import { render, screen } from "../../test-utils";
import Coupon from "..";

describe("Coupon", () => {
  it("should have expected DOM output", () => {
    render(<Coupon dataTest="test">code</Coupon>);
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("code")).toBeInTheDocument();
  });
});
