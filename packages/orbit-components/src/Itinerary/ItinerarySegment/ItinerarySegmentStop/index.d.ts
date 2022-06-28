import * as React from "react";

import { Status } from "../..";

/** DOCS:
  ItinerarySegmentStop is an atomic unit of the Itinerary component, shows two locations, date and time,
  has warning property which changes the icon to `<AlertCircle color="warning" />`
  to attract user attention about some important information about journey.
*/
export interface Props {
  /** The date of ItinerarySegmentStop */
  readonly date?: string;
  /** The time of ItinerarySegmentStop */
  readonly time?: React.ReactNode;
  /** The city of ItinerarySegmentStop */
  readonly city: React.ReactNode;
  /** The place of ItinerarySegmentStop */
  readonly station: React.ReactNode;
  /** ItinerarySegmentStop which status is HiddenCity */
  readonly hidden?: boolean;
  /** ItinerarySegmentStop Hidden city text */
  readonly hiddenCityText?: React.ReactNode;
  /** Changes the icon of current ItinerarySegmentStop, if there is some important information for user */
  readonly type?: Status;
  /** sets min-width for first column with date and time */
  readonly minWidth?: number;
  /** sets custom icon */
  readonly icon?: React.ReactNode;
  /** shows segment stop as canceled with striked through Text */
  readonly canceled?: React.ReactNode;
}

declare const ItinerarySegmentStop: React.FunctionComponent<Props>;

export default ItinerarySegmentStop;
