import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ButtonLink from "./ButtonLink.ct-story";

test.describe("visual ButtonLink", () => {
  test("ButtonLink", async ({ mount }) => {
    const component = await mount(<ButtonLink />);

    await expect(component).toHaveScreenshot();
  });
});
