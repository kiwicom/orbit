// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ListChoice";

export interface Props extends Common.Global {
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly selectable?: boolean;
  readonly selected?: boolean;
  readonly disabled?: boolean;
  readonly icon?: React.ReactNode;
  readonly onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
  >;
}

declare const ListChoice: React.FunctionComponent<Props>;
export { ListChoice, ListChoice as default };
