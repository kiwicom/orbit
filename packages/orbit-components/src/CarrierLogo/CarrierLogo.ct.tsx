import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CarrierLogoStory from "./CarrierLogo.ct-story";

test.describe("visual CarrierLogo", () => {
  test("CarrierLogo", async ({ mount, page }) => {
    const component = await mount(<CarrierLogoStory />);
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
