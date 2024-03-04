import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import InlineStory from "./Inline.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Inline", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<InlineStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <InlineStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
