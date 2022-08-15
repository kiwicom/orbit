// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Globals {
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly selectable?: boolean;
  readonly selected?: boolean;
  readonly disabled?: boolean;
  readonly icon?: React.ReactNode;
  readonly action?: React.ReactNode;
  readonly onClick?: React.MouseEventHandler<HTMLDivElement>;
}

declare const ListChoice: React.FunctionComponent<Props>;
export { ListChoice, ListChoice as default };
