// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";
import { SharedProps } from "../index.d";

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

declare const StepperStateless: React.FunctionComponent<Props>;
export { StepperStateless, StepperStateless as default };
