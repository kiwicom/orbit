import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CallOutBannerStory from "./CallOutBanner.ct-story";

test.describe("visual CallOutBanner", () => {
  test("CallOutBannerStory", async ({ mount }) => {
    const component = await mount(<CallOutBannerStory />);

    await expect(component).toHaveScreenshot();
  });
});
