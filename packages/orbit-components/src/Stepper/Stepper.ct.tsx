import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import StepperStory from "./Stepper.ct-story";

test.describe("visual Stepper", () => {
  test("default Stepper", async ({ mount }) => {
    const component = await mount(
      <StepperStory titleIncrement="increment" titleDecrement="decrement" />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled", async ({ mount }) => {
    const component = await mount(
      <StepperStory titleIncrement="increment" titleDecrement="decrement" disabled />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled with active", async ({ mount }) => {
    const component = await mount(
      <StepperStory titleIncrement="increment" titleDecrement="decrement" disabled active />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper with active", async ({ mount }) => {
    const component = await mount(
      <StepperStory titleIncrement="increment" titleDecrement="decrement" active />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled increment", async ({ mount }) => {
    const component = await mount(
      <StepperStory
        titleIncrement="increment"
        titleDecrement="decrement"
        maxValue={10}
        defaultValue={10}
        minValue={0}
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled increment with active", async ({ mount }) => {
    const component = await mount(
      <StepperStory
        titleIncrement="increment"
        titleDecrement="decrement"
        maxValue={10}
        defaultValue={10}
        minValue={0}
        active
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled decrement", async ({ mount }) => {
    const component = await mount(
      <StepperStory
        titleIncrement="increment"
        titleDecrement="decrement"
        maxValue={10}
        defaultValue={0}
        minValue={0}
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test("Stepper disabled decrement with active", async ({ mount }) => {
    const component = await mount(
      <StepperStory
        titleIncrement="increment"
        titleDecrement="decrement"
        maxValue={10}
        defaultValue={0}
        minValue={0}
        active
      />,
    );

    await expect(component).toHaveScreenshot();
  });
});
