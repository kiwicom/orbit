import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import DrawerStory from "./Drawer.ct-story";

test.describe("visual Drawer", () => {
  test("Drawer", async ({ mount }) => {
    const component = await mount(<DrawerStory />);

    await component.locator("[data-test=show-drawer]").click();

    await expect(component).toHaveScreenshot();
  });
});
