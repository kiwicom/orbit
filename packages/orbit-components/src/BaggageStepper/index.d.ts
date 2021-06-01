// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/BaggageStepper";

type Title = string | ((param?: any) => string);
// InputEvent
export type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface SharedProps extends Common.Global {
  readonly name?: string;
  readonly disabled?: boolean;
  readonly maxValue?: number;
  readonly minValue?: number;
  // Deviation from other BaggageStepper properties
  readonly titleIncrement?: Title;
  readonly titleDecrement?: Title;
  // Deviation from common event format onChange
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

export interface Props extends SharedProps {
  readonly defaultValue?: number;
  readonly step?: number;
  readonly selected?: boolean;
  readonly onChange?: (value: number) => void | Promise<void>;
}

declare const BaggageStepper: React.FunctionComponent<Props>;

export { BaggageStepper, BaggageStepper as default };
