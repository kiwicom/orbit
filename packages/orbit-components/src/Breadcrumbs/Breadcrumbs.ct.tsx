import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import Breadcrumbs, { BreadcrumbsItem } from ".";

test.describe("visual Breadcrumbs", () => {
  test("Breadcrumbs default", async ({ mount }) => {
    const component = await mount(
      <Breadcrumbs onGoBack={() => {}}>
        <BreadcrumbsItem href="https://kiwi.com" onClick={() => {}}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#1" onClick={() => {}}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem onClick={() => {}}>2. Level</BreadcrumbsItem>
        <BreadcrumbsItem href="#3">3. Level</BreadcrumbsItem>
        <BreadcrumbsItem>4. Level</BreadcrumbsItem>
      </Breadcrumbs>,
    );

    await expect(component).toHaveScreenshot();
  });
});
