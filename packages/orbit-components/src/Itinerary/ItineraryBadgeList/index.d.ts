import React from "react";

import Common from "../../common/common";
import { Props as BadgeListProps } from "../../BadgeList";
import { Props as ItineraryBadgeListItemProps } from "./ItineraryBadgeListItem";

export interface Props extends BadgeListProps, Common.SpaceAfter {
  /** Content of the BadgeList (BadgeListItem) */
  readonly children: React.ReactNode;
}

declare const ItineraryBadgeList: React.FunctionComponent<Props>;
declare const ItineraryBadgeListItem: React.FunctionComponent<ItineraryBadgeListItemProps>;
export default ItineraryBadgeList;
export { ItineraryBadgeListItem };
