import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { TabStory, TabsComponentStory, TabDisabledStory } from "./Tabs.ct-story";
import { TYPE_OPTIONS } from "./components/Tab/consts";

test.describe("visual Tab", () => {
  Object.values(TYPE_OPTIONS).forEach(type => {
    test(`screenshot ${type} hover`, async ({ mount }) => {
      const component = await mount(<TabStory type={type} />);
      await component.getByText(type).hover();

      await expect(component).toHaveScreenshot();
    });

    test(`screenshot ${type} focus`, async ({ mount }) => {
      const component = await mount(<TabStory type={type} />);
      await component.getByText(type).focus();

      await expect(component).toHaveScreenshot();
    });

    test(`screenshot ${type} active`, async ({ mount }) => {
      const component = await mount(<TabStory type={type} />);
      await component.getByText(type).click();

      await expect(component).toHaveScreenshot();
    });
  });

  test("visual disabled Tab", async ({ mount }) => {
    const component = await mount(<TabDisabledStory />);
    await expect(component).toHaveScreenshot();
  });
});

test.describe("visual Tabs", () => {
  test("screenshot", async ({ mount }) => {
    const component = await mount(<TabsComponentStory />);
    await expect(component).toHaveScreenshot();
  });

  test("screenshot for compact", async ({ mount }) => {
    const component = await mount(<TabsComponentStory compact />);
    await expect(component).toHaveScreenshot();
  });

  test("screenshot for fullWidth", async ({ mount }) => {
    const component = await mount(<TabsComponentStory fullWidth />);
    await expect(component).toHaveScreenshot();
  });
});
