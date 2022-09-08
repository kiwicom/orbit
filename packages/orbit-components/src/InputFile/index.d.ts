// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly buttonLabel?: React.ReactNode;
  readonly name?: string;
  readonly placeholder?: Common.Translation;
  readonly fileName?: string;
  readonly allowedFileTypes?: string;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly width?: string;
  readonly required?: boolean;
  readonly helpClosable?: boolean;
  readonly tabIndex?: string | number;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
  readonly insideInputGroup?: boolean;
  readonly onRemoveFile?: Common.Callback;
}

declare const InputFile: React.ForwardRefRenderFunction<HTMLInputElement, Props>;
export { InputFile, InputFile as default };
