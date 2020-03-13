// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Stepper";

export { Stepper, Stepper as default };

declare namespace Stepper {
  type Title = string | ((param?: any) => string);
  // InputEvent
  type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

  interface Props extends Common.Global {
    readonly name?: string;
    readonly disabled?: boolean;
    readonly maxValue?: number;
    readonly minValue?: number;
    // Deviation from other stepper properties
    readonly titleIncrement?: Title;
    readonly titleDecrement?: Title;
    // Deviation from common event format onChange
    readonly onChange?: (value: number) => void | Promise<void>;
    readonly onFocus?: Event;
    readonly onBlur?: Event;
    readonly defaultValue?: number;
    readonly step?: number;
  }

  interface State {
    value: number;
  }
}

declare class Stepper extends React.Component<Stepper.Props> {}
