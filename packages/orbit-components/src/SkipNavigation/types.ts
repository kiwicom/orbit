// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

interface Action {
  readonly name?: string;
  readonly link?: string;
  readonly onClick?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface Props {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
}

export interface MappedOptions {
  readonly key?: string;
  readonly value: string | number;
  readonly label?: string;
  readonly disabled?: boolean;
}
