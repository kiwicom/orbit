import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import NotificationBadgeStory from "./NotificationBadge.ct-story";

test.describe("visual NotificationBadge", () => {
  test("NotificationBadge", async ({ mount }) => {
    const component = await mount(<NotificationBadgeStory />);

    await expect(component).toHaveScreenshot();
  });
});
