import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { MobileDialogDefault, MobileDialogDisabled } from "./MobileDialogPrimitive.ct-story";

test.describe("visual", () => {
  test("screenshot", async ({ mount }) => {
    const component = await mount(<MobileDialogDefault />);
    await component.getByTestId("button").click();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot disabled", async ({ mount }) => {
    const component = await mount(<MobileDialogDisabled />);

    await expect(component).toHaveScreenshot();
  });
});
