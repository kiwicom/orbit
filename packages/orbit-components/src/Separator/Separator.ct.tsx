import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SeparatorStory from "./Separator.ct-story";

test.describe("visual Separator", () => {
  test("Separator", async ({ mount }) => {
    const component = await mount(<SeparatorStory />);

    await expect(component).toHaveScreenshot();
  });
});
