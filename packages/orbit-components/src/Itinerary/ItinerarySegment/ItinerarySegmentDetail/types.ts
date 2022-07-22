import React from "react";

/** DOCS:
  ItineraryPartDetail serves as connection between two ItineraryPartPlace components (segments)
*/
interface Detail {
  readonly icon: React.ReactNode;
  readonly name: React.ReactNode;
  readonly value: React.ReactNode;
}
interface ContentItem {
  readonly title: React.ReactNode;
  readonly items: Detail[];
}
export interface Props {
  /** The content of ItineraryDetail component, when it's not expanded */
  readonly summary: React.ReactNode;
  /** The content of ItineraryDetail component, shown when it's expanded */
  readonly content?: ContentItem[];
  /** The duration between two Itinerary parts  */
  readonly duration: string;
  /** default: <Airplane /> */
  readonly icon?: React.ReactNode;
}
