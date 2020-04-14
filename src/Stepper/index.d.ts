// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Stepper";

type Title = string | ((param?: any) => string);
// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface SharedProps extends Common.Global {
  readonly name?: string;
  readonly disabled?: boolean;
  readonly maxValue?: number;
  readonly minValue?: number;
  // Deviation from other stepper properties
  readonly titleIncrement?: Title;
  readonly titleDecrement?: Title;
  // Deviation from common event format onChange
  readonly onChange?: (value: number) => void | Promise<void>;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

export interface Props extends SharedProps {
  readonly defaultValue?: number;
  readonly step?: number;
}

const Stepper: React.FunctionComponent<Props>;
export { Stepper, Stepper as default };
