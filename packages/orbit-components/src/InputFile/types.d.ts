// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly buttonLabel?: React.ReactNode;
  readonly name?: string;
  readonly placeholder?: Common.Translation;
  readonly fileName?: string;
  readonly allowedFileTypes?: string | string[];
  readonly disabled?: boolean;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly width?: string;
  readonly required?: boolean;
  readonly helpClosable?: boolean;
  readonly tabIndex?: string | number;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readonly onBlur?: React.FocusEventHandler<HTMLInputElement>;
  readonly insideInputGroup?: boolean;
  readonly onRemoveFile?: Common.Callback;
  readonly multiple?: boolean;
}
