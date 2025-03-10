import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import { TestTag, DefaultTestStory } from "./Tag.ct-story";
import RenderInRtl from "../utils/rtl/RenderInRtl";

const NON_INTERACTABLE_TAGS = [
  {
    testTitle: "Non-interactable Neutral",
    type: "neutral",
    onClick: undefined,
    onRemove: undefined,
  },
  {
    testTitle: "Non-interactable Colored",
    type: "colored",
    onClick: undefined,
    onRemove: undefined,
  },
] as const;

const INTERECTABLE_TAGS = [
  { testTitle: "Neutral", type: "neutral" },
  { testTitle: "Neutral Selected", type: "neutral", selected: true },
  { testTitle: "Neutral DateTag", type: "neutral", dateTag: true, selected: false },
  { testTitle: "Neutral DateTag Selected", type: "neutral", dateTag: true, selected: true },
  { testTitle: "Colored", type: "colored" },
  { testTitle: "Colored Selected", type: "colored", selected: true },
  { testTitle: "Colored DateTag", type: "colored", dateTag: true, selected: false },
  { testTitle: "Colored DateTag Selected", type: "colored", dateTag: true, selected: true },
] as const;

test.describe("visual Tag", () => {
  test("screenshot general", async ({ mount }) => {
    const component = await mount(<DefaultTestStory />);

    await expect(component).toHaveScreenshot();
  });

  [...NON_INTERACTABLE_TAGS, ...INTERECTABLE_TAGS].forEach(({ testTitle, ...props }) => {
    test(`screenshot ${testTitle} hover`, async ({ mount }) => {
      const component = await mount(
        <TestTag dataTest="tag" onClick={() => {}} onRemove={() => {}} {...props}>
          {testTitle}
        </TestTag>,
      );

      await component.getByTestId("tag").hover();
      await expect(component).toHaveScreenshot();
    });
  });

  [...NON_INTERACTABLE_TAGS, ...INTERECTABLE_TAGS].forEach(({ testTitle, ...props }) => {
    test(`screenshot ${testTitle} focus`, async ({ mount }) => {
      const component = await mount(
        <TestTag dataTest="tag" onClick={() => {}} onRemove={() => {}} {...props}>
          {testTitle}
        </TestTag>,
      );

      await component.getByText(testTitle).focus();
      await expect(component).toHaveScreenshot();
    });
  });

  [...NON_INTERACTABLE_TAGS, ...INTERECTABLE_TAGS].forEach(({ testTitle, ...props }) => {
    test(`screenshot ${testTitle} active`, async ({ mount }) => {
      const component = await mount(
        <TestTag dataTest="tag" onClick={() => {}} onRemove={() => {}} {...props}>
          {testTitle}
        </TestTag>,
      );

      await component.getByTestId("tag").click();
      await expect(component).toHaveScreenshot();
    });
  });

  INTERECTABLE_TAGS.forEach(({ testTitle, ...props }) => {
    test(`screenshot ${testTitle} focus remove button`, async ({ mount }) => {
      const component = await mount(
        <TestTag onClick={() => {}} onRemove={() => {}} labelDismiss="Dismiss" {...props}>
          {testTitle}
        </TestTag>,
      );

      await component.getByRole("button", { name: "Dismiss", exact: true }).focus();
      await expect(component).toHaveScreenshot();
    });
  });

  test("screenshot rtl general", async ({ mount }) => {
    const component = await mount(
      <RenderInRtl>
        <DefaultTestStory />
      </RenderInRtl>,
    );

    await expect(component).toHaveScreenshot();
  });
});
