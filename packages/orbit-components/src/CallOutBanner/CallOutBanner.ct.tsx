import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CallOutBannerStory from "./CallOutBanner.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual CallOutBanner", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<CallOutBannerStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <CallOutBannerStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
