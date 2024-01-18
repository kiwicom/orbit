import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import TileGroupStory from "./TileGroup.ct-story";

test.describe("visual TileGroup", () => {
  test("TileGroup", async ({ mount }) => {
    const component = await mount(<TileGroupStory />);

    await expect(component).toHaveScreenshot();
  });
});
