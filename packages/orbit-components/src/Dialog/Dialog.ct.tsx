import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import DialogStory from "./Dialog.ct-story";

test.describe("visual Dialog", () => {
  test("Dialog", async ({ mount }) => {
    const component = await mount(<DialogStory />);

    await expect(component).toHaveScreenshot();
  });
});
