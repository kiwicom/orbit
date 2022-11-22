// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
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
  readonly onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
