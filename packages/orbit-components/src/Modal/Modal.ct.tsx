import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { ModalVisualDefaultStory, ModalVisualMobileHeader } from "./Modal.ct-story";
import { SIZES } from "./consts";

test.describe("visual Modal", () => {
  Object.values(SIZES).forEach(size => {
    test(`ModalVisualDefaultStory ${size}`, async ({ mount }) => {
      const component = await mount(<ModalVisualDefaultStory />);

      await expect(component).toHaveScreenshot();
    });
  });

  test("ModalVisualMobileHeader", async ({ mount }) => {
    const component = await mount(<ModalVisualMobileHeader />);

    await expect(component).toHaveScreenshot();
  });
});
