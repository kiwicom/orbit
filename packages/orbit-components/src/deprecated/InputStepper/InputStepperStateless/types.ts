// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/types";
import { SharedProps, Event } from "../types";

export interface Props extends SharedProps {
  readonly value: number | string | (() => string | number);
  readonly forwardedRef?: React.Ref<HTMLInputElement>;
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly onDecrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onIncrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onChange?: Event;
}
