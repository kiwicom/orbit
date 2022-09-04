// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import { Type } from "../Badge/index.d";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}

declare const NotificationBadge: React.FunctionComponent<Props>;
export { NotificationBadge, NotificationBadge as default };
