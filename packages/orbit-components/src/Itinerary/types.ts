import React from "react";

import ItinerarySegment from "./ItinerarySegment";
import ItineraryStatus from "./ItineraryStatus";
import ItinerarySeparator from "./ItinerarySeparator";
import ItineraryBadgeList from "./ItineraryBadgeList";
import ItinerarySegmentStop from "./ItinerarySegment/ItinerarySegmentStop";
import ItinerarySegmentDetail from "./ItinerarySegment/ItinerarySegmentDetail";
import ItinerarySegmentBanner from "./ItinerarySegment/ItinerarySegmentBanner";
import * as Common from "../common/types";

/** DOCS:
  To implement the Itinerary component into your project you'll need to add the import:

  ```jsx
  import Itinerary, {
    ItinerarySegment,
    ItineraryBadgeList,
    ItinerarySegmentStop,
    ItinerarySegmentDetail,
  } from "@kiwicom/orbit-components";
  ```

  After adding import into your project you can use it simply like:
  ```jsx
  <Itinerary>
    <ItinerarySegment spaceAfter="large">
      <ItinerarySegmentStop
        city="Moscow"
        station="Sheremetyevo International Airport (SVO)"
        date="Fri, 19.10"
        time="14:05"
      />
      <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItinerarySegmentDetail>
      <ItinerarySegmentStop
        city="Prague"
        station="Václav Havel Airport Prague (PRG)"
        date="Fri, 19.10"
        time="16:35"
      />
    </ItinerarySegment>
  </Itinerary>
  ```
*/

export type Status = "warning" | "critical" | "info" | "success" | "neutral";

export interface Props extends Common.Globals, Common.SpaceAfter {
  /** The content of Itinerary component */
  readonly children: React.ReactNode;
}

export {
  ItinerarySegment,
  ItinerarySeparator,
  ItinerarySegmentStop,
  ItinerarySegmentBanner,
  ItinerarySegmentDetail,
  ItineraryStatus,
  ItineraryBadgeList,
};
