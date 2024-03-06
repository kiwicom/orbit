import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import PaginationStory from "./Pagination.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Pagination", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<PaginationStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <PaginationStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
