// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly expanded?: boolean;
  readonly expandable?: boolean;
  readonly onExpand?: Common.Callback;
  readonly header?: React.ReactNode;
  readonly footer?: React.ReactNode;
}
