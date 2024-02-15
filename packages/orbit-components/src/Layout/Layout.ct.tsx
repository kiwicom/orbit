import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  LayoutStorySearch,
  LayoutStoryBooking,
  LayoutStoryMMB,
  LayoutStoryWizard,
  LayoutStoryCard,
} from "./Layout.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Layout", () => {
  test("search", async ({ mount }) => {
    const component = await mount(<LayoutStorySearch />);

    await expect(component).toHaveScreenshot();
  });

  test("booking", async ({ mount }) => {
    const component = await mount(<LayoutStoryBooking />);

    await expect(component).toHaveScreenshot();
  });

  test("mmb", async ({ mount }) => {
    const component = await mount(<LayoutStoryMMB />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <LayoutStoryBooking />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("wizard", async ({ mount }) => {
    const component = await mount(<LayoutStoryWizard />);

    await expect(component).toHaveScreenshot();
  });

  test("card", async ({ mount }) => {
    const component = await mount(<LayoutStoryCard />);

    await expect(component).toHaveScreenshot();
  });
});
