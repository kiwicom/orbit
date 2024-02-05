import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import AirportIllustration from "./AirportIllustration.ct-story";

test.describe("visual AirportIllustration", () => {
  test(`AirportIllustration`, async ({ mount }) => {
    const component = await mount(<AirportIllustration />);

    await expect(component).toHaveScreenshot();
  });
});
