import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { Test } from "./Radio.ct-story";

test.describe("visual Radio", () => {
  test("screenshot", async ({ mount }) => {
    const component = await mount(<Test />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot hover", async ({ mount }) => {
    const component = await mount(<Test />);
    await component.getByText("Label").hover();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot focus", async ({ mount }) => {
    const component = await mount(<Test />);
    await component.getByText("Label").focus();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot disabled", async ({ mount }) => {
    const component = await mount(<Test disabled />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot info", async ({ mount }) => {
    const component = await mount(<Test info="Moar info" />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot checked", async ({ mount }) => {
    const component = await mount(<Test checked />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error", async ({ mount }) => {
    const component = await mount(<Test hasError />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error hover", async ({ mount }) => {
    const component = await mount(<Test hasError />);
    await component.getByText("Label").hover();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error focus", async ({ mount }) => {
    const component = await mount(<Test hasError />);
    await component.getByText("Label").focus();

    await expect(component).toHaveScreenshot();
  });
});
