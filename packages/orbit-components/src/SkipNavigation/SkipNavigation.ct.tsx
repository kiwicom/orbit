import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SkipNavigationStory from "./SkipNavigation.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual SkipNavigation", () => {
  const forceShow = () => {
    const el = document.querySelector("[data-test=SkipNavigation]");
    el?.classList.remove("sr-only");
    el?.querySelector("select")?.focus();
  };

  test("default", async ({ mount }) => {
    const component = await mount(<SkipNavigationStory />);

    await expect(component).toHaveScreenshot();
  });

  test("focus", async ({ mount }) => {
    const component = await mount(<SkipNavigationStory />);
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SkipNavigationStory />
      </RenderInRtl>,
    );
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });

  test("in-nav", async ({ mount }) => {
    const component = await mount(<SkipNavigationStory isInNav />);

    await expect(component).toHaveScreenshot();
  });

  test("in-nav focus", async ({ mount }) => {
    const component = await mount(<SkipNavigationStory isInNav />);
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });

  test("in-nav rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SkipNavigationStory isInNav />
      </RenderInRtl>,
    );
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });
});
