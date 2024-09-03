import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { CheckboxStory, CheckboxWithTooltipStory } from "./Checkbox.ct-story";

const skipIfViewportSmallerThan = (viewport, width, message) => {
  test.skip(viewport !== null && viewport.width < width, message);
};

const skipIfViewportLargerThanOrEqual = (viewport, width, message) => {
  test.skip(viewport !== null && viewport.width >= width, message);
};

test.describe("visual Checkbox", () => {
  const { breakpointLargeMobile } = defaultTokens;

  test("Checkbox", async ({ mount }) => {
    const component = await mount(<CheckboxStory />);
    await expect(component).toHaveScreenshot();
  });

  test("Checkbox - checked with tooltip on desktop", async ({ mount, viewport }) => {
    /**
     * This command skips the test if the viewport width is smaller than largeMobile.
     * Condition inside is based on the viewport width,
     * which is specified for each of the device in playwright-ct.config.ts file.
     * Using that we can distinguish mobileSmall, mobileMedium devices and larger devices.
     */
    skipIfViewportSmallerThan(
      viewport,
      breakpointLargeMobile,
      "This feature is largeMobile, tablet and desktop only",
    );

    const component = await mount(<CheckboxWithTooltipStory />);

    await component.getByRole("button").hover();
    await expect(component).toHaveScreenshot();
  });

  test("Checkbox - checked with tooltip on mobile", async ({ mount, viewport, page }) => {
    /**
     * This command skips the test if the viewport width is bigger than largeMobile.
     * Condition inside is based on the viewport width,
     * which is specified for each of the device in playwright-ct.config.ts file.
     * Using that we can distinguish mobileSmall, mobileMedium devices and larger devices.
     */
    skipIfViewportLargerThanOrEqual(
      viewport,
      breakpointLargeMobile,
      "This feature is small and medium mobile only",
    );

    const component = await mount(<CheckboxWithTooltipStory />);
    const tooltip = await page.getByRole("tooltip");

    await component.getByRole("button").click();

    await expect(tooltip).toBeVisible();
    await expect(component).toHaveScreenshot();
  });
});
