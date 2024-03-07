import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import BaggageStepperStory from "./BaggageStepper.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual BaggageStepper", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<BaggageStepperStory />);

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <BaggageStepperStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
