// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type Tooltip from "../Tooltip";
import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly label?: React.ReactNode;
  readonly value?: string;
  readonly hasError?: boolean;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly checked?: boolean;
  readonly info?: React.ReactNode;
  readonly tooltip?: React.ReactElement<typeof Tooltip>;
  readonly readOnly?: boolean;
  readonly tabIndex?: string | number;
  // InputEvent
  readonly onChange?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}
