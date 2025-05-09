// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

// InputEvent
export type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface SharedProps extends Common.Globals {
  readonly name?: string;
  readonly active?: boolean;
  readonly disabled?: boolean;
  readonly maxWidth?: string | number;
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly ariaLabelValue?: string;
  readonly ariaLabelledby?: string;
  readonly ariaDescribedby?: string;
  // Deviation from other stepper properties
  readonly titleIncrement?: string;
  readonly titleDecrement?: string;
  readonly descriptionIncrement?: string;
  readonly descriptionDecrement?: string;
  // Deviation from common event format onChange
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

export interface Props extends SharedProps {
  readonly defaultValue?: number;
  readonly step?: number;
  readonly onChange?: (value: number) => void | Promise<void>;
}
