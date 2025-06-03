// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals<HTMLFieldSetElement>, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
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
  readonly ariaLabel?: string;
  readonly ariaLabelledby?: string;
  readonly required?: boolean;
}
