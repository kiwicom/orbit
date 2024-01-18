import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ButtonGroupStory from "./ButtonGroup.ct-story";

test.describe("visual ButtonGroup", () => {
  test("ButtonGroup", async ({ mount }) => {
    const component = await mount(<ButtonGroupStory />);

    await expect(component).toHaveScreenshot();
  });
});
