import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import SliderStory from "./Slider.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual Slider", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<SliderStory />);

    await expect(component).toHaveScreenshot();
  });

  test("labels and value", async ({ mount }) => {
    const component = await mount(
      <SliderStory
        label="Slider"
        valueDescription="Suspendisse potenti. Suspendisse sed metus rutrum, ultrices augue et, dignissim augue."
        defaultValue={25}
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <SliderStory
          label="Slider"
          valueDescription="Suspendisse potenti. Suspendisse sed metus rutrum, ultrices augue et, dignissim augue."
          defaultValue={25}
        />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("histogram", async ({ mount }) => {
    const component = await mount(
      <SliderStory
        label="Depart from Prague"
        defaultValue={3}
        minValue={1}
        maxValue={5}
        histogramData={[2, 3, 5, 8, 1]}
        histogramDescription="20 of 133 flights"
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("histogram loading", async ({ mount }) => {
    const component = await mount(
      <SliderStory
        label="Depart from Prague"
        histogramLoading
        histogramLoadingText="Loading connection data…"
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("range", async ({ mount }) => {
    const component = await mount(<SliderStory defaultValue={[2, 4]} minValue={1} maxValue={5} />);

    await expect(component).toHaveScreenshot();
  });

  test("range histogram", async ({ mount }) => {
    const component = await mount(
      <SliderStory
        defaultValue={[2, 4]}
        minValue={1}
        maxValue={5}
        histogramData={[2, 3, 5, 8, 1]}
        histogramDescription="20 of 133 flights"
      />,
    );

    await expect(component).toHaveScreenshot();
  });
});
