// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Radio";

export interface Props extends Common.Global, Common.Ref {
  readonly label?: React.ReactNode;
  readonly value?: string;
  readonly hasError?: boolean;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly checked?: boolean;
  readonly info?: React.ReactNode;
  readonly readOnly?: boolean;
  readonly tabIndex?: string;
  // InputEvent
  readonly onChange?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}

declare const Radio: React.FunctionComponent<Props>;
export { Radio, Radio as default };
