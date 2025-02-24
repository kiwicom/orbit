import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import {
  ItineraryBadgeListVisualStory,
  ItineraryBannerHiddenCityVisualStory,
  ItinerarySegmentStatusVisualStory,
  ItinerarySegmentVisualStory,
  ItinerarySeparatorVisualStory,
} from "./Itinerary.ct-story";

test.describe("visual Itinerary", () => {
  test("ItineraryBadgeList", async ({ mount }) => {
    const component = await mount(<ItineraryBadgeListVisualStory />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySeparator", async ({ mount }) => {
    const component = await mount(<ItinerarySeparatorVisualStory />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment closed", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment closed hover", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory />);

    await component.getByTestId("segment").hover();

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment not actionable", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory actionable={false} />);

    await component.getByTestId("segment").hover();

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment noElevation", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory noElevation />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment no content", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory noContent />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment open", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentVisualStory />);

    await component.getByText("PRG").click();

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment status", async ({ mount }) => {
    const component = await mount(<ItinerarySegmentStatusVisualStory />);

    await expect(component).toHaveScreenshot();
  });

  test("ItinerarySegment banners and hidden city", async ({ mount }) => {
    const component = await mount(<ItineraryBannerHiddenCityVisualStory />);

    await expect(component).toHaveScreenshot();
  });
});
