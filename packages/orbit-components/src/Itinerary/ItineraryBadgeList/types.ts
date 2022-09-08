import React from "react";

import * as Common from "../../common/types";
import { Props as BadgeListProps } from "../../BadgeList/types";

export interface Props extends BadgeListProps, Common.SpaceAfter {
  /** Content of the BadgeList (BadgeListItem) */
  readonly children: React.ReactNode;
}
