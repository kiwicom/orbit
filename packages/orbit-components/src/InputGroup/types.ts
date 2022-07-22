// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

type Size = "small" | "normal";
export type Event = Common.Event<
  React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
>;

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly helpClosable?: boolean;
  readonly onBlurGroup?: Event;
  readonly error?: React.ReactNode;
  readonly disabled?: boolean;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

declare const InputGroup: React.ForwardRefRenderFunction<HTMLDivElement, Props>;
export { InputGroup, InputGroup as default };
