import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ServiceLogoStory from "./ServiceLogo.ct-story";

test.describe("visual ServiceLogo", () => {
  test("default", async ({ mount, page }) => {
    const component = await mount(<ServiceLogoStory />);
    await page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
