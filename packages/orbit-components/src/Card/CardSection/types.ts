// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";
import { As } from "../../Heading/types";

export interface Props extends Common.Globals {
  readonly title?: React.ReactNode;
  readonly titleAs?: As;
  readonly icon?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
  readonly actions?: React.ReactNode;
  readonly expanded?: boolean;
  readonly noSeparator?: boolean;
  readonly onClose?: Common.Callback;
  readonly onExpand?: Common.Callback;
  readonly onClick?: Common.Callback;
  readonly header?: React.ReactNode;
}
