import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import { ALIGN } from "../common/tailwind/alignItems";
import StackStory from "./Stack.ct-story";
import { JUSTIFY } from "../common/tailwind/justify";
import Box from "../Box";

import Stack from ".";

test.describe("visual Stack", () => {
  test(`Stack default`, async ({ mount }) => {
    const component = await mount(<StackStory />);

    await expect(component).toHaveScreenshot();
  });

  test(`Nested Stack shouldn't have full height`, async ({ mount }) => {
    const component = await mount(
      <Box height="900px" background="productNormal">
        <Stack flex direction="column">
          <StackStory />
          <StackStory />
        </Stack>
      </Box>,
    );

    await expect(component).toHaveScreenshot();
  });

  Object.values(SPACINGS).forEach(spacing => {
    test(`Stack with spacing ${spacing}`, async ({ mount }) => {
      const component = await mount(<StackStory spacing={spacing} />);

      await expect(component).toHaveScreenshot();
    });
  });

  test("Stack with inline", async ({ mount }) => {
    const component = await mount(<StackStory inline />);

    await expect(component).toHaveScreenshot();
  });

  test("Stack with gap", async ({ mount }) => {
    const component = await mount(<StackStory flex legacy={false} />);

    await expect(component).toHaveScreenshot();
  });

  Object.values(DIRECTIONS).forEach(direction => {
    test(`Stack with direction ${direction}`, async ({ mount }) => {
      const component = await mount(<StackStory direction={direction} />);

      await expect(component).toHaveScreenshot();
    });
  });

  Object.values(ALIGN).forEach(align => {
    test(`Stack with align ${align} and direction row`, async ({ mount }) => {
      const component = await mount(<StackStory align={align} />);

      await expect(component).toHaveScreenshot();
    });

    test(`Stack with align ${align} and direction column`, async ({ mount }) => {
      const component = await mount(<StackStory direction="column" align={align} />);

      await expect(component).toHaveScreenshot();
    });
  });

  Object.values(JUSTIFY).forEach(justify => {
    test(`Stack with justify ${justify} and direction row`, async ({ mount }) => {
      const component = await mount(<StackStory flex justify={justify} />);

      await expect(component).toHaveScreenshot();
    });

    test(`Stack with justify ${justify} and direction column`, async ({ mount }) => {
      const component = await mount(
        <Box height="350px" background="cloudDark">
          <StackStory flex direction="column" justify={justify} />
        </Box>,
      );

      await expect(component).toHaveScreenshot();
    });
  });
});
