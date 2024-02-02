import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import IconStory from "./Icon.ct-story";

test.describe("visual Icon", () => {
  test("Icon", async ({ mount }) => {
    const component = await mount(<IconStory />);

    await expect(component).toHaveScreenshot();
  });
});
