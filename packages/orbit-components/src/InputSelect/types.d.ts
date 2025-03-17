// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Option {
  readonly group?: string;
  readonly title: string;
  readonly value: string | number;
  readonly description?: string;
  readonly prefix?: React.ReactNode;
}

// InputEvent
type InputEvent = Common.Event<React.SyntheticEvent<HTMLInputElement>>;
type KeyboardEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends Common.Globals, Common.SpaceAfter, Common.DataAttrs {
  readonly name?: string;
  readonly label?: string;
  readonly placeholder?: string;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly showAll?: boolean;
  readonly showAllLabel?: string;
  readonly disabled?: boolean;
  readonly maxHeight?: string;
  readonly maxWidth?: string;
  readonly width?: string;
  readonly options: Option[];
  readonly defaultSelected?: Option;
  readonly prevSelected?: Option;
  readonly prevSelectedLabel?: string;
  readonly required?: boolean;
  readonly tabIndex?: string | number;
  readonly readOnly?: boolean;
  readonly id?: string;
  readonly insideInputGroup?: boolean;
  readonly emptyState?: React.ReactNode;
  readonly labelClose?: string;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readonly onBlur?: React.FocusEventHandler<HTMLInputElement>;
  readonly onSelect?: InputEvent;
  readonly onMouseUp?: React.MouseEventHandler<HTMLInputElement>;
  readonly onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
  readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly onOptionSelect?: (opt: Option | null) => void;
  readonly onClose?: (opt: Option | null) => void;
}
