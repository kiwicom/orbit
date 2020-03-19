// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Textarea";

export { Textarea, Textarea as default };

declare namespace Textarea {
  type Resize = "vertical" | "none";
  // InputEvent
  type Event = Common.Event<React.SyntheticEvent<HTMLTextAreaElement>>;

  interface Props extends Common.Global, Common.SpaceAfter {
    readonly size?: Common.InputSize;
    readonly name?: string;
    readonly label?: Common.Translation;
    readonly value?: string;
    readonly fullHeight?: boolean;
    readonly placeholder?: Common.Translation;
    readonly help?: React.ReactNode;
    readonly error?: React.ReactNode;
    readonly resize?: Resize;
    readonly disabled?: boolean;
    readonly maxLength?: number;
    readonly tabIndex?: string;
    readonly onChange?: Event;
    readonly onFocus?: Event;
    readonly onBlur?: Event;
  }
}

declare class Textarea extends React.Component<Textarea.Props> {}
