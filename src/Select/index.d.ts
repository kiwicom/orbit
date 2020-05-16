// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Select";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLSelectElement>>;

interface Option {
  readonly value: string | number;
  readonly label?: string;
  readonly disabled?: boolean;
}

export interface Props extends Common.Global, Common.Ref, Common.SpaceAfter, Common.DataAttrs {
  readonly id?: string;
  readonly required?: boolean;
  readonly size?: Common.InputSize;
  readonly label?: Common.Translation;
  readonly placeholder?: Common.Translation;
  readonly value?: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly tabIndex?: string;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly options: Option[];
  readonly prefix?: React.ReactNode;
  readonly customValueText?: Common.Translation;
}

declare const Select: React.RefForwardingComponent<Props, HTMLInputElement>;
export { Select, Select as default };
