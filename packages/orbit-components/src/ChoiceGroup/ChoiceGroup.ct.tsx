import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ChoiceGroupStory from "./ChoiceGroup.ct-story";

test.describe("visual ChoiceGroup", () => {
  test("ChoiceGroup", async ({ mount }) => {
    const component = await mount(<ChoiceGroupStory />);

    await expect(component).toHaveScreenshot();
  });
});
