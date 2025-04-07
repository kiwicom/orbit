// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly error?: React.ReactNode;
  readonly shown: boolean;
  readonly help?: React.ReactNode;
  readonly inlineLabel?: boolean;
  readonly referenceElement?: React.RefObject<HTMLElement | null>;
  readonly onShown: React.Dispatch<React.SetStateAction<boolean>>;
}
