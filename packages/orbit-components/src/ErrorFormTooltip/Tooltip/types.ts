import type * as React from "react";

import type * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly id?: string;
  readonly children: React.ReactNode;
  readonly shown?: boolean;
  readonly isHelp?: boolean;
  readonly referenceElement?: { current: HTMLElement | null };
  readonly inlineLabel?: boolean;
  readonly onShown: (arg: boolean) => void;
}
