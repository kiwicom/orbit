import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SwitchStory from "./Switch.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Switch", () => {
  test("Switch", async ({ mount }) => {
    const component = await mount(<SwitchStory />);

    await expect(component).toHaveScreenshot();
  });

  test("Switch RTL", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SwitchStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
