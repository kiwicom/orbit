// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export interface Props {
  readonly onClickOutside?: (ev: MouseEvent) => void;
  readonly children: React.ReactNode | React.ReactNode[];
}
