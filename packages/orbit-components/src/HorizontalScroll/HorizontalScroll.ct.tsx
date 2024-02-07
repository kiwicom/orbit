import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import HorizontalScrollStory from "./HorizontalScroll.ct-story";

test.describe("visual HorizontalScroll", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<HorizontalScrollStory />);

    await expect(component).toHaveScreenshot();
  });

  test("scroll", async ({ mount }) => {
    const component = await mount(<HorizontalScrollStory />);
    const elements = await component.getByText("Kiwi").elementHandles();
    await Promise.all(elements.map(element => element.scrollIntoViewIfNeeded()));

    await expect(component).toHaveScreenshot();
  });
});
