// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type * as Common from "../../common/types";
import type { Props as ModalContextProps } from "../ModalContext";

export interface Props extends Common.Globals, ModalContextProps {
  readonly children: React.ReactNode;
  readonly suppressed?: boolean;
}
