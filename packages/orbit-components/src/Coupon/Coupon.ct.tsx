import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CouponStory from "./Coupon.ct-story";

test.describe("visual Coupon", () => {
  test("Coupon", async ({ mount }) => {
    const component = await mount(<CouponStory />);

    await expect(component).toHaveScreenshot();
  });
});
