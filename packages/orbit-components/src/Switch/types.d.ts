// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly icon?: React.ReactNode;
  readonly checked: boolean;
  readonly disabled?: boolean;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readonly onBlur?: React.FocusEventHandler<HTMLInputElement>;
  readonly ariaControls?: string;
  readonly ariaLabel?: string;
  readonly ariaLabelledby?: string;
}
