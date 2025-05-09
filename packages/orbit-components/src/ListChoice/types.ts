// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly selectable?: boolean;
  readonly selected?: boolean;
  readonly disabled?: boolean;
  readonly role?: string;
  readonly tabIndex?: number;
  readonly icon?: React.ReactNode;
  readonly action?: React.ReactNode;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
}
