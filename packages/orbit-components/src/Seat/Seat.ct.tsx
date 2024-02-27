import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SeatStory from "./Seat.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Seat", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<SeatStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SeatStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
