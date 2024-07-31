import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { TYPE_OPTIONS } from "./consts";
import { TestLeftIcon, TestAlert } from "./Alert.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

test.describe("visual AlertButton", () => {
  Object.values(TYPE_OPTIONS).forEach(type => {
    test(`screenshot ${type}`, async ({ mount }) => {
      const component = await mount(<TestLeftIcon type={type} />);

      await expect(component).toHaveScreenshot();
    });

    test(`screenshot ${type} hover`, async ({ mount }) => {
      const component = await mount(<TestLeftIcon type={type} />);
      await component.getByTestId("button").hover();

      await expect(component).toHaveScreenshot();
    });

    test(`screenshot ${type} focus`, async ({ mount }) => {
      const component = await mount(<TestLeftIcon type={type} />);
      await component.getByTestId("button").focus();

      await expect(component).toHaveScreenshot();
    });

    test(`screenshot ${type} active`, async ({ mount }) => {
      const component = await mount(<TestLeftIcon type={type} />);
      await component.getByTestId("button").click();

      await expect(component).toHaveScreenshot();
    });
  });
});

test.describe("visual Alert", () => {
  test("Alert component", async ({ mount }) => {
    const component = await mount(<TestAlert />);

    await expect(component).toHaveScreenshot();
  });

  test("Alert component RTL", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <TestAlert />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
