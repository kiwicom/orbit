// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import * as Common from "../common/types";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly error?: React.ReactNode;
  readonly shown: boolean;
  readonly help?: React.ReactNode;
  readonly inlineLabel?: boolean;
  readonly referenceElement?: React.RefObject<HTMLElement>;
  readonly inputSize?: Common.InputSize;
  readonly helpClosable?: boolean;
  readonly onShown: React.Dispatch<React.SetStateAction<boolean>>;
}
