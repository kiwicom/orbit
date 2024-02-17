import React from "react";

import { render, screen } from "../../test-utils";
import Coupon from "..";

describe("Coupon", () => {
  it("should have expected DOM output", () => {
    render(
      <Coupon dataTest="test" id="couponId">
        code
      </Coupon>,
    );
    const coupon = screen.getByTestId("test");
    expect(coupon).toBeInTheDocument();
    expect(coupon).toHaveAttribute("id", "couponId");
    expect(screen.getByText("code")).toBeInTheDocument();
  });
});
