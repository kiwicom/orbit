// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";

type Size = "small" | "normal";
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>>;

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}
