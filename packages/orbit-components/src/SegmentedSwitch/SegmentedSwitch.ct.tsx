import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  SegmentedSwitchStory,
  SegmentedSwitchErrorStory,
  SegmentedSwitchSelectedStory,
} from "./SegmentedSwitch.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual SegmentedSwitch", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<SegmentedSwitchStory />);

    await expect(component).toHaveScreenshot();
  });

  test("error focused", async ({ mount }) => {
    const component = await mount(<SegmentedSwitchErrorStory />);
    await component.getByTestId("switch-error").focus();

    await expect(component).toHaveScreenshot();
  });

  test("selected hovered", async ({ mount }) => {
    const component = await mount(<SegmentedSwitchSelectedStory />);
    await component.getByTestId("switch-selected").hover();

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SegmentedSwitchStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
