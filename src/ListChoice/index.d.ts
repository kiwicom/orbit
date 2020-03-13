// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/ListChoice";

export { ListChoice, ListChoice as default };

declare namespace ListChoice {
  interface Props extends Common.Global {
    readonly title: Common.Translation;
    readonly description?: Common.Translation;
    readonly selectable?: boolean;
    readonly selected?: boolean;
    readonly icon: React.ReactNode;
    readonly onClick?: Common.Event<
      React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
    >;
  }
}

declare class ListChoice extends React.Component<ListChoice.Props> {}
