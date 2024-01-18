import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SkeletonStory from "./Skeleton.ct-story";

test.describe("visual Skeleton", () => {
  test("Skeleton", async ({ mount }) => {
    const component = await mount(<SkeletonStory />);

    await expect(component).toHaveScreenshot();
  });
});
