import React from "react";

import * as Common from "../../common/types";
import { Props as BadgeListProps } from "../../BadgeList/types";
import { Props as BadgeListItemProps } from "../../BadgeList/BadgeListItem/types";

export interface Props extends BadgeListProps, Common.SpaceAfter {
  /** Content of the BadgeList (BadgeListItem) */
  readonly children: React.ReactNode;
}

export interface BadgeListItem extends Common.SpaceAfter, Props, BadgeListItemProps {
  /** Content of the BadgeList (BadgeListItem) */
  cancelledValue?: React.ReactNode;
  withBackground?: boolean;
}
