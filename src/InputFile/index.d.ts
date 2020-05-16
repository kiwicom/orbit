// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/InputFile";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly buttonLabel?: React.ReactNode;
  readonly name?: string;
  readonly placeholder?: Common.Translation;
  readonly fileName?: string;
  readonly allowedFileTypes?: string | string[];
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly tabIndex?: string;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly onRemoveFile?: Common.Callback;
  readonly ref?: Common.Ref;
}

declare const InputFile: React.RefForwardingComponent<Props, HTMLInputElement>;
export { InputFile, InputFile as default };
