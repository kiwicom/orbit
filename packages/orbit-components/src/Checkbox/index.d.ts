// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Checkbox";

export interface Props extends Common.Global, Common.Ref {
  readonly label?: React.ReactNode;
  readonly value?: string;
  readonly hasError?: boolean;
  readonly disabled?: boolean;
  readonly checked?: boolean;
  readonly name?: string;
  readonly info?: React.ReactNode;
  readonly tabIndex?: string | number;
  readonly readOnly?: boolean;
  readonly tooltip?: React.ReactNode | null;
  // Should be InputEvent type
  // There is missing support for this event type in Typescript ATM
  // @see https://fettblog.eu/typescript-react/events/#wheres-inputevent
  readonly onChange?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}

declare const Checkbox: React.FunctionComponent<Props>;
export { Checkbox, Checkbox as default };
