import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import HorizontalScrollStory from "./HorizontalScroll.ct-story";

test.describe("visual HorizontalScroll", () => {
  test("HorizontalScroll", async ({ mount }) => {
    const component = await mount(<HorizontalScrollStory />);

    await expect(component).toHaveScreenshot();
  });
});
