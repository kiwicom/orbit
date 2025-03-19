import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import ListStory, { ListStoryWithSpacing, ListStoryWithIconAndLabel } from "./List.ct-story";
import { SIZES, TYPES } from "./consts";

test.describe("visual List", () => {
  Object.values(SIZES).forEach(size => {
    test(`List size ${size}`, async ({ mount }) => {
      const component = await mount(<ListStory size={size} />);
      await expect(component).toHaveScreenshot();
    });
  });

  Object.values(TYPES).forEach(type => {
    test(`List type ${type}`, async ({ mount }) => {
      const component = await mount(<ListStory type={type} />);
      await expect(component).toHaveScreenshot();
    });
  });

  test("List with various spacing", async ({ mount }) => {
    const component = await mount(<ListStoryWithSpacing />);
    await expect(component).toHaveScreenshot();
  });

  test("List with icon and label", async ({ mount }) => {
    const component = await mount(<ListStoryWithIconAndLabel />);
    await expect(component).toHaveScreenshot();
  });
});
