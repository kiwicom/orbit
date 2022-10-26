// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */

export interface Option {
  readonly label: React.ReactNode;
  readonly value: string | number;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly defaultChecked?: boolean;
}

export interface Props extends Common.Global {
  readonly onChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  readonly onFocus?: (ev: React.FocusEvent<HTMLButtonElement>) => void;
  readonly showTooltip?: boolean;
  readonly error?: React.ReactNode;
  readonly maxWidth?: string;
  readonly help?: React.ReactNode;
  readonly label?: React.ReactNode;
  readonly options: Option[];
}

declare const SegmentedSwitch: React.FunctionComponent<Props>;

export { SegmentedSwitch, SegmentedSwitch as default };
