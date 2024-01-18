import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import CardStory from "./Card.ct-story";

test.describe("visual Card", () => {
  test("Card", async ({ mount }) => {
    const component = await mount(<CardStory />);

    await expect(component).toHaveScreenshot();
  });
});
