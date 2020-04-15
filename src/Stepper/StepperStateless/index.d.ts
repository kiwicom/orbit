// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { SharedProps, ButtonEvent } from "../index.d.ts";

declare module "@kiwicom/orbit-components/lib/StepperStateless";

type InputEvent = Common.Event<React.SyntheticKeyboardEvent<HTMLInputElement>>;

export interface Props extends SharedProps {
  readonly value?: number | string | (() => string);
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: InputEvent;
  readonly onDecrement?: ButtonEvent;
  readonly onIncrement?: ButtonEvent;
  readonly onChange?: InputEvent;
}

const StepperStateless: React.FunctionComponent<Props>;
export { StepperStateless, StepperStateless as default };
