// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLSelectElement>>;

interface Option {
  readonly key?: string;
  readonly value: string | number;
  readonly label?: string;
  readonly disabled?: boolean;
}

export interface Props extends Common.Globals, Common.SpaceAfter, Common.DataAttrs {
  readonly id?: string;
  readonly required?: boolean;
  readonly size?: Common.InputSize;
  readonly label?: Common.Translation;
  readonly placeholder?: Common.Translation;
  readonly value?: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly width?: string;
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly tabIndex?: string | number;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly options: Option[];
  readonly prefix?: React.ReactNode;
  readonly helpClosable?: boolean;
  readonly readOnly?: boolean;
  readonly insideInputGroup?: boolean;
  readonly customValueText?: Common.Translation;
}
