// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Option {
  readonly label: React.ReactNode;
  readonly value: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly defaultChecked?: boolean;
}

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  readonly showTooltip?: boolean;
  readonly error?: React.ReactNode;
  readonly maxWidth?: string;
  readonly help?: React.ReactNode;
  readonly label?: string;
  readonly options: Option[];
  readonly ariaLabel?: string;
  readonly ariaLabelledby?: string;
}
