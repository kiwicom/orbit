import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  ModalVisualDefaultStory,
  ModalVisualMobileHeader,
  ModalVisualNoHeaderNoFooter,
  ModalVisualHeaderOnly,
} from "./Modal.ct-story";
import { SIZES } from "./consts";

test.describe("visual Modal", () => {
  Object.values(SIZES).forEach(size => {
    test(`ModalVisualDefaultStory ${size}`, async ({ mount, page }) => {
      const component = await mount(<ModalVisualDefaultStory size={size} />);
      page.waitForResponse(/images.kiwi.com/);

      await expect(component).toHaveScreenshot();
    });
  });

  test(`ModalVisualDefaultStory isMobileFullPage`, async ({ mount, page }) => {
    const component = await mount(<ModalVisualDefaultStory isMobileFullPage />);
    page.waitForResponse(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualMobileHeader", async ({ mount, page }) => {
    const component = await mount(<ModalVisualMobileHeader />);
    page.waitForResponse(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualNoHeaderNoFooter", async ({ mount }) => {
    const component = await mount(<ModalVisualNoHeaderNoFooter />);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualNoHeaderNoFooter isMobileFullPage", async ({ mount }) => {
    const component = await mount(<ModalVisualNoHeaderNoFooter isMobileFullPage />);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualHeaderOnly", async ({ mount }) => {
    const component = await mount(<ModalVisualHeaderOnly />);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualHeaderOnly isMobileFullPage", async ({ mount }) => {
    const component = await mount(<ModalVisualHeaderOnly isMobileFullPage />);

    await expect(component).toHaveScreenshot();
  });
});
