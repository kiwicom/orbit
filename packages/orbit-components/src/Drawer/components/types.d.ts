// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type React from "react";

import type * as Common from "../../common/types";

export interface Props {
  readonly onClick?: Common.Callback;
  readonly title?: React.ReactNode;
}
