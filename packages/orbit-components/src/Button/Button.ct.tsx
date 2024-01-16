import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ButtonStory from "./Button.ct-story";

test.describe("visual Button", () => {
  test("Button default", async ({ mount }) => {
    const component = await mount(<ButtonStory />);

    await expect(component).toHaveScreenshot();
  });
});
