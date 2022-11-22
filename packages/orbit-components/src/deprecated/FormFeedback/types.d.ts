// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
}
