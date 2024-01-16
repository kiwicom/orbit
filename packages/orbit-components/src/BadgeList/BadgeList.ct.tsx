import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import BadgeList from "./BadgeList.ct-story";

test.describe("visual BadgeList", () => {
  test("BadgeList", async ({ mount }) => {
    const component = await mount(<BadgeList />);

    await expect(component).toHaveScreenshot();
  });
});
