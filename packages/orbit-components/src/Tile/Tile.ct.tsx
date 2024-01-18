import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import TileStory from "./Tile.ct-story";

test.describe("visual Tile", () => {
  test("Tile", async ({ mount }) => {
    const component = await mount(<TileStory />);

    await expect(component).toHaveScreenshot();
  });
});
