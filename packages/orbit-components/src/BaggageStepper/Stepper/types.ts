// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";
import { SharedProps } from "../types";

type InputEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends SharedProps {
  readonly value?: number | string;
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: InputEvent;
  readonly onDecrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onIncrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onChange?: InputEvent;
  readonly selected?: boolean;
}
