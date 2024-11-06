import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { TooltipVisualDefaultStory } from "./Tooltip.ct-story";

const skipIfViewportSmallerThan = (viewport, width, message) => {
  test.skip(viewport !== null && viewport.width < width, message);
};

const skipIfViewportLargerThanOrEqual = (viewport, width, message) => {
  test.skip(viewport !== null && viewport.width >= width, message);
};

test.describe("Tooltip visual tests", () => {
  const { breakpointLargeMobile } = defaultTokens;

  test(`screenshot for default - desktop`, async ({ mount, viewport }) => {
    skipIfViewportSmallerThan(
      viewport,
      breakpointLargeMobile,
      "This feature is largeMobile, tablet and desktop only",
    );

    const component = await mount(<TooltipVisualDefaultStory />);

    await component.getByRole("button").hover();
    await expect(component).toHaveScreenshot();
  });

  test(`screenshot for default - mobile`, async ({ mount, viewport, page }) => {
    skipIfViewportLargerThanOrEqual(
      viewport,
      breakpointLargeMobile,
      "This feature is small and medium mobile only",
    );

    const component = await mount(<TooltipVisualDefaultStory />);

    const tooltip = await page.getByRole("tooltip");

    await component.getByRole("button").click();

    await expect(tooltip).toBeVisible();
    await expect(component).toHaveScreenshot();
  });
});
