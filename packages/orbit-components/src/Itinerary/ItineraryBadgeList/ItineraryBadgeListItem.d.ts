import React from "react";

import { Props as BadgeListItemProps } from "../../BadgeList/BadgeListItem";
import Common from "../../common/common";

export interface Props extends Common.SpaceAfter, BadgeListItemProps {
  /** Content of the BadgeList (BadgeListItem) */
  cancelledValue?: React.ReactNode;
  withBackground?: boolean;
}

declare const ItineraryBadgeListItem: React.FunctionComponent<Props>;
export default ItineraryBadgeListItem;
