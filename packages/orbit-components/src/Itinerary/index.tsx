"use client";

import * as React from "react";

import ItinerarySegmentBanner from "./ItinerarySegment/ItinerarySegmentBanner";
import ItineraryBadgeList, { ItineraryBadgeListItem } from "./ItineraryBadgeList";
import ItinerarySegment from "./ItinerarySegment";
import ItinerarySeparator from "./ItinerarySeparator";
import ItineraryStatus from "./ItineraryStatus";
import ItinerarySegmentStop from "./ItinerarySegment/ItinerarySegmentStop";
import ItinerarySegmentDetail from "./ItinerarySegment/ItinerarySegmentDetail";
import { ItineraryProvider } from "./context";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

const Itinerary = ({ children, dataTest, spaceAfter, id }: Props) => {
  return (
    <div className={spaceAfter && spaceAfterClasses[spaceAfter]} data-test={dataTest} id={id}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </div>
  );
};

export {
  ItinerarySegment,
  ItinerarySegmentBanner,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItinerarySeparator,
  ItineraryBadgeList,
  ItineraryBadgeListItem,
  ItineraryStatus,
};
export default Itinerary;
