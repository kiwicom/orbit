// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export interface Option {
  readonly label: React.ReactNode;
  readonly value: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly defaultChecked?: boolean;
}

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onFocus?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
  readonly showTooltip?: boolean;
  readonly error?: React.ReactNode;
  readonly maxWidth?: string;
  readonly help?: React.ReactNode;
  readonly label?: React.ReactNode;
  readonly options: Option[];
}
