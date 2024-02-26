import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { WizardStory, WizardStoryHover } from "./Wizard.ct-story";

test.describe("visual Wizard", () => {
  async function maybeHoverByText(component, text: string) {
    if ((await component.getByText(text).count()) === 0) {
      return Promise.resolve();
    }

    return component.getByText(text).hover();
  }

  test("default", async ({ mount }) => {
    const component = await mount(<WizardStory />);

    await expect(component).toHaveScreenshot();
  });

  test("row hover completed step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await maybeHoverByText(component, "Search");

    await expect(component).toHaveScreenshot();
  });

  test("row hover active step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await maybeHoverByText(component, "Passenger details");

    await expect(component).toHaveScreenshot();
  });

  test("row hover inactive step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await maybeHoverByText(component, "Overview & Payment");

    await expect(component).toHaveScreenshot();
  });

  test("row hover completed inactive step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await maybeHoverByText(component, "Customize your trip");

    await expect(component).toHaveScreenshot();
  });

  test("column hover completed step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await maybeHoverByText(component, "Search");

    await expect(component).toHaveScreenshot();
  });

  test("column hover active step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await maybeHoverByText(component, "Passenger details");

    await expect(component).toHaveScreenshot();
  });

  test("column hover inactive step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await maybeHoverByText(component, "Overview & Payment");

    await expect(component).toHaveScreenshot();
  });

  test("column hover completed inactive step", async ({ mount }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await maybeHoverByText(component, "Customize your trip");

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <WizardStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
