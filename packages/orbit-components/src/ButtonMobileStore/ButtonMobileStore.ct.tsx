import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ButtonMobileStoreStory from "./ButtonMobileStore.ct-story";

test.describe("visual ButtonMobileStoreStory", () => {
  test("ButtonMobileStoreStory", async ({ mount, page }) => {
    const component = await mount(<ButtonMobileStoreStory />);
    page.waitForRequest(/images.kiwi.com/);

    await expect(component).toHaveScreenshot();
  });
});
