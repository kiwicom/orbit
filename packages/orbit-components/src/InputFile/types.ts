// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly buttonLabel?: React.ReactNode;
  readonly name?: string;
  readonly placeholder?: Common.Translation;
  readonly fileName?: string;
  readonly allowedFileTypes?: string | string[];
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly width?: string;
  readonly required?: boolean;
  readonly helpClosable?: boolean;
  readonly tabIndex?: string | number;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly insideInputGroup?: boolean;
  readonly onRemoveFile?: Common.Callback;
}
