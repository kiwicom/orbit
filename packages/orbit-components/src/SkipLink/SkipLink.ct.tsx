import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SkipLinkStory from "./SkipLink.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual SkipLink", () => {
  const forceShow = () => {
    const link = document.querySelector("[data-test=SkipLink]>a");
    link?.classList.remove("[&:not(:focus)]:sr-only");
  };

  test("default", async ({ mount }) => {
    const component = await mount(<SkipLinkStory />);

    await expect(component).toHaveScreenshot();
  });

  test("focus", async ({ mount }) => {
    const component = await mount(<SkipLinkStory />);
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SkipLinkStory />
      </RenderInRtl>,
    );
    await component.evaluate(forceShow);

    await expect(component).toHaveScreenshot();
  });
});
