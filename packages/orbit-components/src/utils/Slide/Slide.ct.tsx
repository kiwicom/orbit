import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { SlideStory } from "./Slide.ct-story";

test.describe("visual Slide", () => {
  test("collapsed", async ({ mount }) => {
    const component = await mount(<SlideStory maxHeight={null} />);

    await expect(component).toHaveScreenshot();
  });

  test("expanded", async ({ mount }) => {
    const component = await mount(<SlideStory maxHeight={null} expanded />);

    await expect(component).toHaveScreenshot();
  });
});
