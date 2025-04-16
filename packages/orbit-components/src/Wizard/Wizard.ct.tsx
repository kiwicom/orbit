import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { WizardStory, WizardStoryHover } from "./Wizard.ct-story";

test.describe("visual Wizard", () => {
  const checkHoverStateComponent = async (viewport, component, text) => {
    const { breakpointLargeMobile } = defaultTokens;
    test.skip(viewport !== null && viewport.width < breakpointLargeMobile);

    return component.getByText(text).hover();
  };

  test("default", async ({ mount }) => {
    const component = await mount(<WizardStory />);

    await expect(component).toHaveScreenshot();
  });

  test("row hover completed step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await checkHoverStateComponent(viewport, component, "Search");

    await expect(component).toHaveScreenshot();
  });

  test("row hover active step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await checkHoverStateComponent(viewport, component, "Passenger details");

    await expect(component).toHaveScreenshot();
  });

  test("row hover inactive step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await checkHoverStateComponent(viewport, component, "Overview & Payment");

    await expect(component).toHaveScreenshot();
  });

  test("row hover completed inactive step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="row" />);
    await checkHoverStateComponent(viewport, component, "Customize your trip");

    await expect(component).toHaveScreenshot();
  });

  test("column hover completed step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await checkHoverStateComponent(viewport, component, "Search");

    await expect(component).toHaveScreenshot();
  });

  test("column hover active step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await checkHoverStateComponent(viewport, component, "Passenger details");

    await expect(component).toHaveScreenshot();
  });

  test("column hover inactive step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await checkHoverStateComponent(viewport, component, "Overview & Payment");

    await expect(component).toHaveScreenshot();
  });

  test("column hover completed inactive step", async ({ mount, viewport }) => {
    const component = await mount(<WizardStoryHover direction="column" />);
    await checkHoverStateComponent(viewport, component, "Customize your trip");

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
