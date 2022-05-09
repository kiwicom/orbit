// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/InputFile";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface Props extends Common.Global, Common.SpaceAfter, Common.Ref {
  readonly label?: Common.Translation;
  readonly buttonLabel?: React.ReactNode;
  readonly name?: string;
  readonly placeholder?: Common.Translation;
  readonly fileName?: string;
  readonly allowedFileTypes?: string | string[];
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly tabIndex?: string | number;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly onRemoveFile?: Common.Callback;
}

declare const InputFile: React.RefForwardingComponent<HTMLInputElement, Props>;
export { InputFile, InputFile as default };
