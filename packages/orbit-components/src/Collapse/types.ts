// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly initialExpanded?: boolean;
  readonly expanded?: boolean;
  readonly label?: Common.Translation;
  readonly children: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly customLabel?: React.ReactNode;
  readonly onClick?: (
    e: React.SyntheticEvent<HTMLDivElement>,
    state: boolean,
  ) => void | Promise<void>;
}
