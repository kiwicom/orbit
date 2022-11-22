// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Title = string | ((param?: any) => string);
// InputEvent
export type Event = Common.Event<React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>>;

export interface SharedProps extends Common.Globals {
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
