import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CallOutBannerStory from "./CallOutBanner.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual CallOutBanner", () => {
  test("default", async ({ mount, page }) => {
    const component = await mount(<CallOutBannerStory />);
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount, page }) => {
    const component = await mount(
      <RenderInRtl>
        <CallOutBannerStory />
      </RenderInRtl>,
    );
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
