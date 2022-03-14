import * as React from "react";

import { Status } from "../..";

/** DOCS:
  ItineraryPartPlace is an atomic unit of the Itinerary component, shows two locations, date and time,
  has warning property which changes the icon to `<AlertCircle color="warning" />`
  to attract user attention about some important information about journey.
*/
export interface Props {
  /** The date of ItineraryPartPlace */
  readonly date: string;
  /** The time of ItineraryPartPlace */
  readonly time: React.ReactNode;
  /** The city of ItineraryPartPlace */
  readonly city: React.ReactNode;
  /** The place of ItineraryPartPlace */
  readonly station: React.ReactNode;
  /** ItineraryPartPlace which status is HiddenCity */
  readonly hidden?: boolean;
  /** Changes the icon of current ItineraryPartPlace, if there is some important information for user */
  readonly type?: Status;
  /** sets min-width for first column with date and time */
  readonly minWidth?: number;
  /** sets custom icon */
  readonly icon?: React.ReactNode;
  /** shows segment stop as canceled with striked through Text */
  readonly canceled?: React.ReactNode;
}

declare const ItineraryPartPlace: React.FunctionComponent<Props>;
export default ItineraryPartPlace;
