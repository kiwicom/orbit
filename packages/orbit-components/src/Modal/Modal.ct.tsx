import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  ModalVisualDefaultStory,
  ModalVisualMobileHeader,
  ModalVisualNoHeaderNoFooter,
} from "./Modal.ct-story";
import { SIZES } from "./consts";

test.describe("visual Modal", () => {
  Object.values(SIZES).forEach(size => {
    test(`ModalVisualDefaultStory ${size}`, async ({ mount }) => {
      const component = await mount(<ModalVisualDefaultStory size={size} />);

      await expect(component).toHaveScreenshot();
    });
  });

  test(`ModalVisualDefaultStory isMobileFullPage`, async ({ mount }) => {
    const component = await mount(<ModalVisualDefaultStory isMobileFullPage />);

    await expect(component).toHaveScreenshot();
  });

  test("ModalVisualMobileHeader", async ({ mount }) => {
    const component = await mount(<ModalVisualMobileHeader />);

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
});
