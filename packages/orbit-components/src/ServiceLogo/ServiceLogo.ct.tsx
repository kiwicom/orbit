import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ServiceLogoStory from "./ServiceLogo.ct-story";

test.describe("visual ServiceLogo", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<ServiceLogoStory />);

    await expect(component).toHaveScreenshot();
  });
});
