import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import DrawerStory from "./Drawer.ct-story";

test.describe("visual Drawer", () => {
  test("Drawer", async ({ mount }) => {
    const component = await mount(<DrawerStory />);

    await expect(component).toHaveScreenshot();
  });
});
