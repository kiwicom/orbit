// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/InputStepper";

export { InputStepper, InputStepper as default };

declare namespace InputStepper {
  type Title = string | ((...params: any[]) => string);
  // InputEvent
  type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

  interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
    readonly size?: Common.TextSize;
    readonly label?: Common.Translation;
    readonly step?: number;
    readonly help?: React.ReactNode;
    readonly error?: React.ReactNode;
    readonly name?: string;
    readonly disabled?: boolean;
    readonly maxValue?: number;
    readonly minValue?: number;
    readonly required?: boolean;
    readonly abIndex?: string;
    readonly titleIncrement?: Title;
    readonly titleDecrement?: Title;
    readonly onFocus?: Event;
    readonly onBlur?: Event;
  }

  interface State {
    value: number;
  }
}

declare class InputStepper extends React.Component<InputStepper.Props> {}
