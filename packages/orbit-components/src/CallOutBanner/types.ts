// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type Illustration from "../Illustration";

export interface Props extends Common.Globals {
  readonly tabIndex?: string | number;
  readonly onClick?: Common.Callback;
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly illustration?: React.ReactElement<typeof Illustration>;
  readonly actions?: React.ReactNode;
  readonly children?: React.ReactNode;
}
