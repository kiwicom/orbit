import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { Test, TestError, TestHelp, TestSuffix, TestTags } from "./InputField.ct-story";

test.describe("visual InputField", () => {
  test("screenshot", async ({ mount }) => {
    const component = await mount(<Test />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot disabled", async ({ mount }) => {
    const component = await mount(<Test disabled />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot hover", async ({ mount }) => {
    const component = await mount(<Test />);
    component.getByTestId("input").hover();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot focus", async ({ mount }) => {
    const component = await mount(<Test />);
    component.getByTestId("input").focus();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot inline label", async ({ mount }) => {
    const component = await mount(<Test inlineLabel />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot placeholder", async ({ mount }) => {
    const component = await mount(<Test placeholder="Placeholder" />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot value", async ({ mount }) => {
    const component = await mount(<Test value="Value" />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot required", async ({ mount }) => {
    const component = await mount(<Test required />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot required value", async ({ mount }) => {
    const component = await mount(<Test required value="Value" />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot help", async ({ mount }) => {
    const component = await mount(<TestHelp />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot help focus", async ({ mount }) => {
    const component = await mount(<TestHelp />);
    component.getByTestId("input").focus();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot help required", async ({ mount }) => {
    const component = await mount(<TestHelp required />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error", async ({ mount }) => {
    const component = await mount(<TestError />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error hover", async ({ mount }) => {
    const component = await mount(<TestError />);
    component.getByTestId("input").hover();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error focus", async ({ mount }) => {
    const component = await mount(<TestError />);
    component.getByTestId("input").focus();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot error required", async ({ mount }) => {
    const component = await mount(<TestError required />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot prefix", async ({ mount }) => {
    const component = await mount(<Test prefix="$" />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot suffix", async ({ mount }) => {
    const component = await mount(<TestSuffix />);

    await expect(component).toHaveScreenshot();
  });

  test("screenshot tags", async ({ mount }) => {
    const component = await mount(<TestTags />);

    await expect(component).toHaveScreenshot();
  });
});
