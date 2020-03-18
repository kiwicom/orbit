// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection";

import * as Common from "../common.d.ts";

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

const Card: React.FunctionComponent<Props>;
export { Card, Card as default, CardSection };
