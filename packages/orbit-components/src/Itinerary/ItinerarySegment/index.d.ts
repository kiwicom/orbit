/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarysegment
*/

import React from "react";

import * as Common from "../../common/common";

export type Status = "warning" | "critical" | "info" | "success";

/** DOCS:
  ItinerarySegment component serves as a wrapper of atomic units `ItinerarySegmentPlace` and `ItinerarySegmentDetail,
  has status prop for showing important information about the connection between two segments of journey.
*/

export interface Props extends Common.Global, Common.SpaceAfter {
  /** The content of ItinerarySegment */
  readonly children: React.ReactNode;
  /** onClick callback that is triggered when Segment is clicked */
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
  /** Removes the box-shadow  */
  readonly noElevation?: boolean;
  readonly actionable?: boolean;
  /** Additional information to ItinerarySegment */
  readonly info?: React.ReactNode;
}

declare const ItinerarySegment: React.FunctionComponent<Props>;
export default ItinerarySegment;
