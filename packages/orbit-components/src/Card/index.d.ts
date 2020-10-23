// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import CardSection from "./CardSection";
import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Card";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
  readonly loading?: boolean;
  readonly header?: React.ReactNode;
  readonly dataA11ySection?: string;
}

declare const Card: React.FunctionComponent<Props>;
declare const StyledCard: React.ComponentType<Props>;
export { Card, Card as default, CardSection, StyledCard };
