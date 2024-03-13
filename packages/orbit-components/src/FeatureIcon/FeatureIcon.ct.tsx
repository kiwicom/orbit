import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import FeatureIconStory from "./FeatureIcon.ct-story";

test.describe("visual FeatureIcon", () => {
  test("FeatureIcon", async ({ mount, page }) => {
    const component = await mount(<FeatureIconStory />);
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
