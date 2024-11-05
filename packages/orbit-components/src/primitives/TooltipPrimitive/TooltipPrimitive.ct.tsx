import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  TooltipPrimitiveVisualDefaultStory,
  TooltipPrimitiveVariousPlacementsStory,
} from "./TooltipPrimitive.ct-story";

test.describe("Tooltip primitive visual tests", () => {
  test(`screenshot for default - various placements`, async ({ mount, page }) => {
    const viewportSize = await page.viewportSize();

    if (viewportSize) {
      // Set a new height, keeping the original width
      await page.setViewportSize({ width: viewportSize.width, height: 1300 });
    }

    const component = await mount(<TooltipPrimitiveVariousPlacementsStory />);
    await expect(component).toHaveScreenshot();
  });

  test(`screenshot for help state`, async ({ mount }) => {
    const component = await mount(<TooltipPrimitiveVisualDefaultStory help />);
    await expect(component).toHaveScreenshot();
  });

  test(`screenshot for error state`, async ({ mount }) => {
    const component = await mount(<TooltipPrimitiveVisualDefaultStory error />);
    await expect(component).toHaveScreenshot();
  });

  test(`screenshot for small size`, async ({ mount }) => {
    const component = await mount(<TooltipPrimitiveVisualDefaultStory size="small" />);
    await expect(component).toHaveScreenshot();
  });

  test(`screenshot for no underline text`, async ({ mount }) => {
    const component = await mount(<TooltipPrimitiveVisualDefaultStory removeUnderlinedText />);
    await expect(component).toHaveScreenshot();
  });
});
