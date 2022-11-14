// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Size = "small" | "normal";
export type Event = Common.Event<
  React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
>;

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly helpClosable?: boolean;
  readonly onBlurGroup?: Event;
  readonly error?: React.ReactNode;
  readonly disabled?: boolean;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}
