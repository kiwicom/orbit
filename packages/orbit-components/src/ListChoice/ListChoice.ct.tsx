import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ListChoiceStory from "./ListChoice.ct-story";

test.describe("visual ListChoice", () => {
  test("ListChoice", async ({ mount }) => {
    const component = await mount(<ListChoiceStory />);

    await expect(component).toHaveScreenshot();
  });
});
