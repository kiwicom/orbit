import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CollapseStory from "./Collapse.ct-story";

test.describe("visual Collapse", () => {
  test("Collapse", async ({ mount }) => {
    const component = await mount(<CollapseStory />);

    await expect(component).toHaveScreenshot();
  });
});
