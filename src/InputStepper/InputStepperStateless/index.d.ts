// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { SharedProps, Event } from "../index.d.ts";

declare module "@kiwicom/orbit-components/lib/InputStepperStateless";
export type ButtonEvent = Common.Event<
  React.SyntheticEvent<HTMLButtonElement> | React.SyntheticKeyboardEvent<HTMLButtonElement>
>;

interface Props extends SharedProps {
  readonly value: number | string | (() => string | number);
  readonly forwardedRef?: RefType;
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: Event;
  readonly onDecrement?: ButtonEvent;
  readonly onIncrement?: ButtonEvent;
  readonly onChange?: Event;
}

const InputStepperStateless: React.FunctionComponent<Props>;
export { InputStepperStateless, InputStepperStateless as default };
