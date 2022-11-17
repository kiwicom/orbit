// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";
import type { SharedProps } from "../types";

type InputEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends SharedProps, Common.Globals {
  readonly value?: number | string;
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: InputEvent;
  readonly size?: "small" | "normal";
  readonly onDecrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onIncrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onChange?: InputEvent;
}
