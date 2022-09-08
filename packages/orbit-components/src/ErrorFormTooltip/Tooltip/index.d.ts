import * as React from "react";

import * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly id?: string;
  readonly children: React.Node;
  readonly shown?: boolean;
  readonly helpClosable: boolean;
  readonly isHelp?: boolean;
  readonly referenceElement?: { current: HTMLElement | null };
  readonly inputSize?: Common.InputSize;
  readonly inlineLabel?: boolean;
  readonly onShown: (arg: boolean) => void;
}

declare const Tooltip: React.FC<Props>;
export { Tooltip, Tooltip as default };
