import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ServiceLogoStory from "./ServiceLogo.ct-story";
import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

const GRAYSCALE_OPTIONS_SIZE = 2;

test.describe("visual ServiceLogo", () => {
  test("default", async ({ mount, page }) => {
    const component = await mount(<ServiceLogoStory />);
    await page.waitForRequest(/images.kiwi.com/);

    const selector = `img:nth-of-type(${
      Object.values(NAME_OPTIONS).length +
      Object.values(SIZE_OPTIONS).length +
      GRAYSCALE_OPTIONS_SIZE
    })`;

    await page.waitForSelector(selector);

    await expect(component).toHaveScreenshot({
      threshold: 0.3,
      maxDiffPixelRatio: 0.02,
      maxDiffPixels: undefined,
    });
  });
});
