// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";

type Title = string | ((...params: readonly any[]) => string);
// InputEvent
export type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface SharedProps extends Common.Globals, Common.Ref, Common.SpaceAfter {
  readonly size?: Common.InputSize;
  readonly label?: Common.Translation;
  readonly step?: number;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly name?: string;
  readonly disabled?: boolean;
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly required?: boolean;
  readonly readOnly?: boolean;
  readonly tabIndex?: string | number;
  readonly titleIncrement?: Title;
  readonly titleDecrement?: Title;
  readonly width?: string;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

export interface Props extends SharedProps {
  readonly defaultValue?: number;
  readonly onChange?: (value: number) => void | Promise<void>;
}
