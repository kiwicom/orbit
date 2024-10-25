import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { NavigationBarDefault } from "./NavigationBar.ct-story";

test.describe("visual NavigationBar", () => {
  test("NavigationBar default", async ({ mount }) => {
    const component = await mount(<NavigationBarDefault />);

    await expect(component).toHaveScreenshot();
  });

  test("NavigationBar with bottomStyle border", async ({ mount }) => {
    const component = await mount(<NavigationBarDefault bottomStyle="border" />);

    await expect(component).toHaveScreenshot();
  });
});
