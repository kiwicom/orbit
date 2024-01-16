import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import BaggageStepper from ".";

test.describe("visual BaggageStepper", () => {
  test("BaggageStepper default", async ({ mount }) => {
    const component = await mount(
      <BaggageStepper titleIncrement="Add stuff" titleDecrement="Remove stuff" />,
    );

    await expect(component).toHaveScreenshot();
  });
});
