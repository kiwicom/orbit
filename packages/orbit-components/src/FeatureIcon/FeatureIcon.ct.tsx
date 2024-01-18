import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import FeatureIconStory from "./FeatureIcon.ct-story";

test.describe("visual FeatureIcon", () => {
  test("FeatureIcon", async ({ mount }) => {
    const component = await mount(<FeatureIconStory />);

    await expect(component).toHaveScreenshot();
  });
});
