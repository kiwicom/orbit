// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly label?: React.ReactNode;
  readonly value?: string;
  readonly hasError?: boolean;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly checked?: boolean;
  readonly defaultChecked?: boolean;
  readonly info?: React.ReactNode;
  readonly tabIndex?: string | number;
  readonly ariaLabelledby?: string;
  // InputEvent
  readonly onChange?: Common.Event<React.ChangeEvent<HTMLInputElement>>;
}
