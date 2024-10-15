import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  DefaultPopover,
  PopoverWithCustomWidth,
  PopoverWithFixedPosition,
  PopoverPlacements,
  PopoverOverlapped,
  PopoverLongContent,
} from "./Popover.ct-story";
import { PLACEMENTS, AUTO_PLACEMENTS } from "../common/placements";

test.describe("visual Popover", () => {
  test(`screenshot for default`, async ({ mount }, { project }) => {
    if (project.name === "Desktop") {
      const component = await mount(<DefaultPopover />);

      await expect(component).toHaveScreenshot();
    }
  });

  [...Object.values(AUTO_PLACEMENTS), ...Object.values(PLACEMENTS)].forEach(placement => {
    test(`screenshot for placement ${placement}`, async ({ mount }, { project }) => {
      if (project.name === "Desktop") {
        const component = await mount(<PopoverPlacements placement={placement} />);

        await expect(component).toHaveScreenshot();
      }
    });
  });

  test(`screenshot for custom width`, async ({ mount }, { project }) => {
    if (project.name === "Desktop") {
      const component = await mount(<PopoverWithCustomWidth />);

      await expect(component).toHaveScreenshot();
    }
  });

  test(`screenshot for fixed position`, async ({ mount }, { project }) => {
    if (project.name === "Desktop") {
      const component = await mount(<PopoverWithFixedPosition />);

      await expect(component).toHaveScreenshot();
    }
  });

  test(`screenshot for overlapped`, async ({ mount }, { project }) => {
    if (project.name === "Desktop") {
      const component = await mount(<PopoverOverlapped />);

      await expect(component).toHaveScreenshot();
    }
  });

  test(`screenshot for long content`, async ({ mount }, { project }) => {
    if (project.name === "Desktop") {
      const component = await mount(<PopoverLongContent />);

      await expect(component).toHaveScreenshot();
    }
  });
});
