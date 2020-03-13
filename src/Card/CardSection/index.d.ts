// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Card/CardSection";

export { CardSection, CardSection as default };

declare namespace CardSection {
  interface Props extends Common.Global {
    readonly children: React.ReactNode;
    readonly expandable?: boolean;
    readonly initialExpanded?: boolean;
    readonly onClose?: Common.Callback;
    readonly onExpand?: Common.Callback;
  }
}

declare class CardSection extends React.Component<CardSection.Props> {}
