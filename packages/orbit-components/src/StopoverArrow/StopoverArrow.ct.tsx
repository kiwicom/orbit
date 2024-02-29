import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import StopoverArrowStory from "./StopoverArrow.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual StopoverArrow", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<StopoverArrowStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <StopoverArrowStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
