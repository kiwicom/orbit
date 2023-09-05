// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Type = "text" | "number" | "email" | "password" | "passportid";
type InputMode = "numeric" | "tel" | "decimal" | "email" | "url" | "search" | "text" | "none";
type AriaAutoComplete = "inline" | "list" | "both" | "none";
// InputEvent
type InputEvent = Common.Event<React.SyntheticEvent<HTMLInputElement>>;
type KeyboardEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends Common.Globals, Common.SpaceAfter, Common.DataAttrs {
  readonly type?: Type;
  readonly inputMode?: InputMode;
  readonly name?: string;
  readonly label?: Common.Translation;
  readonly inlineLabel?: boolean;
  readonly value?: string | number;
  readonly defaultValue?: string | number;
  readonly placeholder?: string;
  readonly prefix?: React.ReactNode;
  readonly suffix?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly tags?: React.ReactNode;
  readonly disabled?: boolean;
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly width?: string;
  readonly required?: boolean;
  readonly tabIndex?: string | number;
  readonly readOnly?: boolean;
  readonly list?: string;
  readonly role?: string;
  readonly autoComplete?: string;
  readonly autoFocus?: boolean;
  readonly id?: string;
  readonly insideInputGroup?: boolean;
  readonly helpClosable?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readonly onBlur?: React.FocusEventHandler<HTMLInputElement>;
  readonly onSelect?: InputEvent;
  readonly onMouseUp?: React.MouseEventHandler<HTMLInputElement>;
  readonly onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
  readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly ariaAutocomplete?: AriaAutoComplete;
  readonly ariaActiveDescendant?: string;
  readonly ariaHasPopup?: boolean;
  readonly ariaExpanded?: boolean;
  readonly ariaControls?: string;
}
