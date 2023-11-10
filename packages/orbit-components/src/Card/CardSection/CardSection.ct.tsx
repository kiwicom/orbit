import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { CardSectionInput } from "./CardSection.ct-story";

test.describe("interaction", () => {
  test("typing spaces works on non-expandable sections", async ({ mount }) => {
    const component = await mount(<CardSectionInput />);
    const input = component.getByTestId("input");

    await input.focus();
    await input.press("Space");

    expect(await input.inputValue()).toBe(" ");
  });
});
