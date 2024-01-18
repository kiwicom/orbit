import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ButtonMobileStoreStory from "./ButtonMobileStore.ct-story";

test.describe("visual ButtonMobileStoreStory", () => {
  test("ButtonMobileStoreStory", async ({ mount }) => {
    const component = await mount(<ButtonMobileStoreStory />);

    await expect(component).toHaveScreenshot();
  });
});
