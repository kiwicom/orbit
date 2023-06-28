// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type React from "react";

import type * as Common from "../common/types";

type Size = "small" | "normal";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly helpClosable?: boolean;
  readonly onBlurGroup?: React.FocusEventHandler<HTMLDivElement>;
  readonly error?: React.ReactNode;
  readonly disabled?: boolean;
  readonly onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  readonly onFocus?: React.FocusEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  readonly onBlur?: React.FocusEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}
