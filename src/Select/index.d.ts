// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Select";

export { Select, Select as default };

declare namespace Select {
  // InputEvent
  type Event = Common.Event<React.SyntheticEvent<HTMLSelectElement>>;

  interface Option {
    readonly value: string | number;
    readonly label?: string;
    readonly disabled?: boolean;
  }

  interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
    readonly size?: Common.InputSize;
    readonly label?: Common.Translation;
    readonly placeholder?: Common.Translation;
    readonly value?: string | number;
    readonly disabled?: boolean;
    readonly name?: string;
    readonly error?: React.ReactNode;
    readonly help?: React.ReactNode;
    readonly tabIndex?: string;
    readonly onChange?: Event;
    readonly onFocus?: Event;
    readonly onBlur?: Event;
    readonly options: Option[];
    readonly prefix?: React.ReactNode;
  }
}

declare class Select extends React.Component<Select.Props> {}
