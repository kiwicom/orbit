// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/InputField";

export { InputField, InputField as default };

declare namespace InputField {
  type Color =
    | "attention"
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "critical";
  type Type = "text" | "number" | "email" | "password" | "passportid";
  // InputEvent
  type InputEvent = Common.Event<React.SyntheticEvent<HTMLInputElement>>;
  type KeyboardEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

  interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
    readonly size?: Common.InputSize;
    readonly type?: Type;
    readonly name?: string;
    readonly label?: Common.Translation;
    readonly inlineLabel?: boolean;
    readonly value?: string | number | (() => string | number);
    readonly placeholder?: Common.Translation;
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
    readonly required?: boolean;
    readonly tabIndex?: string;
    readonly readOnly?: boolean;
    readonly autoComplete?: string;
    readonly id?: string;
    readonly onChange?: InputEvent;
    readonly onFocus?: InputEvent;
    readonly onBlur?: InputEvent;
    readonly onKeyDown?: KeyboardEvent;
    readonly onKeyUp?: KeyboardEvent;
  }
}

declare class InputField extends React.Component<InputField.Props> {}
