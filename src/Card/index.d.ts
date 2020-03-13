// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection";

declare module "@kiwicom/orbit-components/lib/Card";

export { Card, Card as default, CardSection };

declare namespace Card {
  interface Props extends Common.Global, Common.SpaceAfter {
    readonly children?: React.ReactNode;
    readonly closable?: boolean;
    readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
  }

  interface State {
    expandedSections: number[];
    initialExpandedSections: number[];
  }
}

declare class Card extends React.Component<Card.Props> {}
