import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import AccordionVisualTest from "./Accordion.ct-story";

test.describe("visual Accordion", () => {
  test(`Accordion default`, async ({ mount }) => {
    const component = await mount(<AccordionVisualTest />);

    await expect(component).toHaveScreenshot();
  });
});
