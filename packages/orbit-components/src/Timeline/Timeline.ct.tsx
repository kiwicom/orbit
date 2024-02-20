import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import TimelineStory from "./Timeline.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Timeline", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<TimelineStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <TimelineStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
