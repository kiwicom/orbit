// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";
import BadgeListItem from "./BadgeListItem";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
}
