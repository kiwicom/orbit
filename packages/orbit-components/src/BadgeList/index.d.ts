// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import BadgeListItem from "./BadgeListItem";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

declare const BadgeList: React.FunctionComponent<Props>;

export { BadgeList, BadgeList as default, BadgeListItem };
