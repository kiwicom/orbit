import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import TruncateStory from "./Truncate.ct-story";

test.describe("visual Truncate", () => {
  test("Truncate", async ({ mount }) => {
    const component = await mount(<TruncateStory />);

    await expect(component).toHaveScreenshot();
  });
});
