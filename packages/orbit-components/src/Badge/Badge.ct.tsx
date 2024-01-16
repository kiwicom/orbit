import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import Badge from "./Badge.ct-story";

test.describe("visual Badge", () => {
  test("Badge", async ({ mount }) => {
    const component = await mount(<Badge />);

    await expect(component).toHaveScreenshot();
  });
});
