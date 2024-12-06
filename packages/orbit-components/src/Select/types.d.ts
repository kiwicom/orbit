// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

// InputEvent

interface Option {
  readonly key?: string;
  readonly value: string | number;
  readonly label?: string;
  readonly disabled?: boolean;
}

export interface Props extends Common.Globals, Common.SpaceAfter, Common.DataAttrs {
  readonly id?: string;
  readonly required?: boolean;
  readonly label?: Common.Translation;
  readonly placeholder?: Common.Translation;
  readonly value?: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly width?: string;
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly tabIndex?: string | number;
  readonly onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLSelectElement>;
  readonly onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  readonly options: Option[];
  readonly prefix?: React.ReactNode;
  readonly helpClosable?: boolean;
  readonly insideInputGroup?: boolean;
  readonly inlineLabel?: boolean;
  readonly customValueText?: Common.Translation;
  readonly ariaLabel?: string;
}
