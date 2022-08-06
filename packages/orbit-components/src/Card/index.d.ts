// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import CardSection from "./CardSection";
import * as Common from "../common/common";
import { As } from "../Heading";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly titleAs?: As;
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
