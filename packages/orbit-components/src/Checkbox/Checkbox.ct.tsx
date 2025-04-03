import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { CheckboxStory } from "./Checkbox.ct-story";

test.describe("visual Checkbox", () => {
  test("Checkbox", async ({ mount }) => {
    const component = await mount(<CheckboxStory />);
    await expect(component).toHaveScreenshot();
  });
});
