import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import HeadingStory from "./Heading.ct-story";

test.describe("visual Heading", () => {
  test("Heading", async ({ mount }) => {
    const component = await mount(<HeadingStory />);

    await expect(component).toHaveScreenshot();
  });
});
