import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  InputSelectStory,
  InputSelectDropdownStory,
  InputSelectDropdownSizesStory,
  InputSelectDropdownEmptyStory,
  InputSelectDropdownGroupsStory,
} from "./InputSelect.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual InputSelect", () => {
  test("default", async ({ mount }) => {
    const component = await mount(<InputSelectStory />);

    await expect(component).toHaveScreenshot();
  });

  test("dropdown", async ({ mount }) => {
    const component = await mount(<InputSelectDropdownStory />);
    await component.getByTestId("Dropdown").focus();

    await expect(component).toHaveScreenshot();
  });

  test("dropdown sizes", async ({ mount }) => {
    const component = await mount(<InputSelectDropdownSizesStory />);
    await component.getByTestId("Dropdown").focus();

    await expect(component).toHaveScreenshot();
  });

  test("dropdown empty", async ({ mount }) => {
    const component = await mount(<InputSelectDropdownEmptyStory />);
    await component.getByTestId("Dropdown").focus();

    await expect(component).toHaveScreenshot();
  });

  test("dropdown groups", async ({ mount }) => {
    const component = await mount(<InputSelectDropdownGroupsStory />);
    await component.getByTestId("Dropdown").focus();

    await expect(component).toHaveScreenshot();
  });

  test("rtl", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <InputSelectStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("rtl dropdown", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <InputSelectDropdownGroupsStory />
      </RenderInRtl>,
    );
    await component.getByTestId("Dropdown").focus();

    await expect(component).toHaveScreenshot();
  });
});
