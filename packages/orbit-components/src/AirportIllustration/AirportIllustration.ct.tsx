import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import AirportIllustration from "./AirportIllustration.ct-story";

test.describe("visual AirportIllustration", () => {
  test(`AirportIllustration`, async ({ mount, page }) => {
    const component = await mount(<AirportIllustration />);
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
